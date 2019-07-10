import immutable from "immutable"
const defaultState = immutable.fromJS({
    homeNavData:[],
})

export default (state=defaultState,action) => {

    switch (action.type){
        case "GET_HOME_NAV_FULFILLED":
            
            let data1 = action.payload.data.kingkongList;
           
            let zz =   state.setIn(['homeNavData'],data1);
            //console.log(zz.get('homeNavData'))
            return zz
        default :
            return state   
    }
 
}