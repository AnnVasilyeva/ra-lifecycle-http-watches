import './App.css';
import React, {Component} from 'react';
import {nanoid} from 'nanoid';
import TimeAddForm from "./components/TimeAddForm";
import ClockList from "./components/ClockList";

export default class App extends Component {
    state = {
        data: [
            {name: 'London', timezone: '3', id: nanoid()}
        ]
    }

    addItem = (body) => {

        const newItem = {
            name: body.name,
            timezone: body.timezone,
            id: nanoid()
        }

        this.setState(({data})=> {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    deleteItem = (id) => {
        this.setState(({data}) => {

            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="App">
                <TimeAddForm onAdd={this.addItem}/>
                <ClockList clocks={this.state.data} onDelete={this.deleteItem}/>
            </div>
        )
    }

}


