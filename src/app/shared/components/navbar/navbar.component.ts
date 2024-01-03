import { Component } from '@angular/core';
import { DevlyIconComponent } from '../devly-icon/devly-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DevlyIconComponent],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {}
