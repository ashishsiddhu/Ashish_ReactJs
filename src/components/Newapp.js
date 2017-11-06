import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodos } from './../actions/actions'

class NewApp extends Component {
    render() {
       const { dispatch, visibleTodos } = this.props
     
       return (
          <div>
             <AddTodos onAddClick = {function(text) {return dispatch(addTodos(text))}} />
             <TodoList todos = {visibleTodos}/>
          </div>
       )
    }
 }
 
 function select(state) {
    return {
       visibleTodos: state.todos
    }
 }
 
 export default connect(select)(NewApp)