import React, { Component } from 'react'

export default class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }
    render() {
        return (
            
            <div className="todoListMain">
                <h1>My To-Do List</h1>
                <div className='header'>                    
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder="Task"
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                        <button type="submit" class="btn btn-link" data-mdb-color="dark">Add Task to My List</button>
                    </form>
                </div>
            </div>
        )
    }
}
