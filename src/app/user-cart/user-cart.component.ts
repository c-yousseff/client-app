import {Component, inject, OnInit, signal} from '@angular/core';
import {UserCardService} from './user-card.service';
import {JsonPipe, NgOptimizedImage} from '@angular/common';
import {Account} from '../core/auth/account.model';

@Component({
  selector: 'app-user-cart',
  standalone: true,
  imports: [
    JsonPipe,
    NgOptimizedImage
  ],
  templateUrl: './user-cart.component.html',
  styleUrl: './user-cart.component.scss'
})
export class UserCartComponent implements OnInit {
  private userCartService = inject(UserCardService);
  user= signal<Account[]>([]);
  ngOnInit(): void {
   this.userCartService.user.subscribe({
     next: (user) => {
      this.user().push(user!);
     }
   })
  }

  protected readonly JSON = JSON;
}
