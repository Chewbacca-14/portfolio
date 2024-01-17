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
    <div class="flex justify-center py-16 print:py-0 md:py-28">
      <main class="mx-8 flex w-full max-w-3xl flex-col gap-20">
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
