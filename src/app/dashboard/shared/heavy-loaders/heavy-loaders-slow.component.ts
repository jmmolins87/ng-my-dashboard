import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Hello World!!</h1>`,
})
export class HeavyLoadersSlowComponent {

}
