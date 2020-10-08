import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm:FormGroup;

  constructor(public fb: FormBuilder,
              public router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: [''],
    })

  }

  onSubmit(){
   console.log(this.registrationForm.value)
   this.router.navigateByUrl('/login');

  }

}
