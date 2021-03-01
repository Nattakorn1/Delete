import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Todo } from './todo/todo';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Todo
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
