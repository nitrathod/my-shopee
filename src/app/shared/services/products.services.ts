import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iposts } from '../model/post';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({providedIn: 'root'})
export class ProductSerices {
    private productpostEndPoint = '../../../assets/productapi.json';
    constructor(private http: HttpClient){}

    ProductPost():Observable<Iposts[]>{
        return this.http.get<Iposts[]>(this.productpostEndPoint)
    }

    getProduct(id:number):Observable<Iposts>{
      return  this.http.get<Iposts[]>(this.productpostEndPoint ).pipe(map( (data:Iposts[]) => {
        return data.find(item => item.productId == id)
        }))
    }

}