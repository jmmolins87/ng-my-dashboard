import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'C' | 'D' | 'E';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal( false );
  public grade = signal<Grade>('E');
  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Qwik']);
  public frameworksNew = signal([]);
  
  public toggleContent() {
    this.showContent.update( value => !value );
  }
}
