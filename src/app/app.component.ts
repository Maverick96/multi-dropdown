import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'multi-select';
  userList = [ {name: "Jack", status: false}, {name: "Rob", status: false}, {name: "Harsh", status: true} ]; 
  

  constructor(){
  }



}
