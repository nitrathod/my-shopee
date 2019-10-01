import { Component, OnInit } from '@angular/core';
import { ProductSerices } from '../shared/services/products.services';
import { Iposts } from '../shared/model/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productposts:Iposts[];
  public searchText : string;
  public showDetails:boolean = true;

  constructor(private productServices: ProductSerices, private router: Router) { }
  
  ngOnInit() {
    this.productServices
    .ProductPost().subscribe(item => {     
      this.productposts = item;
    });
  }

  onClick(productId: number){
    this.router.navigate(['/products', productId])
  }

  toggle() {
    this.showDetails = !this.showDetails;
  }

}
