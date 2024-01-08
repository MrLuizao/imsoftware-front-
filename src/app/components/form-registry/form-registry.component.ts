import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ReactiveService } from 'src/app/services/reactive.service';
import { UserService } from 'src/app/services/user.service';
import { UserI } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-form-registry',
  templateUrl: './form-registry.component.html',
  styleUrls: ['./form-registry.component.scss'],
})
export class FormRegistryComponent  implements OnInit {
  
  listUsers!: UserI[];
  formUser!: FormGroup;

  constructor( 
    private fb: FormBuilder, 
    private userService: UserService, 
    private reactiveService: ReactiveService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.formUser = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]]
    });

    this.dataObserver();
  }


  submitUser(){

    this.userService.postCreateUser(this.formUser.value).subscribe({
      next:(response) => {
        console.log("response", response);
        this.formUser.reset();
        this.dataObserver();
      },
      error:(err: any) => {
        console.error(err)
        this.showErrorAlert(err.error)
      }
    });
  }

  async showErrorAlert(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  private dataObserver(){
    this.userService.getAllUsers().subscribe({
      next:(response) => {
        this.listUsers = response;
        this.reactiveService.updateArrayReactive(this.listUsers)
      },
      error:(error: any) => {
        console.error(error)
      }
    });
  }

}
