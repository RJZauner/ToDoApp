import React from "react"

function ToDoItem (props) {
    const completedStyle = {
        fontStyle: "Italic",
        color: "cdcdcd",
        textDecoration: "line-through"
    }
    return(
        <div className = "todo-item">
            <input type = "checkbox" onChange ={() => props.handleChange(props.item.id)}></input>
            <p style = {props.item.completed ? completedStyle: null}>{props.item.text}</p>
        </div>
    )
}

export default ToDoItem