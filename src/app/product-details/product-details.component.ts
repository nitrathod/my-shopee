import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductSerices } from '../shared/services/products.services';
import { Iposts } from '../shared/model/post';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  _product: Iposts;
  constructor(private _route: ActivatedRoute,
              private _productService: ProductSerices) { }

  getProduct(): void{
    this._productService.getProduct
  }

  ngOnInit() {
     this._route.params.subscribe(params => {
      this.productId = params['id'];
      this._productService.getProduct(this.productId).subscribe(item => {
        this._product = item;
        console.log(item);
      })
    });
  }


}
