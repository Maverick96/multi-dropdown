import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.css']
})
export class MultiSelectDropdownComponent implements OnInit {
  @Input() userList: any[] = [];
  selectedUsers: any= {};
  selectedUserList: any[] = []
  user$: any;
  constructor() { }

  ngOnInit(): void {
  }

  updateSelectedUsers(selectedUser: {}){
    this.selectedUsers = selectedUser;
    this.selectedUserList = Object.keys(this.selectedUsers);
  }

  removeSelectedUser(name:string){
    const index = this.selectedUsers[name];
    delete this.selectedUsers[name];
    this.selectedUserList = Object.keys(this.selectedUsers);
    this.userList[index].status = false;
  }

}
