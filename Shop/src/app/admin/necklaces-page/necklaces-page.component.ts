import { Component, Input } from '@angular/core';
import { necklaces } from 'src/app/product-page/product';
import { IProduct } from 'src/app/product-page/product-interface';
//import { products as rings } from './product';     //можна собі перейменувати по своєму

@Component({
  selector: 'app-necklaces-page',
  templateUrl: './necklaces-page.component.html',
  styleUrls: ['./necklaces-page.component.scss']
})
export class NecklacesPageComponent {
  necklaces: IProduct[] = necklaces

  // @Input()  product: IProduct | undefined
} 