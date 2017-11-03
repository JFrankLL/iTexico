import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ITask } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask;
  @Output() deleteP = new EventEmitter<string>();
  @Output() toggleP = new EventEmitter<any>();
  marcar;

  constructor() {
    this.marcar = 'marcar';
  }

  ngOnInit() {
    this.marcar = (!this.task.toggle) ? 'marcar' : 'desmarcar';
  }

  delete() {
    this.deleteP.next(this.task._id);
  }

  toggle() {
    this.toggleP.next(this.task);
    this.marcar = (this.task.toggle) ? 'marcar' : 'desmarcar';
  }

}
