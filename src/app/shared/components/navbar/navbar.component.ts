import { Component } from '@angular/core';
import { DevlyIconComponent } from '../devly-icon/devly-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DevlyIconComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {}
