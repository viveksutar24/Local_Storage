import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookiesComponent } from './cookies/cookies.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { TASKMANAGEMENTComponent } from './task-management/task-management.component';
import { Taskmanagement2Component } from './taskmanagement2/taskmanagement2.component';

@NgModule({
  declarations: [
    AppComponent,
    CookiesComponent,
    LocalstorageComponent,
    TASKMANAGEMENTComponent,
    Taskmanagement2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
