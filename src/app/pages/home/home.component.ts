import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }


  new_arry=[1,2,3,4]
  ngOnInit(): void {
    
  }

  navigateToCollection(){
    this.router.navigate(['/catalogue'])

  }



  navigateToProduct(){
    this.router.navigate(['/product'])

  }
}
