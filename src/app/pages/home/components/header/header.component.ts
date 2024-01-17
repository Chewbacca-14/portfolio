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
          <span class="text-sm font-semibold text-neutral-400 md:text-base"
            >Hey! I'm</span
          >
          <h1 class="text-5xl font-semibold md:text-6xl">Uriel Spiridione</h1>
        </div>
        <h2 class="text-lg text-cyan-500 md:text-xl">
          Full stack web developer
        </h2>
        <p class="text-sm font-semibold text-neutral-400 md:text-base">
          Web Developer & Design Enthusiast | Creating Elegant and Functional
          Online Spaces | Transforming Ideas into Interactive Experiences |
          Crafting Code with Creativity and Minimalism.
        </p>
      </div>
      <div class="flex gap-3">
        <a
          href="https://www.linkedin.com/in/urielspiridione/"
          class="rounded-lg border border-neutral-500 fill-neutral-50 p-2 transition-all hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
        >
          <app-linkedin-icon class="h-5" />
        </a>
        <a
          href="https://twitter.com/UrielSpiridione"
          class="rounded-lg border border-neutral-500 fill-neutral-50 p-2 transition-all hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          title="X/Twitter"
        >
          <app-x-icon class="h-5" />
        </a>
        <a
          href="https://github.com/USpiri"
          class="rounded-lg border border-neutral-500 fill-neutral-50 p-2 transition-all hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <app-github-icon class="h-5" />
        </a>
      </div>
    </section>
  `,
})
export class HeaderComponent {}
