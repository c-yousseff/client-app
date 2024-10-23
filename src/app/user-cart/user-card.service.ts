import {inject, Injectable} from '@angular/core';
import {AccountService} from '../core/auth/account.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class UserCardService {
   private account = inject(AccountService)
  user = this.account.identity();
}
