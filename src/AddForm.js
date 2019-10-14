import React, { Component } from 'react'

class AddForm extends Component {
    state = {
        content : ''
    }

    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.content){
            this.props.addTodo(this.state)
        }
        else{
          alert("Did You missing Add Task !!!!!!!!!!.")  
        }

        this.setState({
            content : ''
        })
    }
  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
            <label>Add New Todo.</label>
            <input type = "text" onChange={this.handleChange} value = {this.state.content}></input>
        </form>
      </div>
    )
  }
}

export default AddForm
