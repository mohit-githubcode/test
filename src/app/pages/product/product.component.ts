import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router) { }



  slideIndex = 1


  
  ngOnInit(): void {
 
// alert(JSON.stringify(document.getElementsByClassName("mySlides")))
 

  this.currentSlide('http://test.lunartheme.com/jakiro/wp-content/uploads/2015/10/l1-400x500.jpg')
  }
    

  navigateToCollection(){
    this.router.navigate(['/catalogue'])

  }

 
  new_img:any
   currentSlide(n) {
     this.new_img=n
  //  alert(n)
    // this.showSlides(this.slideIndex = n);
  }
  
 

}
