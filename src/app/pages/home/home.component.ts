import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProjectsComponent],
  template: `
    <div class="flex justify-center py-28 print:py-0">
      <main class="max-w-3xl mx-8 w-full flex flex-col gap-20">
        <app-header />
        <app-projects />
      </main>
    </div>
  `,
})
export class HomeComponent {}
