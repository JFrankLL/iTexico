import { IUser } from '../shared/IUser';
import { TaskListService } from './task-list.service';
import { ServiceService } from '../home/service.service';
import { ITask } from '../task/task';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  tasks: ITask[];
  users: IUser[];

  error: any;
  msg: string;

  constructor(private _tasksService: TaskListService, private _userService: ServiceService) {
    this.tasks = [];
    this.users = [];
  }

  ngOnInit() {
    this.getTasks();
    this.getUsers();
  }

  public getUsers() {
    this._userService.getUsers().subscribe(
      data => this.users = data,
      error => this.error
    );
  }

  public getTasks() {
    this._tasksService.getTasks().subscribe(
      data => this.tasks = data,
      error => this.error
    );
  }
  public getTask(id: string) {
    this._tasksService.getTask(id).subscribe(
      data => this.tasks = [data],
      error => this.error
    );
  }

  public postTask(body) {
    this._tasksService.postTask(body).subscribe(
      data => {
        // Prints the response
        console.log(data);
        // Reload tasks
        if (data.success) {
          const newTask: ITask = data.data;
          this.tasks.unshift(newTask);
        }
        this.msg = data.msg;
      },
      error => this.error
    );
  }

  public toggle(body) {
    this._tasksService.toggleTask(body).subscribe(
      data => {
        // Prints the response
        console.log(data);
        // Reload tasks
        if (data.success) {
          this.tasks.map(task => {
            if (task._id === data.data._id) {
              task.toggle = data.data.toggle;
            }
          });
        }
      },
      error => this.error
    );
  }

  public deleteTask(id) {
    this._tasksService.deleteTask(id).subscribe(
      data => {
        // Prints the response
        console.log(data);
        // Reload tasks
        if (data.success) {
          this.tasks = this.tasks.filter(task => task._id !== id);
        }
      },
      error => this.error
    );
  }
}
