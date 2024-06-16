import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
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
    console.log('onHomeClick');
    this.router.navigate(['/']);
  }

  onRestaurantClick() {
    console.log('onRestaurantClick');
    this.router.navigate(['/restaurant']);
  }

  onOrdersClick() {
    console.log('onOrdersClick');
    this.router.navigate(['/order']);
  }
}
