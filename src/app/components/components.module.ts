import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegistryComponent } from './form-registry/form-registry.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPaginateComponent } from './list-paginate/list-paginate.component';

@NgModule({
  declarations: [
    FormRegistryComponent,
    ListUsersComponent,
    ListPaginateComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    FormRegistryComponent,
    ListUsersComponent,
    ListPaginateComponent
  ]
})
export class ComponentsModule { }
