import React from 'react'
import ListItem from './ListItem'


const List = (props) => {
    return(
        <div className="List">
            <div className="list-container">
                <h2 className="list-h2">Plants to Water</h2>
                <div className="list-items">
                {props.list.items.map((element) => {
                    return (

                        <ListItem 
                            changeWatered={props.changeWatered}
                            removeFromList={props.removeFromList}
                            key={element.listId}
                            data={element}
                        />
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default List
