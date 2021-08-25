import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.css']
})
export class PillComponent implements OnInit {
  @Input() name:string = "";
  @Input() index: number = -1;
  @Output() removeUser = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  remove(){
      this.removeUser.emit(this.name);
  }

}
