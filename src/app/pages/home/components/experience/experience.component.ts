import { Component } from '@angular/core';
import { EXPERIENCES } from '@shared/data/experience.mock';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent],
  template: `
    <section id="experience">
      <h2 class="text-4xl font-semibold">Experience</h2>
      <ul class="mt-10 flex flex-col gap-3">
        @for (experience of experiences; track experience.id) {
          <li>
            <app-experience-card [experience]="experience" />
          </li>
        }
      </ul>
    </section>
  `,
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCES;
}
