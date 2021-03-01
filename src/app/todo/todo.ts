import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component ({
    selector: 'todo',
    templateUrl: './todo.html',
    styleUrls: ['./todo.css']
})
export class Todo {
    tasks : string [] = [] ;
    task : string ;
    
    addTask(){
        this.tasks.push(this.task);
    }
    deleteTask(input:string){
        this.tasks = this.tasks.filter((t) => t !== input);
    }
}
