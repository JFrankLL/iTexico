import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { DescriptionComponent } from './shared/description/description.component';

import { ProfileService } from './profile/profile.service';
import { TaskListService } from './task-list/task-list.service';
import { ServiceService } from './home/service.service';

import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';

import { RouterModule, Routes } from '@angular/router';
import { TaskControlsComponent } from './task-controls/task-controls.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TaskListComponent,
    TaskComponent,
    DescriptionComponent,
    ConvertToSpacePipe,
    TaskControlsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'taskList', component: TaskListComponent },
      { path: '', component: HomeComponent }
    ])
  ],
  providers: [ProfileService, TaskListService, ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
