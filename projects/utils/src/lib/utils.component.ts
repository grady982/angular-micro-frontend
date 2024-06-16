import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-utils',
  template: `
    <div style="display: flex;">
      <button (click)="onHomeClick()">Home</button>
      <button (click)="onRestaurantClick()">Restaurant</button>
      <button (click)="onOrdersClick()">Orders</button>
    </div>
  `,
  styles: [
  ]
})
export class UtilsComponent {
  
  constructor(
    private router: Router
  ) { }

  onHomeClick() {
    this.router.navigate(['/']);
  }

  onRestaurantClick() {
    this.router.navigate(['/restaurant']);
  }

  onOrdersClick() {
    this.router.navigate(['/orders']);
  }
}
