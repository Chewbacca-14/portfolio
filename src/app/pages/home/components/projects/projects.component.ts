import { Component } from '@angular/core';
import { PROJECTS } from '@assets/data/projects.mock';
import { ButtonComponent } from '@shared/components/button/button.component';
import { GithubIconComponent } from '@shared/components/github-icon/github-icon.component';
import { InfoIconComponent } from '@shared/components/info-icon/info-icon.component';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';
import { LinkIconComponent } from '@shared/components/link-icon/link-icon.component';
import { Project } from 'src/app/models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    LinkIconComponent,
    GithubIconComponent,
    InfoIconComponent,
    LinkButtonComponent,
    ButtonComponent,
  ],
  template: `
    <section id="projects">
      <h2 class="text-4xl font-semibold">Projects</h2>
      <ul class="mt-10 flex flex-col gap-3">
        @for (project of projects; track project.id) {
          <li>
            <article
              class="rounded-lg border border-neutral-800 px-5 py-4 transition-all hover:scale-[102%]"
            >
              <header class="mb-3 flex flex-row flex-wrap items-center gap-3">
                <h3 class="text-nowrap text-xl font-semibold md:text-2xl">
                  {{ project.title }}
                </h3>
                <ul class="flex gap-3">
                  @for (tag of project.tags; track $index) {
                    <li
                      class="rounded-lg border border-neutral-600 px-1 text-sm text-neutral-400"
                    >
                      {{ tag }}
                    </li>
                  }
                </ul>
              </header>
              <p class="mb-4 leading-snug text-neutral-400">
                {{ project.description }}
              </p>
              <footer class="flex gap-2">
                @if (project.url) {
                  <app-link-button
                    [href]="project.url"
                    title="{{ project.title }} page"
                  >
                    <app-link-icon class="h-4 w-4" />
                  </app-link-button>
                }
                @if (project.repo) {
                  <app-link-button
                    [href]="project.repo"
                    title="{{ project.title }} repository"
                  >
                    <app-github-icon class="h-4 w-4" />
                  </app-link-button>
                }
                <app-button icon>
                  <app-info-icon
                    class="h-4 w-4"
                    title="{{ project.title }} more info"
                  />
                </app-button>
              </footer>
            </article>
          </li>
        }
      </ul>
    </section>
  `,
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
}
