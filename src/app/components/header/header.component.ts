import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

    
  }


openNav() {
    // document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("myNav").style.width = "100%";
  }

closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myNav").style.width = "0%";

  }


  navigateToHome(){
    this.router.navigate(['/'])

  }
  
}
