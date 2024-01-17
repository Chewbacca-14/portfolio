import { Component } from '@angular/core';
import { GithubIconComponent } from '@shared/components/github-icon/github-icon.component';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';
import { LinkedinIconComponent } from '@shared/components/linkedin-icon/linkedin-icon.component';
import { XIconComponent } from '@shared/components/x-icon/x-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    XIconComponent,
    LinkedinIconComponent,
    GithubIconComponent,
    LinkButtonComponent,
  ],
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
        <app-link-button
          href="https://www.linkedin.com/in/urielspiridione/"
          title="Linkedin page"
        >
          <app-linkedin-icon class="h-5" />
        </app-link-button>
        <app-link-button
          href="https://x.com/UrielSpiridione/"
          title="X/Twitter page"
        >
          <app-x-icon class="h-5" />
        </app-link-button>
        <app-link-button href="https://github.com/USpiri/">
          <app-github-icon class="h-5" />
        </app-link-button>
      </div>
    </section>
  `,
})
export class HeaderComponent {}
