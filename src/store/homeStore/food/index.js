import immutable from "immutable"

const defaultState = immutable.fromJS({
    shopInfo:'',
    shoppingCart:'',
    categoryList:''
})

export default (state=defaultState,action)=>{
    switch (action.type){
        case "FOOD_FULFILLED":
            let data = action.payload.data;
            let cc =  immutable.fromJS(state.set('shopInfo',data.shopInfo).set('shoppingCart',data.shoppingCart).set('categoryList',data.categoryList))
            return cc;
        default    :
            return state
    }
}


