import {Component, ElementRef, inject, signal, viewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {TranslateModule} from '@ngx-translate/core';
import {Router, RouterLink} from '@angular/router';
import {AccountService} from '../auth/account.service';
import {SbbCheckbox} from '@sbb-esta/angular/checkbox';
import {SbbFormField, SbbLabel} from '@sbb-esta/angular/form-field';
import {NgClass} from '@angular/common';
import {SbbInput} from '@sbb-esta/angular/input';
import {FaIconComponent, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SbbButton} from '@sbb-esta/angular/button';
import {UserCardService} from '../../user-cart/user-card.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    RouterLink,
    SbbCheckbox,
    SbbFormField,
    NgClass,
    SbbInput,
    SbbLabel,
    SbbButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = viewChild.required<ElementRef>('username');
  authenticationError = signal(false);


  private accountService = inject(AccountService);
  private loginService = inject(LoginService);
  private userCartService = inject(UserCardService);
  private router = inject(Router);

  ngOnInit(): void {
    this.accountService.identity().subscribe({
      next: (res) => {
        console.error(res);
        if (this.accountService.isAuthenticated()) {

        }
      }
    });
  }


  loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rememberMe: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
  });

  login(): void {
    this.loginService.login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.authenticationError.set(false);
      },
      error: () => this.authenticationError.set(true),
    });
  }

}
