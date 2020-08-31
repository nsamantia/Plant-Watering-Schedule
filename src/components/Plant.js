import React, {Component} from 'react'

export default class Plant extends Component {
        constructor(){
            super()
            this.state = {
                
                
            }
        }

        handleAddToList() {
            this.props.addToList(this.props.data.id)
           
           
        }

        render() {
            return (
                <div>
                    <div >
                        <input type='image' src={this.props.data.image} onClick={() => this.handleAddToList()} className = "plantButtons" alt="image of plant"/>
                        
                    </div>
                </div>

            )

            
        }

}