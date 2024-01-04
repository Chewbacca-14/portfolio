import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProjectsComponent, ExperienceComponent],
  template: `
    <div class="flex justify-center py-16 md:py-28 print:py-0">
      <main class="max-w-3xl mx-8 w-full flex flex-col gap-20">
        <app-header />
        <app-projects />
        <app-experience />
      </main>
    </div>
  `,
})
export class HomeComponent {}
