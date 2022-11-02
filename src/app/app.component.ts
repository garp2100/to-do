import { Component } from '@angular/core';
import { ToDo } from './to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do';
  tasksArray:  ToDo[] = [
    {
      task: "Laundry",
      completed: true
    },
    {
      task: "Pay Phone Bill",
      completed: false
    },
    {
      task: "Wash Dishes",
      completed: true
    },
    {
      task: "Bathe Dog",
      completed: false
    }
  ];

  addTask(taskForm: NgForm): void {
    let newTask: string = taskForm.form.value.task;
    this.tasksArray.push(newTask);
  }
}
