import { Injectable } from '@angular/core';
import {Init} from './init-todos';

@Injectable()
export class TodoService extends Init{

  constructor() {
    super();
    console.log('TodoService Inicializado...');
    this.load();
  }

  getTodos(){
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo(newTodo){
    var todos = JSON.parse(localStorage.getItem('todos'));
    //Agregar nuevo
    todos.push(newTodo);
    //Establecer
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(todoText){
    var todos = JSON.parse(localStorage.getItem('todos'));

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].text == todoText){
          todos.splice(i,1);
        }
    }

    //Establecer
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(oldText, newText){
    var todos = JSON.parse(localStorage.getItem('todos'));

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].text == oldText){
          todos[i].text = newText;
        }
    }

    //Establecer
    localStorage.setItem('todos', JSON.stringify(todos));
  }

}
