const reducer = (state, action) => {
    switch (action.type) {
        case 'USERFORM_REQUEST':{
            return {
                ...state,
                users: [action.payload]
            }
        }
        case 'DATA_ACADEMIC':{
            return {
                ...state,
                dataAcademica: [action.payload]
            }
        }
        case 'VIEW_COMPONENT':{
            return {
                ...state,
                viewComponent: action.payload
            }
        }
        default: 
            return state;
    }
}

export default reducer;