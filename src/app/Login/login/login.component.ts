import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  

  constructor(private fb: FormBuilder,
               private router: Router) { 

               }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      firstName: [''],
    })


    
  }

  onSubmit(){
    console.log(this.loginForm.value)
    this.router.navigateByUrl('/home');
 
   }


}
