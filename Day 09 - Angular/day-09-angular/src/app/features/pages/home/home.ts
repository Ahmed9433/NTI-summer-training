import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Child],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  productName = 'Mechanical Keyboard';
  unitPrice = 120;
  quantity = 3;

  get totalCost(): string {
    return `$${this.unitPrice * this.quantity}`;
  }

  applyPromoCode() {
    this.promoCode = 'ANGULAR21';
  }

  productImageUrl = 'images/keyboard.jpg';
  addToCartDisabled = true;

  planLabel = 'Go Pro';
  stockLevel = 42;

  stockTooltip = 'Units currently available in warehouse';

  orderCount = 0;
  searchQuery = '';

  cartQuantity = 0;

  isOnSale = false;
  isOutOfStock = false;

  cardColor = '#198754';
  badgeFontSize = 16;

  promoCode = '';

  toggleCartAvailability(): void {
    this.addToCartDisabled = !this.addToCartDisabled;
  }

  onOrderClick(): void {
    this.orderCount++;
  }

  onSearchInput(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }

  increaseQty(): void {
    this.cartQuantity++;
  }

  decreaseQty(): void {
    this.cartQuantity--;
  }

  clearCart(): void {
    this.cartQuantity = 0;
  }

  toggleSale(): void {
    this.isOnSale = !this.isOnSale;
  }

  toggleOutOfStock(): void {
    this.isOutOfStock = !this.isOutOfStock;
  }

  adjustBadgeFont(amount: number): void {
    this.badgeFontSize = Math.min(32, Math.max(12, this.badgeFontSize + amount));
  }
}
