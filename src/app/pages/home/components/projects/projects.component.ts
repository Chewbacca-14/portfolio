import { Component } from '@angular/core';
import { PROJECTS } from '@assets/data/projects.mock';
import { ButtonComponent } from '@shared/components/button/button.component';
import { GithubIconComponent } from '@shared/components/github-icon/github-icon.component';
import { InfoIconComponent } from '@shared/components/info-icon/info-icon.component';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';
import { LinkIconComponent } from '@shared/components/link-icon/link-icon.component';
import { Project } from 'src/app/models/project.interface';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    LinkIconComponent,
    GithubIconComponent,
    InfoIconComponent,
    LinkButtonComponent,
    ButtonComponent,
    ProjectComponent,
  ],
  template: `
    <section id="projects">
      <h2 class="text-4xl font-semibold">Projects</h2>
      <ul class="mt-10 flex flex-col gap-3">
        @for (project of projects; track project.id) {
          <li>
            <app-project [project]="project" />
          </li>
        }
      </ul>
    </section>
  `,
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
