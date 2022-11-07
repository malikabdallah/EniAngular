import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  categories = ['legumes','fruits','viandes'];
  product:Product;
  constructor() { }

  ngOnInit(): void {
    this.product={
      id:0,
      name:"produit a",
      category:this.categories[0]
    }
  }

  onSubmit(){
    console.log(`le produit ${this.product.name} de categories ${this.product.category}`);
  }

}
