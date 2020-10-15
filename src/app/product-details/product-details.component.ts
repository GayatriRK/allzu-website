import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

   // increament decreament button for producr quantity
   quantity:number=1;
   i=1;
   plus(){
     if(this.i !=10)
     {
       this.i++;
       this.quantity=this.i;
     }
   }
 
   minus(){
     if(this.i !=1)
     {
       this.i--;
       this.quantity=this.i;
     }
   }

}
