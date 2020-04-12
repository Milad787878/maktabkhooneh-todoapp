import {observable, computed, action, get} from "mobx";


class Todo {
    @observable value;
    @observable id;
    @observable complete;

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }
}
class TodoStore {
    @observable todos = [];
    @observable completes = [];
    @observable lefts = [];
    @observable flag = 0;

    @action creatTodo(value) {
        this.todos.push(new Todo(value));
        this.lefts.push(new Todo(value))
    }
    @action clearAll = () => {
        this.todos = [];
        this.completes = [];
        this.lefts = [];
        this.flag = 0;
    };
    @action showAll = () => {
        this.flag = 0;
    };
    @action complete = () => {
        this.completes = this.todos.filter(todo => todo.complete === true);
        this.flag = 1;
        console.log(this.completes.length)
    };
    @action showLefts = () => {
        this.lefts = this.todos.filter(todo => todo.complete === false);
        this.flag = -1;
    }






}


let store = new TodoStore();
export default store