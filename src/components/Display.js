import React, {Component} from 'react'
import Plants from './Plants'
import List from './List'
import axios from 'axios'

export default class Display extends Component{
    constructor() {
        super()
        this.state = {
            plants: [],
            list: {items: []}
        }
        this.addToList = this.addToList.bind(this)
        this.changeWatered = this.changeWatered.bind(this)
        this.removeFromList = this.removeFromList.bind(this)

    }

    componentDidMount() {
        axios.get('/api/plants').then((res) => {
            axios.get('/api/list').then((listRes) => {
                this.setState({
                    plants: res.data,
                    list: listRes.data
            })
            })
        })
    }


    addToList(plantId) {
       axios.post('/api/list', {plantId}).then((res) => {
           this.setState({
               list: res.data, 
           })
       })
      
    }
    changeWatered(listId, action) {
        axios.put(`/api/list/${listId}?action=${action}`).then((res) => {
            this.setState({
                list: res.data,
            })
        })
        .catch((err) => {
            alert(err)
        })
    }
    removeFromList(listId){
        axios.delete(`/api/list/${listId}`).then((res) => {
            this.setState({
                list: res.data
            })
        })
        .catch((err) => {
            alert(err)
        })
    }


    render(){
        return(

            <div>
                
            <Plants addToList={this.addToList} plants={this.state.plants} />
            
           

            <List 
                changeWatered={this.changeWatered}
                removeFromList={this.removeFromList}
                list={this.state.list}
             />

            </div>
        )
    }

}
