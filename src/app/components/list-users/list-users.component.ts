import { Component, OnInit } from '@angular/core';
import { ReactiveService } from 'src/app/services/reactive.service';
import { UserService } from 'src/app/services/user.service';
import { UserI } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent  implements OnInit {

  listUsers!: UserI[];

  constructor( private reactiveService: ReactiveService ) { }

  ngOnInit() {

    this.reactiveService.$reactiveArray.subscribe( (reactive)=>{
      if(reactive){
        this.listUsers = reactive.reverse();
        console.log("listUsers", this.listUsers);
      }
    });
    
  }

}
