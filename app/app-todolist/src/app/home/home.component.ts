import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IUser } from '../shared/IUser';
import { ICredentials } from '../shared/ICredentials';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  @Output() setLog = new EventEmitter<any>();

  users: IUser[];

  public newUser: IUser;
  public credentials: ICredentials;
  public passRepeat: string;

  message: string;

  error: any;

  constructor(private _homeService: ServiceService) {
    this.users = [];
    this.newUser = { name: '', email: '', password: '' };
    this.credentials = { email: '', password: '' };
    this.passRepeat = '';
    this.message = 'Mensaje';
  }

  ngOnInit() {
  }

  private resetFields() {
    this.newUser = { name: '', email: '', password: '' };
    this.credentials = { email: '', password: '' };
  }

  addUser(body) {
    this._homeService.postUser(body).subscribe(
      data => {
        // Prints the response
        console.log(data);
        // Reload users
        if (data.success) {
          const newUser: IUser = data.data;
          this.users.unshift(newUser);
        }
        this.message = data.msg;
        this.resetFields();
      },
      error => this.error
    );
  }

  logInUser(credentials) {
    this._homeService.logInUser(credentials).subscribe(
      data => {
        // Prints the response
        console.log(data);
        // Reload users
        if (data.success) {
          const newUser: IUser = data.data;
          this.setLog.next(true);
        }
        this.message = data.msg;
        this.resetFields();
      },
      error => this.error
    );
  }

}
