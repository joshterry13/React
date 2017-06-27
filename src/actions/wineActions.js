import * as types from '../actions/actionTypes'


export const fetchWineSuccess = (wines) => {
    return { type: types.FETCH_WINE_SUCCESS, wines}
}

export const fetchWines = () => async dispatch =>{

    const wines = [
        {name:"Merlot",
         rating: '99'},
        {name:"Cabernet",
        rating: '94'},
        {name:"Malbec",
        rating: '93'}
    ];

    dispatch(fetchWineSuccess(wines))

}