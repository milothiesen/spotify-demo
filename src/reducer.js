export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // SET token back to null when finished devleoping
    token:
        'BQAl3rAgkfoYp0mYVgl9pwh4rqWVcBdJ6xsoAjnKlOs4-0z7iVfKQQjFEPyZc6Zhl0wcCHXCbde5fE1D4cOUn1Wrdh_CZkCXlaVGC30hKSQac6vNUgKpPiPpUE3nevbwNJxAQqoEhY894XWCgQ2B7HKrZa7shbjW',
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
    }
};

export default reducer;
