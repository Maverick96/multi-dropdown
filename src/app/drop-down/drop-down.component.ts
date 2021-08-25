import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface IUser{
  name: string,
  status: boolean
}

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})



export class DropDownComponent implements OnInit {

  @Input() userList:IUser[] = [];
  @Output() selectedUsers = new EventEmitter();  
    
    selectedUserMap : any = {};
    showDropDown: boolean = false;

    constructor(){
      
    }

    ngOnInit(){
      console.log("USER ", this.userList)
        this.userList.map( (user, index) => {
            if(user.status)
              this.selectedUserMap[user.name] = index
        })

        this.selectedUsers.emit(this.selectedUserMap);
        
    }
    getSelectedValue(user: IUser, index: number){
        user.status = !user.status
        if(user.status){
          this.selectedUserMap[user.name] = index;  
        }else{
            delete this.selectedUserMap[user.name]
        }
        this.selectedUsers.emit(this.selectedUserMap);
    }

}
