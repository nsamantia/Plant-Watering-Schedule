import React from 'react'

const ListItem = (props) => {
    const {listId} = props.data
    return(
        <div className="ItemList">
            <img src={props.data.image} alt="plant"/>
            <div className="plant-btn-container">
                <button onClick={() => props.changeWatered(listId, 'clicked')} className="list-button">Watered: {props.data.watered} </button>
                <button onClick={() => props.removeFromList(listId)} className="list-button-x">X</button>
                
            </div>
        </div>
    )
}

export default ListItem