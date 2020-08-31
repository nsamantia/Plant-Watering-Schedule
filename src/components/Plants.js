import React from 'react'
import Plant from './Plant'

const Plants = (props) => {
    return (
    <div className="Plants" >
        <div className = 'buttonContainer'>
        {props.plants.map((element) => {
            return (
            <Plant
            addToList={props.addToList}
             key={element.id} data={element}
             />

            )
        })}
        
        </div>
    </div>

    )
    

}
export default Plants