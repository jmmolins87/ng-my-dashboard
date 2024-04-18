import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

import { TitleComponent } from '../../shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  )
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  });
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {
    
    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update( value => {
        value.name = 'React';
        return { ...value };
      })
      console.log('change property');
    }, 3000);
  }
}
