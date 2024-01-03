import { Component } from '@angular/core';
import { GithubIconComponent } from '@shared/components/github-icon/github-icon.component';
import { LinkedinIconComponent } from '@shared/components/linkedin-icon/linkedin-icon.component';
import { XIconComponent } from '@shared/components/x-icon/x-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [XIconComponent, LinkedinIconComponent, GithubIconComponent],
  template: `
    <section class="flex flex-col justify-between gap-5">
      <img
        src="./assets/profile.jpg"
        alt="Uriel Spiridione profile image"
        width="150"
        height="150"
        class="rounded-full border-4 border-cyan-600"
      />
      <div class="flex flex-col gap-2">
        <div>
          <span class="font-semibold text-neutral-400">Hey! My name is</span>
          <h1 class="text-6xl font-semibold">Uriel Spiridione</h1>
        </div>
        <h2 class="text-xl text-cyan-500">Full stack web developer</h2>
        <p class="text-neutral-400 font-semibold">
          Web Developer & Design Enthusiast | Creating Elegant and Functional
          Online Spaces | Transforming Ideas into Interactive Experiences |
          Crafting Code with Creativity and Minimalism.
        </p>
      </div>
      <div class="flex gap-3">
        <a
          href="https://www.linkedin.com/in/urielspiridione/"
          class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-500 rounded-lg p-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <app-linkedin-icon class="h-5" />
        </a>
        <a
          href="https://twitter.com/UrielSpiridione"
          class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-500 rounded-lg p-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <app-x-icon class="h-5" />
        </a>
        <a
          href="https://github.com/USpiri"
          class="hover:scale-110 transition-all fill-neutral-50 border border-neutral-500 rounded-lg p-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <app-github-icon class="h-5" />
        </a>
      </div>
    </section>
  `,
})
export class HeaderComponent {}
