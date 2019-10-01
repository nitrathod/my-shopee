import {Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes = [
{
    path: 'home',
    component: HomeComponent
},
{
    path: 'products',
    component: ProductsComponent
    
},
{
    path: 'products/:id' , 
    component: ProductDetailsComponent
},
{
    path: '',
    component: HomeComponent
}
]