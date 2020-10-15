import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // async main(){
  //   this.router.navigate(['/main']);
  // }

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
