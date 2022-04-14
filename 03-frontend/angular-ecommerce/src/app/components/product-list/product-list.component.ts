import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/common/cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode!: boolean;
  // properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  previousKeyword!: string | null;
  
  constructor(private productService: ProductService, 
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
    this.handleListProducts();
    }
  }

  handleSearchProducts() {

    const theKeyword: string | null = this.route.snapshot.paramMap.get('keyword');

    // if the keyword changes, set page number to 1
    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;
    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);


    // now search for the products using keyword
    this.productService.searchProductsPaginate(this.thePageNumber - 1,
                                                this.thePageSize,
                                                theKeyword!).subscribe(this.processResult());

  }

  handleListProducts() {
    // check id valid or not 
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the id, convert from string to number by Number()
      this.currentCategoryId = Number(this.route.snapshot.paramMap.get('id'));
    } else {
      this.currentCategoryId = 1;
    }

    // check if category changed or not. If changed, reset the page number
    // Angular will reuse a component if it is currently being used 

    if (this.currentCategoryId != this.previousCategoryId) {
      this.thePageNumber = 1;
    }
    this.previousCategoryId = this.currentCategoryId;
    console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);




    // now get the products for the given category id
    this.productService.getProductListPaginate(this.thePageNumber-1, 
                                               this.thePageSize,
                                               this.currentCategoryId).subscribe(this.processResult()
  );
  }

  processResult() {
    return (data: { _embedded: { products: Product[]; }; page: { number: number; size: number; totalElements: number; }; }) => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1; // spring page starts from 0
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

  addToCart(theProduct: Product) {
    console.log(`Adding to cart: ${theProduct.name}, ${theProduct.unitPrice}`);

    const theCartItem = new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);
  }
}
