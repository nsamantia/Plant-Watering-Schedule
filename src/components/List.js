import React from 'react'
import ListItem from './ListItem'


const List = (props) => {
    return(
        <div>
            <div>
                <h2>Plants to Water</h2>
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
    )
}

export default List
