import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy 
} from "firebase/firestore";
import { db } from "./config";

const TWEETS_COLLECTION = "tweets";

export const fetchTweetsFromDB = async () => {
  try {
    const q = query(collection(db, TWEETS_COLLECTION), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return [];
  }
};

export const addTweetToDB = async (tweetData) => {
  try {
    const docRef = await addDoc(collection(db, TWEETS_COLLECTION), {
      ...tweetData,
      createdAt: new Date().toISOString()
    });
    return { id: docRef.id, ...tweetData };
  } catch (error) {
    console.error("Error adding tweet:", error);
    throw error;
  }
};

export const updateTweetInDB = async (id, newContent) => {
  try {
    const tweetRef = doc(db, TWEETS_COLLECTION, id);
    await updateDoc(tweetRef, { content: newContent });
  } catch (error) {
    console.error("Error updating tweet:", error);
    throw error;
  }
};

export const deleteTweetFromDB = async (id) => {
  try {
    const tweetRef = doc(db, TWEETS_COLLECTION, id);
    await deleteDoc(tweetRef);
  } catch (error) {
    console.error("Error deleting tweet:", error);
    throw error;
  }
};
