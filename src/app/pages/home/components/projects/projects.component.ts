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
                <a
                  [href]="project.url"
                  class="rounded-lg border border-neutral-600 fill-neutral-50 p-2 text-sm transition-all hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Project Link"
                >
                  <app-link-icon class="h-4 w-4" />
                </a>
                <a
                  [href]="project.repo"
                  class="rounded-lg border border-neutral-600 fill-neutral-50 p-2 text-sm transition-all hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Project repo"
                >
                  <app-github-icon class="h-4 w-4" />
                </a>
                <button
                  class="rounded-lg border border-neutral-600 fill-neutral-50 p-2 text-sm transition-all hover:scale-110"
                  title="Project info"
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
