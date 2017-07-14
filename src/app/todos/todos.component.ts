import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  text;
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        text: 'Buscar a niño a la escuela'
      },{
        text: 'Reunión de trabajo'
      },{
        text: 'Cena con esposa'
      }
    ]
  }

  addTodo(){
    console.log(this.text);
  }

}
