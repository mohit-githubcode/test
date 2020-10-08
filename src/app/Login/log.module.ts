import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [

{path:'' , component: RegisterComponent},
{path:'login', component: LoginComponent}


];


@NgModule({
 
  imports: [
    CommonModule,
  
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
    
  ],



//   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],


  

  declarations: [RegisterComponent, LoginComponent]
})
export class LogModule { }
