import {inject, Injectable} from '@angular/core';
import {UserProvider} from './user-provider';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private provider: UserProvider = inject(UserProvider);

   user = this.provider.getUserById(1);

}
