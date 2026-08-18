import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() productName: string = '';
  @Input() unitPrice: number = 0;
  @Input() cartQuantity: number = 0;
  @Input() isOnSale: boolean = false;
  @Input() cardColor: string = '#ffffff';
}
