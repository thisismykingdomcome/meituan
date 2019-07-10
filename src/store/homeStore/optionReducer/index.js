import immutable from "immutable"

const defaultState = immutable.fromJS({
    optionData:'',
})

export default (state=defaultState,action)=>{

    switch (action.type){
        case "GET_HOME_OPT_FULFILLED":
            let data2 = immutable.fromJS(action.payload.data.sortVOList);       
      
            return  state.setIn(['optionData'],data2);   
            //console.log(zz.get('homeNavData'))
        default :
            return state    
    }
}