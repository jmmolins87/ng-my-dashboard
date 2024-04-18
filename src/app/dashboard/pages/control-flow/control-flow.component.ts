import { CommonModule } from '@angular/common';
import { 
  Component, 
  Input, 
  signal 
} from '@angular/core';


import { TitleComponent } from "../../shared/title/title.component";

type Grade = 'A' | 'B' | 'C' | 'D' | 'E';

@Component({
    standalone: true,
    templateUrl: './control-flow.component.html',
    styles: ``,
    imports: [CommonModule, TitleComponent]
})
export default class ControlFlowComponent {

  public title: string = 'Control Flow';
  public showContent = signal( false );
  public grade = signal<Grade>('E');
  public frameworks = signal(['Angular', 'React', 'Vue', 'Svelte', 'Qwik']);
  public frameworksNew = signal([]);

  public toggleContent() {
    this.showContent.update( value => !value );
  }
}
