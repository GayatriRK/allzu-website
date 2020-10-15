import { Component, OnInit, Input } from '@angular/core';
// import { from } from 'rxjs';
// import { Product } from 'src/app/models/product';
// import { MessengerService } from 'src/app/services/messenger.service';
// import { CartService } from 'src/app/services/cart.service';
// import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @Input() productItem: Product;

  // @Input() addedToWishlist: boolean;

  constructor(
    // private msg: MessengerService,
    // private cartService : CartService,
    // private wishlistService : WishlistService
   ) { }

  ngOnInit(){
  }

 
//   handleAddToCart() {
//     this.cartService.addProductToCart(this.productItem).subscribe(() => {
//       this.msg.sendMsg(this.productItem)
//     })
//     // console.log("added")
//  }

//   //wishlist
// handleAddToWishlist(){
//   this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
//     this.addedToWishlist = true;
//   })
// }

// handleRemoveFromWishlist(){
//   this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
//     this.addedToWishlist = false;
//   })
// }


// cart
// handleAddToCart(){
// this.wishlistService.addToCart(this.productItem.id).subscribe(() => {
//   this.addedToWishlist = true;
// })
// }

// handleRemoveFromCart(){
// this.wishlistService.removeFromCart(this.productItem.id).subscribe(() => {
//   this.addedToWishlist = false;
// })
// }
}
