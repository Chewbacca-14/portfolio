import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <div class="flex justify-center py-28 print:py-0">
      <main class="max-w-3xl mx-8 w-full flex flex-col gap-20">
        <app-header />
      </main>
    </div>
  `,
})
export class HomeComponent {}
