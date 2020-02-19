import { Component, OnInit } from '@angular/core';

import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: 'index.component.html'
})
export class ProductComponent implements OnInit {

  public products: Product[];
  public columnsToDisplay = ['id', 'name', 'price', 'image', 'buy' ];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.findAll();
  }
}
