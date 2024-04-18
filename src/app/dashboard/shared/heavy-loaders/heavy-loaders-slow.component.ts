import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Hello World!!</h1>`,
})
export class HeavyLoadersSlowComponent {

  constructor() {
    setTimeout(() => {
      console.log('HeavyLoadersSlowComponent');
    }, 3000);
  }

}
