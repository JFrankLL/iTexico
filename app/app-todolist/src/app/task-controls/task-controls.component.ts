import { IUser } from '../shared/IUser';
import { ITask } from '../task/task';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-controls',
  templateUrl: './task-controls.component.html',
  styleUrls: ['./task-controls.component.sass']
})
export class TaskControlsComponent implements OnInit {

  @Input() newTask: ITask;
  @Input() users: IUser;

  @Output() addTaskParent = new EventEmitter<string>();
  @Input() message;

  constructor() {
    this.newTask = { name: '', task: '', date: new Date, _id: '', toggle: false, owner: '' };
  }

  ngOnInit() { }

  addTask(body) {
    this.addTaskParent.next(body);
  }
}
