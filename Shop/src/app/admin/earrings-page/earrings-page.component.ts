import { Component, Input } from '@angular/core';
import { earrings } from 'src/app/product-page/product';
import { IProduct } from 'src/app/product-page/product-interface';
//import { products as rings } from './product';     //можна собі перейменувати по своєму

@Component({
  selector: 'app-earrings-page',
  templateUrl: './earrings-page.component.html',
  styleUrls: ['./earrings-page.component.scss']
})
export class EarringsPageComponent {
  earrings: IProduct[] = earrings

  // @Input()  product: IProduct | undefined
} 