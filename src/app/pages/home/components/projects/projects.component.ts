import { Component } from '@angular/core';
import { GithubIconComponent } from '@shared/components/github-icon/github-icon.component';
import { InfoIconComponent } from '@shared/components/info-icon/info-icon.component';
import { LinkIconComponent } from '@shared/components/link-icon/link-icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LinkIconComponent, GithubIconComponent, InfoIconComponent],
  template: `
    <section>
      <h2 class="text-4xl font-semibold">Projects</h2>
      <ul class="mt-10 flex flex-col gap-3">
        <li>
          <article
            class="px-5 py-4 border border-neutral-800 rounded-lg hover:scale-[102%] transition-all"
          >
            <header class="flex gap-3 items-center mb-1">
              <h3 class="text-xl font-semibold">Portfolio</h3>
              <ul class="flex gap-3">
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Angular
                </li>
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Typescript
                </li>
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Tailwind
                </li>
              </ul>
            </header>
            <p class="text-sm text-neutral-400 mb-2">
              It shows my work and skills, developed using Angular 17 with
              Tailwind. A standalone angular project with SSR that incorporates
              eslint for code quality.
            </p>
            <footer class="flex gap-2">
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-link-icon class="h-3 w-3" />
              </button>
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-github-icon class="h-3 w-3" />
              </button>
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-info-icon class="h-3 w-3" />
              </button>
            </footer>
          </article>
        </li>
        <li>
          <article
            class="px-5 py-4 border border-neutral-800 rounded-lg hover:scale-[102%] transition-all"
          >
            <header class="flex gap-3 items-center mb-1">
              <h3 class="text-xl font-semibold">Portfolio</h3>
              <ul class="flex gap-3">
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Angular
                </li>
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Typescript
                </li>
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Tailwind
                </li>
              </ul>
            </header>
            <p class="text-sm text-neutral-400 mb-2">
              It shows my work and skills, developed using Angular 17 with
              Tailwind. A standalone angular project with SSR that incorporates
              eslint for code quality.
            </p>
            <footer class="flex gap-2">
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-link-icon class="h-3 w-3" />
              </button>
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-github-icon class="h-3 w-3" />
              </button>
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-info-icon class="h-3 w-3" />
              </button>
            </footer>
          </article>
        </li>
        <li>
          <article
            class="px-5 py-4 border border-neutral-800 rounded-lg hover:scale-[102%] transition-all"
          >
            <header class="flex gap-3 items-center mb-1">
              <h3 class="text-xl font-semibold">Portfolio</h3>
              <ul class="flex gap-3">
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Angular
                </li>
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Typescript
                </li>
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Tailwind
                </li>
              </ul>
            </header>
            <p class="text-sm text-neutral-400 mb-2">
              It shows my work and skills, developed using Angular 17 with
              Tailwind. A standalone angular project with SSR that incorporates
              eslint for code quality.
            </p>
            <footer class="flex gap-2">
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-link-icon class="h-3 w-3" />
              </button>
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-github-icon class="h-3 w-3" />
              </button>
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-info-icon class="h-3 w-3" />
              </button>
            </footer>
          </article>
        </li>
        <li>
          <article
            class="px-5 py-4 border border-neutral-800 rounded-lg hover:scale-[102%] transition-all"
          >
            <header class="flex gap-3 items-center mb-1">
              <h3 class="text-xl font-semibold">Portfolio</h3>
              <ul class="flex gap-3">
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Angular
                </li>
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Typescript
                </li>
                <li
                  class="px-1 border rounded-lg text-sm border-neutral-700 text-neutral-500 font-semibold"
                >
                  Tailwind
                </li>
              </ul>
            </header>
            <p class="text-sm text-neutral-400 mb-2">
              It shows my work and skills, developed using Angular 17 with
              Tailwind. A standalone angular project with SSR that incorporates
              eslint for code quality.
            </p>
            <footer class="flex gap-2">
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-link-icon class="h-3 w-3" />
              </button>
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-github-icon class="h-3 w-3" />
              </button>
              <button
                class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-600 rounded-lg p-2 text-sm"
              >
                <app-info-icon class="h-3 w-3" />
              </button>
            </footer>
          </article>
        </li>
      </ul>
    </section>
  `,
})
export class ProjectsComponent {}
