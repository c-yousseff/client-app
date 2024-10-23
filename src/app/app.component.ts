import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UserService} from './user/user.service';
import {JsonPipe} from '@angular/common';
import {LoginComponent} from './core/login/login.component';
import {fontAwesomeIcons} from './core/config/font-awesome-icons';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {UserCartComponent} from './user-cart/user-cart.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, LoginComponent, UserCartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected service: UserService = inject(UserService);
  private iconLibrary = inject(FaIconLibrary);
  title = 'fe-app';
  constructor() {
    this.iconLibrary.addIcons(...fontAwesomeIcons);  }
}
