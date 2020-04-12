import React from "react";
import {observer} from 'mobx-react';
import Navar from "./Navar";
import store from "./TodoStore";

@observer
export default class TodoList extends React.Component {
    createNew(e) {
        if (e.which === 13 && e.target.value !== '') {
            this.props.store.creatTodo(e.target.value);
            e.target.value = ''
        }
    }

    toggleComplete(todo) {
        todo.complete = !todo.complete
    }

    render() {
        const {todos} = this.props.store;
        const {completes} = this.props.store;
        const {lefts} = this.props.store;
        let  {flag} = this.props.store;

        const todoLis = todos.map(todo => (
            <li key={todo.id} style={{width: '55%', marginLeft: '15%'}}>
                <input type="checkbox"
                       onChange={this.toggleComplete.bind(this, todo)}
                       value={todo.complete}
                       checked={todo.complete}/>{todo.value}</li>
        ));
        const completed = completes.map(todo => (
            <li key={todo.id} style={{width: '55%', marginLeft: '15%'}}>
                <input type="checkbox"
                       onChange={this.toggleComplete.bind(this, todo)}
                       value={todo.complete}
                       checked={todo.complete}/>{todo.value}</li>
        ));
        const left = lefts.map(todo => (
            <li key={todo.id} style={{width: '55%', marginLeft: '15%'}}>
                <input type="checkbox"
                       onChange={this.toggleComplete.bind(this, todo)}
                       value={todo.complete}
                       checked={todo.complete}/>{todo.value}</li>
        ));

        let final;
        if (flag === 1 && store.completes.length > 0) {
            final = completed
        }
        if (flag === 0) {
            final = todoLis
        }
        if (flag === -1) {
            final = left
        }

        return (
            <div>
                <h1 style={{color: 'red'}}>TODO APP</h1>
                <input className="create" style={{width: '55%'}}
                       placeholder='What work should be done? '
                       onKeyPress={this.createNew.bind(this)}/>
                <ul id="show" className="d-flex-column justify-content-center"
                    style={{listStyleType: 'none'}}>{final}</ul>
                {store.todos.length >= 1 && <Navar/>}
            </div>
        )
    }
}