import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
    img {
      display: block;
      margin-left: 200px;
      margin-right: 200px;
      margin-top: 30px;
    }
    `]
})

export class HomeComponent {
    constructor(){}
    imgUrl: string = './../../assets/shopee.jpg';
}