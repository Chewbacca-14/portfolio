import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    BlogComponent,
  ],
  template: `
    <div class="flex justify-center py-16 md:py-28 print:py-0">
      <main class="max-w-3xl mx-8 w-full flex flex-col gap-20">
        <app-header />
        <app-projects />
        <app-experience />
        <app-skills />
        <app-blog />
      </main>
    </div>
  `,
})
export class HomeComponent {}
