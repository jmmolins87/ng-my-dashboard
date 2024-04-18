import { CommonModule } from '@angular/common';
import { 
  Component, 
  inject, 
  signal 
} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { map, switchMap } from 'rxjs';

import { TitleComponent } from '../../shared/title/title.component';
import { UsersService } from '../../services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {

  private route = inject( ActivatedRoute );
  private usersService = inject( UsersService );

  public title: string = 'User';
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getuserById( id ))
    )
  )
  


  // constructor() {
  //   console.log( this.route.params.subscribe( params => {
  //     console.log( params );
  //   }));
  // }

}
