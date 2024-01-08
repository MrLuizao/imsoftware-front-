import { Component, OnInit } from '@angular/core';
import { ReactiveService } from 'src/app/services/reactive.service';
import { UserService } from 'src/app/services/user.service';
import { UserI } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-list-paginate',
  templateUrl: './list-paginate.component.html',
  styleUrls: ['./list-paginate.component.scss'],
})
export class ListPaginateComponent  implements OnInit {
  
  listUsers!: UserI[];

  itemsPerPage = 10;
  currentPage = 1;

  constructor( private userService: UserService, private reactiveService: ReactiveService ) { }
  
  ngOnInit(  ) {

    this.userService.getAllUsers().subscribe({
      next:(response) => {
        this.listUsers = response;

        this.loadInitialUsers();
      },
      error:(error: any) => {
        console.error(error)
      }
    });

    // this.listUsers = [
    //   {
    //     "name": "Bart Simpson",
    //     "age": "10",
    //     "mail": "simpson@bart.com"
    //   },
    //   {
    //     "name": "March Simpson",
    //     "age": "33",
    //     "mail": "marge@simpson.com"
    //   },
    //   {
    //     "name": "Lisa Simpson",
    //     "age": "8",
    //     "mail": "lisa@simpson.com"
    //   },
    //   {
    //     "name": "Homer Simpson",
    //     "age": "32",
    //     "mail": "homer@simpson.com"
    //   },
    //   {
    //     "name": "Test Form",
    //     "age": "30",
    //     "mail": "form@test.mx"
    //   },
    //   {
    //     "name": "Luis NEW",
    //     "age": "20",
    //     "mail": "test@test"
    //   },
    //   {
    //     "name": "Lusi Test",
    //     "age": "11",
    //     "mail": "test@new.com"
    //   },
    //   {
    //     "name": "Luis VR",
    //     "age": "7",
    //     "mail": "lvr@test.com"
    //   },

    //   {
    //     "name": "Bart Simpson",
    //     "age": "10",
    //     "mail": "simpson@bart.com"
    //   },
    //   {
    //     "name": "March Simpson",
    //     "age": "33",
    //     "mail": "marge@simpson.com"
    //   },
    //   {
    //     "name": "Lisa Simpson",
    //     "age": "8",
    //     "mail": "lisa@simpson.com"
    //   },
    //   {
    //     "name": "Homer Simpson",
    //     "age": "32",
    //     "mail": "homer@simpson.com"
    //   },
    //   {
    //     "name": "Test Form",
    //     "age": "30",
    //     "mail": "form@test.mx"
    //   },
    //   {
    //     "name": "Luis NEW",
    //     "age": "20",
    //     "mail": "test@test"
    //   },
    //   {
    //     "name": "Lusi Test",
    //     "age": "11",
    //     "mail": "test@new.com"
    //   },
    //   {
    //     "name": "Luis VR",
    //     "age": "7",
    //     "mail": "lvr@test.com"
    //   },

    //   {
    //     "name": "Bart Simpson",
    //     "age": "10",
    //     "mail": "simpson@bart.com"
    //   },
    //   {
    //     "name": "March Simpson",
    //     "age": "33",
    //     "mail": "marge@simpson.com"
    //   },
    //   {
    //     "name": "Lisa Simpson",
    //     "age": "8",
    //     "mail": "lisa@simpson.com"
    //   },
    //   {
    //     "name": "Homer Simpson",
    //     "age": "32",
    //     "mail": "homer@simpson.com"
    //   },
    //   {
    //     "name": "Test Form",
    //     "age": "30",
    //     "mail": "form@test.mx"
    //   },
    //   {
    //     "name": "Luis NEW",
    //     "age": "20",
    //     "mail": "test@test"
    //   },
    //   {
    //     "name": "Lusi Test",
    //     "age": "11",
    //     "mail": "test@new.com"
    //   },
    //   {
    //     "name": "Luis VR",
    //     "age": "7",
    //     "mail": "lvr@test.com"
    //   },

    //   {
    //     "name": "Bart Simpson",
    //     "age": "10",
    //     "mail": "simpson@bart.com"
    //   },
    //   {
    //     "name": "March Simpson",
    //     "age": "33",
    //     "mail": "marge@simpson.com"
    //   },
    //   {
    //     "name": "Lisa Simpson",
    //     "age": "8",
    //     "mail": "lisa@simpson.com"
    //   },
    //   {
    //     "name": "Homer Simpson",
    //     "age": "32",
    //     "mail": "homer@simpson.com"
    //   },
    //   {
    //     "name": "Test Form",
    //     "age": "30",
    //     "mail": "form@test.mx"
    //   },
    //   {
    //     "name": "Luis NEW",
    //     "age": "20",
    //     "mail": "test@test"
    //   },
    //   {
    //     "name": "Lusi Test",
    //     "age": "11",
    //     "mail": "test@new.com"
    //   },
    //   {
    //     "name": "Luis VR",
    //     "age": "7",
    //     "mail": "lvr@test.com"
    //   },

    //   {
    //     "name": "Bart Simpson",
    //     "age": "10",
    //     "mail": "simpson@bart.com"
    //   },
    //   {
    //     "name": "March Simpson",
    //     "age": "33",
    //     "mail": "marge@simpson.com"
    //   },
    //   {
    //     "name": "Lisa Simpson",
    //     "age": "8",
    //     "mail": "lisa@simpson.com"
    //   },
    //   {
    //     "name": "Homer Simpson",
    //     "age": "32",
    //     "mail": "homer@simpson.com"
    //   },
    //   {
    //     "name": "Test Form",
    //     "age": "30",
    //     "mail": "form@test.mx"
    //   },
    //   {
    //     "name": "Luis NEW",
    //     "age": "20",
    //     "mail": "test@test"
    //   },
    //   {
    //     "name": "Lusi Test",
    //     "age": "11",
    //     "mail": "test@new.com"
    //   },
    //   {
    //     "name": "Luis VR",
    //     "age": "7",
    //     "mail": "lvr@test.com"
    //   },

    //   {
    //     "name": "Bart Simpson",
    //     "age": "10",
    //     "mail": "simpson@bart.com"
    //   },
    //   {
    //     "name": "March Simpson",
    //     "age": "33",
    //     "mail": "marge@simpson.com"
    //   },
    //   {
    //     "name": "Lisa Simpson",
    //     "age": "8",
    //     "mail": "lisa@simpson.com"
    //   },
    //   {
    //     "name": "Homer Simpson",
    //     "age": "32",
    //     "mail": "homer@simpson.com"
    //   },
    //   {
    //     "name": "Test Form",
    //     "age": "30",
    //     "mail": "form@test.mx"
    //   },
    //   {
    //     "name": "Luis NEW",
    //     "age": "20",
    //     "mail": "test@test"
    //   },
    //   {
    //     "name": "Lusi Test",
    //     "age": "11",
    //     "mail": "test@new.com"
    //   },
    //   {
    //     "name": "Luis VR",
    //     "age": "7",
    //     "mail": "lvr@test.com"
    //   },

    //   {
    //     "name": "Bart Simpson",
    //     "age": "10",
    //     "mail": "simpson@bart.com"
    //   },
    //   {
    //     "name": "March Simpson",
    //     "age": "33",
    //     "mail": "marge@simpson.com"
    //   },
    //   {
    //     "name": "Lisa Simpson",
    //     "age": "8",
    //     "mail": "lisa@simpson.com"
    //   },
    //   {
    //     "name": "Homer Simpson",
    //     "age": "32",
    //     "mail": "homer@simpson.com"
    //   },
    //   {
    //     "name": "Test Form",
    //     "age": "30",
    //     "mail": "form@test.mx"
    //   },
    //   {
    //     "name": "Luis NEW",
    //     "age": "20",
    //     "mail": "test@test"
    //   },
    //   {
    //     "name": "Lusi Test",
    //     "age": "11",
    //     "mail": "test@new.com"
    //   },
    //   {
    //     "name": "Luis VR",
    //     "age": "7",
    //     "mail": "lvr@test.com"
    //   },

    //   {
    //     "name": "Bart Simpson",
    //     "age": "10",
    //     "mail": "simpson@bart.com"
    //   },
    //   {
    //     "name": "March Simpson",
    //     "age": "33",
    //     "mail": "marge@simpson.com"
    //   },
    //   {
    //     "name": "Lisa Simpson",
    //     "age": "8",
    //     "mail": "lisa@simpson.com"
    //   },
    //   {
    //     "name": "Homer Simpson",
    //     "age": "32",
    //     "mail": "homer@simpson.com"
    //   },
    //   {
    //     "name": "Test Form",
    //     "age": "30",
    //     "mail": "form@test.mx"
    //   },
    //   {
    //     "name": "Luis NEW",
    //     "age": "20",
    //     "mail": "test@test"
    //   },
    //   {
    //     "name": "Lusi Test",
    //     "age": "11",
    //     "mail": "test@new.com"
    //   },
    //   {
    //     "name": "Luis VR",
    //     "age": "7",
    //     "mail": "lvr@test.com"
    //   },

    //   {
    //     "name": "Bart Simpson",
    //     "age": "10",
    //     "mail": "simpson@bart.com"
    //   },
    //   {
    //     "name": "March Simpson",
    //     "age": "33",
    //     "mail": "marge@simpson.com"
    //   },
    //   {
    //     "name": "Lisa Simpson",
    //     "age": "8",
    //     "mail": "lisa@simpson.com"
    //   },
    //   {
    //     "name": "Homer Simpson",
    //     "age": "32",
    //     "mail": "homer@simpson.com"
    //   },
    //   {
    //     "name": "Test Form",
    //     "age": "30",
    //     "mail": "form@test.mx"
    //   },
    //   {
    //     "name": "Luis NEW",
    //     "age": "20",
    //     "mail": "test@test"
    //   },
    //   {
    //     "name": "Lusi Test",
    //     "age": "11",
    //     "mail": "test@new.com"
    //   },
    //   {
    //     "name": "Luis VR",
    //     "age": "7",
    //     "mail": "lvr@test.com"
    //   },

    //   {
    //     "name": "Bart Simpson",
    //     "age": "10",
    //     "mail": "simpson@bart.com"
    //   },
    //   {
    //     "name": "March Simpson",
    //     "age": "33",
    //     "mail": "marge@simpson.com"
    //   },
    //   {
    //     "name": "Lisa Simpson",
    //     "age": "8",
    //     "mail": "lisa@simpson.com"
    //   },
    //   {
    //     "name": "Homer Simpson",
    //     "age": "32",
    //     "mail": "homer@simpson.com"
    //   },
    //   {
    //     "name": "Test Form",
    //     "age": "30",
    //     "mail": "form@test.mx"
    //   },
    //   {
    //     "name": "Luis NEW",
    //     "age": "20",
    //     "mail": "test@test"
    //   },
    //   {
    //     "name": "Lusi Test",
    //     "age": "11",
    //     "mail": "test@new.com"
    //   },
    //   {
    //     "name": "Luis VR",
    //     "age": "7",
    //     "mail": "lvr@test.com"
    //   },

    //   {
    //     "name": "Bart Simpson",
    //     "age": "10",
    //     "mail": "simpson@bart.com"
    //   },
    //   {
    //     "name": "March Simpson",
    //     "age": "33",
    //     "mail": "marge@simpson.com"
    //   },
    //   {
    //     "name": "Lisa Simpson",
    //     "age": "8",
    //     "mail": "lisa@simpson.com"
    //   },
    //   {
    //     "name": "Homer Simpson",
    //     "age": "32",
    //     "mail": "homer@simpson.com"
    //   },
    //   {
    //     "name": "Test Form",
    //     "age": "30",
    //     "mail": "form@test.mx"
    //   },
    //   {
    //     "name": "Luis NEW",
    //     "age": "20",
    //     "mail": "test@test"
    //   },
    //   {
    //     "name": "Lusi Test",
    //     "age": "11",
    //     "mail": "test@new.com"
    //   },
    //   {
    //     "name": "Luis VR",
    //     "age": "7",
    //     "mail": "lvr@test.com"
    //   }
    // ]

  }

  loadInitialUsers() {
    const START_INDEX = (this.currentPage - 1) * this.itemsPerPage;
    const FINISH_INDEX = START_INDEX + this.itemsPerPage;
    const NEW_USERS = this.listUsers.slice(START_INDEX, FINISH_INDEX);
    this.listUsers = [...this.listUsers, ...NEW_USERS];
  }

  loadMoreUsers() {
    this.currentPage++;
    this.loadInitialUsers();
    this.scrollToContainer();
  }

  scrollToContainer() {
    const LIST_CONTAINER = document.getElementById('listContainer');
    
    if (LIST_CONTAINER) {
      LIST_CONTAINER?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }

}
