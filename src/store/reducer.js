import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        meat: 0,
        bacon: 0,
        cheese: 0
    },
    totalPrice: 4,
    disable: true
}

const INGREDIENT_PRICES = {
    salad: 130,
    meat: 200,
    bacon: 100,
    cheese: 260
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.addIngredient:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                disable: false,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        
        case actionTypes.removeIngredient:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                disable: state.totalPrice < 300
            }
    
        default: return state
    }
}

export default reducer;