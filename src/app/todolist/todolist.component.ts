import { Component, OnInit } from '@angular/core';
import { Task } from '../entities/task';

@Component({
  selector: 'todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  
  taskCounter: number;
  title: string;
  allTasks: Array<Task>;

  constructor() { }

  ngOnInit() {
    this.allTasks = [
      new Task(0, 'buy vodka', true),
      new Task(1, 'buy pizza', false),
      new Task(2, 'drink and eat', false)
    ];
    this.taskCounter = 3;
  }


  createTask() {
    let task = new Task(this.taskCounter, this.title, false);
    this.allTasks.push(task);
    this.taskCounter++;
  }

  deleteTask(e) {
    for(let i = 0; i < this.allTasks.length; i++) {
      if (this.allTasks[i].title === e.title) {
        this.allTasks.splice(i, 1);
        return false;
      }
    }
  }

 
}
