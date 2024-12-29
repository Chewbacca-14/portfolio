import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileIconComponent } from '@shared/components/file-icon/file-icon.component';
import { GithubIconComponent } from '@shared/components/github-icon/github-icon.component';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';
import { LinkedinIconComponent } from '@shared/components/linkedin-icon/linkedin-icon.component';
import { XIconComponent } from '@shared/components/x-icon/x-icon.component';
import { MainService } from '@shared/services/main.service';
import { map, Observable } from 'rxjs';
import { Me } from '@models';
import { log } from 'node:console';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LinkedinIconComponent,
    GithubIconComponent,
    LinkButtonComponent,
    CommonModule,
  ],
  template: `
    <section class="flex flex-col justify-between gap-5">
      <img
        src="https://media.licdn.com/dms/image/v2/D4E03AQFxAjdx65J4NQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720036174465?e=1735776000&v=beta&t=HVS1r7-B70Snt-PxGIuk99A0cW8ibORSWWnj79P9elI"
        alt="Maxim Bulanovich profile image"
        width="150"
        height="150"
        class="rounded-full border-4 border-cyan-500"
      />
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-sm font-semibold text-neutral-400 md:text-base"
            >Hey! I'm</span
          >
          <h1 class="text-5xl font-semibold md:text-6xl">Maxim Bulanovich</h1>
        </div>
        <h2 class="text-lg text-cyan-500 md:text-xl">Flutter Developer</h2>
        <p class="text-sm font-semibold text-neutral-400 md:text-base">
          Flutter Developer | Crafting Engaging and High-Performance Mobile
          Applications | 2+ Years of Experience in Building Interactive User
          Experiences | Eager to Learn, Adapt, and Drive Innovation
        </p>
      </div>
      <div class="flex gap-3">
        <app-link-button
          href="https://linkedin.com/in/max-bulanovich-702642260"
          title="Linkedin page"
        >
          <app-linkedin-icon class="h-5" />
        </app-link-button>

        <app-link-button
          href="https://github.com/Chewbacca-14"
          title="Github profile"
        >
          <app-github-icon class="h-5" />
        </app-link-button>
      </div>
    </section>
  `,
})
export class HeaderComponent {}
