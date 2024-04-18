import { 
  Injectable, 
  computed, 
  inject, 
  signal 
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay, map } from 'rxjs';

import { State } from '../interfaces/state.interface';
import { UserResponse } from '../interfaces/req-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users = computed(() => this.#state().users );
  public loading = computed(() => this.#state().loading );

  private _http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: []
  })

  constructor() {

    this._http.get('https://reqres.in/api/users')
      .pipe( delay( 1500 ))
      .subscribe(( response: any ) => {
        this.#state.set({
          loading: false,
          users: response.data
        })
      })
  }

  getuserById( id: number ) {
    return this._http.get<UserResponse>(`https://reqres.in/api/users${ id }`)
      .pipe(
        delay( 1500 ),
        map( response => response.data )
      )
  }
}
