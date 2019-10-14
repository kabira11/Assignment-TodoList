import React from 'react'

const Todos = ({todos , deleteTodos , completeTodos , textStyleCompleted}) => {

    const todoslist = todos.length ? (
        todos.map( todo => {
            return (
                <div className = "collection-item" key = {todo.id}>
                    <span  onClick = {() => {completeTodos(todo.id)}} style={textStyleCompleted(todo.completed)}>{todo.content}</span>
                    <button type="button" className="close" aria-label="Close" onClick = {() => {deleteTodos(todo.id , todo.completed)}}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )
        })

    ) : (
        <p className = "center">You have no todo's left.</p>
    )
    return (
        <div className = "todos collection">
            {todoslist}
        </div>
    )
    
}

export default Todos;