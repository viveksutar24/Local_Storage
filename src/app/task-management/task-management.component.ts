import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TASKMANAGEMENTComponent implements OnInit {

  tdate: string = "";
  ttime: string = "";
  ttask: string = "";
  tasks = new Array();



  ngOnInit(): void {

    this.tasks = JSON.parse(localStorage.getItem("tasks") || '{}');

  }

  save(): void {
    if (this.tdate == "") {
      alert("Enter Date");
      return;
    }
    if (this.ttime == "") {
      alert("Enter Time");
      return;
    }
    if (this.ttask == "") {
      alert("Enter Task");
      return;
    }


    let task = { date: this.tdate, time: this.ttime, task: this.ttask };

    this.tasks = JSON.parse(localStorage.getItem("tasks") || '[]');

    this.tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(this.tasks));

  }

  delete(i:any) {
    this.tasks.splice(i,1);
  }

  edit(){
    
  }

}














