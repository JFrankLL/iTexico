import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { TaskComponent } from './task/task.component';

import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { DescriptionComponent } from './shared/description/description.component';

import { HttpClientModule } from '@angular/common/http';

import { ProfileService } from './profile/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TaskComponent,
    ConvertToSpacePipe,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
