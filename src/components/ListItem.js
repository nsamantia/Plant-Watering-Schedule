import React from 'react'

const ListItem = (props) => {
    const {listId} = props.data
    return(
        <div>
            <img src={props.data.image} alt="plant"/>
            <div className="buttonsContainer">
                <button onClick={() => props.changeWatered(listId, 'clicked')}>Watered: {props.data.watered}</button>
                <button onClick={() => props.removeFromList(listId)}>X</button>
                
            </div>
        </div>
    )
}

export default ListItem