import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TitleComponent } from '../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [label]="title" />
    <section class="flex justify-end">
      <img 
        srcset="https://picsum.photos/id/237/200/300" 
        alt="Dog Photo"
        title="Dog Photo"
        width="200"
        height="300"
        style="view-transition-name: hero1" />
      <div 
        class="bg-blue-500 w-56 h-56" 
        style="view-transition-name: hero2">
      </div>
    </section>
  `,
  styles: ``
})
export default class ViewTransitionComponent {

  public title: string = 'View Transition 2';
}
