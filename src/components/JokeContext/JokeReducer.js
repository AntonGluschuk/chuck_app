export const JokeReducer = (state, action) => {
    switch (action.type) {
        case 'LIKE_JOKE':
            return [
                action.prev_jokes.find(joke => joke.id === action.joke_id),
                ...state
            ];
        case 'UNLIKE_JOKE':
            return state.filter(joke => joke.id !== action.favJoke_id);
        default:
            return state;
    }
};