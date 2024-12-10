import { Component, OnInit, inject } from '@angular/core';
import { Experience } from 'src/app/models/experience.interface';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { MainService } from '@shared/services/main.service';
import { LinkButtonComponent } from '@shared/components/link-button/link-button.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent, TitleComponent, LinkButtonComponent],
  template: `
    <section id="experience">
      <app-title>Experience</app-title>
      <ul class="mt-10 flex flex-col gap-3">
        @for (experience of experiences; track $index) {
          <li>
            <app-experience-card [experience]="experience" />
          </li>
        }
      </ul>
    </section>
  `,
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Adaptine, s.r.o.',
      location: 'Prague, Czech Republic',
      description: 'Developing Mobile and Web applications in a full-time role',
      position: 'Flutter Developer',
      startDate: '06.2024',
      endDate: 'Actually',
      remote: false,
      highlights: [],
    },
    {
      company: 'Freelance',
      location: 'Online',
      description:
        'Freelance Flutter developer creating cross-platform iOS, Android ans Web apps since 2023, delivering 10+ projects with a focus on innovation.',
      position: 'Flutter Developer',
      startDate: '05.2023',
      endDate: '07.2024',
      remote: true,
      highlights: [],
    },
  ];
}
