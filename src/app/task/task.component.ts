import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../entities/task';


@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  taskItem: Task;
  
  @Output() 
  onDelete = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }
  
  deleteTask() {
    this.onDelete.emit(this.taskItem);
  }
}
