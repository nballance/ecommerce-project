import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  // templateUrl: './product-list-table.component.html',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  // Inject ProductService dependency
  constructor(private productService: ProductService) { }

  // Once an angular component is initialized it will call this
  ngOnInit(): void {
    this.listProducts();
  }

  // Method invoked once you "subscribe"
  // Assign results to the Product array
  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
