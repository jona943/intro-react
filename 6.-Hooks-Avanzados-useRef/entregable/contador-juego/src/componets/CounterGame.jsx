const initialState = { count: 0, historial: [] };
export function reducer(state, action) {
    switch (action.type){
        case "incremento":
            return{
                count: state.count + 1,
                historial: [...state.historial, `+1 (nuevo valor: ${state.count + 1})`]
            };
        case "decremento":
            return{
                count: state.count -1,
                historial: [...state.historial, `-1 (nuevo valor: ${state.count - 1})`]
            }
        case "reset":
            return initialState;
        default:
            return state;
    }
}