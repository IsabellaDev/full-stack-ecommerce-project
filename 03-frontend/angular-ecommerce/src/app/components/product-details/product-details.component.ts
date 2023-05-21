import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

const PROD_ID = 'prodId';
const CAT_ID = 'catId';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();
  categoryId: number;

  constructor(private productService: ProductService, 
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryId = +this.route.snapshot.paramMap.get(CAT_ID);
    console.log("categoryID: ", this.categoryId);
    this.route.paramMap.subscribe(() => {
      this.listProductDetails();
    });
  }

  listProductDetails() {

    // get the id param string, convert to a number 
    const theProductId: number = Number(this.route.snapshot.paramMap.get(PROD_ID));
    console.log("product ID: ", theProductId);

    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    );
  }

  addToCart(theProduct: Product) {
    const theCartItem = new CartItem(theProduct);
    
    this.cartService.addToCart(theCartItem);
    console.log(`Adding to cart: ${this.product.name}, ${this.product.unitPrice}`);
  }

}
