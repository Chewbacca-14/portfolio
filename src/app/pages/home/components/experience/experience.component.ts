import { Component } from '@angular/core';
import { EXPERIENCES } from '@assets/data/experience.mock';
import { LinkIconComponent } from '@shared/components/link-icon/link-icon.component';
import { Experience } from 'src/app/models/experience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [LinkIconComponent],
  template: `
    <section>
      <h2 class="text-4xl font-semibold">Experience</h2>
      <ul class="mt-10 flex flex-col gap-3">
        @for (experience of experiences; track experience.id) {
          <li
            class="flex group/item hover:scale-[102%] transition-all flex-col md:flex-row md:gap-6 md:items-center border-neutral-800 rounded-lg py-3"
          >
            <div
              class="shrink-0 w-32 group-hover/item:text-cyan-500 transition-all text-neutral-400 font-medium md:text-right"
            >
              {{ experience.date }}
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="text-2xl font-semibold flex items-center gap-2">
                @if (experience.url) {
                  <a
                    [href]="experience.url"
                    class="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ experience.company }}</a
                  >
                  <app-link-icon class="h-4 w-4 fill-neutral-50" />
                } @else {
                  {{ experience.company }}
                }
              </h3>
              <p class="text-neutral-300 text-sm font-medium">
                {{ experience.job }}
              </p>
              <p class="text-neutral-400">
                {{ experience.description }}
              </p>
            </div>
          </li>
        }
      </ul>
    </section>
  `,
  styles: ``,
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCES;
}
