import React from "react"
import tab from "./tabb"
import style from  "./index.module.css"

class TabBottom extends React.Component{
  
    render(){ 
        let {mine,movie,sell} = this.props;
        return (
                <div className={style.box}>
                    
                    <p>{mine}</p>
                    <p>{movie}</p>
                    <p>{sell}</p>        
                </div>
            )
         
}
}
export default tab()(TabBottom)