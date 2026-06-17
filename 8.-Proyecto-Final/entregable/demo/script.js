import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    updateDoc, 
    deleteDoc, 
    doc, 
    query, 
    orderBy,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Configuración de Firebase (Extraída de tu API temporal)
const firebaseConfig = {
    apiKey: "AIzaSyCTBr31dGZ22uCxiIH1Wd0caZvBxeo_7qc",
    authDomain: "base-datos-twitter-clone.firebaseapp.com",
    projectId: "base-datos-twitter-clone",
    storageBucket: "base-datos-twitter-clone.firebasestorage.app",
    messagingSenderId: "614156888645",
    appId: "1:614156888645:web:c7a291e29300e6008b912c",
    measurementId: "G-HVNH3V9WGK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const TWEETS_COLLECTION = "tweets";

// Estado Global Simple
let currentUser = JSON.parse(localStorage.getItem('user')) || null;
let tweets = [];

// Elementos del DOM
const contentArea = document.getElementById('content-area');
const pageTitle = document.getElementById('page-title');
const navHome = document.getElementById('nav-home');
const navProfile = document.getElementById('nav-profile');
const navLogin = document.getElementById('nav-login');
const logoutContainer = document.getElementById('logout-container');
const logoutBtn = document.getElementById('logout-btn');

// --- Ruteo Simple ---
function navigate(page) {
    [navHome, navProfile, navLogin].forEach(el => el.classList.remove('active'));
    
    if (page === 'home') {
        navHome.classList.add('active');
        renderHome();
    } else if (page === 'profile') {
        if (!currentUser) return navigate('login');
        navProfile.classList.add('active');
        renderProfile();
    } else if (page === 'login') {
        navLogin.classList.add('active');
        renderLogin();
    }
    updateAuthUI();
}

function updateAuthUI() {
    if (currentUser) {
        navLogin.style.display = 'none';
        logoutContainer.style.display = 'block';
        pageTitle.innerText = `Hola, ${currentUser.username}`;
    } else {
        navLogin.style.display = 'flex';
        logoutContainer.style.display = 'none';
        pageTitle.innerText = 'Clon de Twitter';
    }
}

// --- Escuchador de Firebase ---
onSnapshot(
    query(collection(db, TWEETS_COLLECTION), orderBy("createdAt", "desc")), 
    (snapshot) => {
        tweets = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        if (navHome.classList.contains('active')) renderHome();
        else if (navProfile.classList.contains('active')) renderProfile();
    },
    (error) => {
        console.error("Error en tiempo real de Firebase:", error);
    }
);

// --- Renderizadores ---

function renderHome() {
    const tpl = document.getElementById('tpl-home').content.cloneNode(true);
    const msg = tpl.querySelector('#welcome-message');
    
    if (currentUser) {
        msg.innerHTML = `Bienvenido de nuevo, <strong>${currentUser.username}</strong>.`;
        const formRoot = tpl.querySelector('#tweet-form-root');
        formRoot.appendChild(createTweetForm());
    } else {
        msg.innerText = 'Únete a la conversación. Inicia sesión para postear.';
    }

    const listRoot = tpl.querySelector('#tweet-list-root');
    renderTweetList(listRoot, tweets);

    contentArea.innerHTML = '';
    contentArea.appendChild(tpl);
}

function renderProfile() {
    const tpl = document.getElementById('tpl-profile').content.cloneNode(true);
    tpl.querySelector('#profile-username').innerText = currentUser.username;
    
    const userTweets = tweets.filter(t => t.author === currentUser.username);
    const listRoot = tpl.querySelector('#profile-tweet-list');
    renderTweetList(listRoot, userTweets);

    contentArea.innerHTML = '';
    contentArea.appendChild(tpl);
}

function renderLogin() {
    const tpl = document.getElementById('tpl-login').content.cloneNode(true);
    const form = tpl.querySelector('#login-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username-input').value;
        currentUser = { username };
        localStorage.setItem('user', JSON.stringify(currentUser));
        navigate('home');
    });

    contentArea.innerHTML = '';
    contentArea.appendChild(tpl);
}

// --- Componentes ---

function createTweetForm() {
    const tpl = document.getElementById('tpl-tweet-form').content.cloneNode(true);
    const form = tpl.querySelector('#tweet-form');
    const input = tpl.querySelector('#tweet-input');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const content = input.value.trim();
        if (content) {
            try {
                await addDoc(collection(db, TWEETS_COLLECTION), {
                    author: currentUser.username,
                    content,
                    createdAt: new Date().toISOString()
                });
                input.value = '';
            } catch (error) {
                console.error("Error al publicar:", error);
                alert("Error al publicar: " + error.message);
            }
        }
    });

    return tpl;
}

function renderTweetList(container, tweetArray) {
    container.innerHTML = '';
    if (tweetArray.length === 0) {
        container.innerHTML = '<p class="no-tweets">Cargando tweets...</p>';
        return;
    }

    tweetArray.forEach(tweet => {
        const tpl = document.getElementById('tpl-tweet-item').content.cloneNode(true);
        
        tpl.querySelector('.tweet-author').innerText = `@${tweet.author}`;
        tpl.querySelector('.tweet-date').innerText = new Date(tweet.createdAt).toLocaleString();
        tpl.querySelector('.content-text').innerText = tweet.content;

        if (currentUser && currentUser.username === tweet.author) {
            const actions = tpl.querySelector('.tweet-actions');
            actions.style.display = 'flex';

            const editBtn = tpl.querySelector('.edit');
            const deleteBtn = tpl.querySelector('.delete');
            const contentText = tpl.querySelector('.content-text');
            const editMode = tpl.querySelector('.edit-mode');
            const editInput = tpl.querySelector('.edit-input');

            deleteBtn.onclick = async () => {
                try {
                    await deleteDoc(doc(db, TWEETS_COLLECTION, tweet.id));
                } catch (error) { console.error(error); }
            };

            editBtn.onclick = () => {
                contentText.style.display = 'none';
                editMode.style.display = 'block';
                editInput.value = tweet.content;
            };

            tpl.querySelector('.cancel-btn').onclick = () => {
                contentText.style.display = 'block';
                editMode.style.display = 'none';
            };

            tpl.querySelector('.save-btn').onclick = async () => {
                const newContent = editInput.value.trim();
                if (newContent) {
                    try {
                        await updateDoc(doc(db, TWEETS_COLLECTION, tweet.id), { content: newContent });
                    } catch (error) { console.error(error); }
                }
            };
        }

        container.appendChild(tpl);
    });
}

// --- Eventos de Navegación ---
navHome.onclick = (e) => { e.preventDefault(); navigate('home'); };
navProfile.onclick = (e) => { e.preventDefault(); navigate('profile'); };
navLogin.onclick = (e) => { e.preventDefault(); navigate('login'); };
logoutBtn.onclick = () => {
    currentUser = null;
    localStorage.removeItem('user');
    navigate('home');
};

// Iniciar App
navigate('home');
