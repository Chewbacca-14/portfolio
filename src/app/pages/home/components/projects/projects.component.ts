import { Component } from '@angular/core';
import { PROJECTS } from '@assets/data/projects.mock';
import { GithubIconComponent } from '@shared/components/github-icon/github-icon.component';
import { InfoIconComponent } from '@shared/components/info-icon/info-icon.component';
import { LinkIconComponent } from '@shared/components/link-icon/link-icon.component';
import { Project } from 'src/app/models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LinkIconComponent, GithubIconComponent, InfoIconComponent],
  template: `
    <section>
      <h2 class="text-4xl font-semibold">Projects</h2>
      <ul class="mt-10 flex flex-col gap-3">
        @for (project of projects; track project.id) {
          <li>
            <article
              class="px-5 py-4 border border-neutral-800 rounded-lg hover:scale-[102%] transition-all"
            >
              <header class="flex flex-row gap-3 items-center mb-2 flex-wrap">
                <h3 class="text-xl font-semibold text-nowrap">
                  {{ project.title }}
                </h3>
                <ul class="flex gap-3">
                  @for (tag of project.tags; track $index) {
                    <li
                      class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                    >
                      {{ tag }}
                    </li>
                  }
                </ul>
              </header>
              <p class="text-sm text-neutral-400 mb-3">
                {{ project.description }}
              </p>
              <footer class="flex gap-2">
                <a
                  [href]="project.url"
                  class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <app-link-icon class="h-4 w-4" />
                </a>
                <a
                  [href]="project.repo"
                  class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <app-github-icon class="h-4 w-4" />
                </a>
                <button
                  class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
                >
                  <app-info-icon class="h-4 w-4" />
                </button>
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
