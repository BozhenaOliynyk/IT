import { Component, Input } from '@angular/core';
import { rings } from 'src/app/product-page/product';
import { IProduct } from 'src/app/product-page/product-interface';
//import { products as rings } from './product';     //можна собі перейменувати по своєму

@Component({
  selector: 'app-rings-page',
  templateUrl: './rings-page.component.html',
  styleUrls: ['./rings-page.component.scss']
})
export class RingsPageComponent {
  rings: IProduct[] = rings

  // @Input()  product: IProduct | undefined
} 