import { Component } from '@angular/core';
import { EXPERIENCES } from '@shared/data/experience.mock';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { TitleComponent } from '@shared/components/title/title.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent, TitleComponent],
  template: `
    <section id="experience">
      <app-title>Experience</app-title>
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
