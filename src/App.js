import React from "react"

import ToDoItem from "./components/ToDoComponent.js"
import ToDoData from "./data/ToDoData.js"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: ToDoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState((prevState) => {
            return(
                this.setState((prevState) => {
                    const updatedToDos = prevState.todos.map(todo => {
                        if (todo.id === id) {
                            todo.completed = !todo.completed
                        }
                        return todo
                    })
                    return {
                        todos: updatedToDos
                    }
                })
            )
        })
    }

    render () {
        const todosItems = this.state.todos.map(item => 
        <ToDoItem key = {item.id} item = {item} handleChange = {this.handleChange} />)
        return(
            <div className = "todo-list">
                {todosItems}
            </div>
        )
    }
}

export default App