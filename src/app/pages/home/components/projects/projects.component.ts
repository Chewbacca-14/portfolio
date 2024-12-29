import { Component, OnInit, inject } from '@angular/core';
import { Project } from 'src/app/models/project.interface';
import { ProjectComponent } from '../project/project.component';
import { TitleComponent } from '@shared/components/title/title.component';
import { MainService } from '@shared/services/main.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, TitleComponent],
  template: `
    <section id="projects">
      <app-title>Projects I Can Share</app-title>
      <ul class="mt-10 flex flex-col gap-3">
        @for (project of projects; track $index) {
          <li>
            <app-project [project]="project" />
          </li>
        }
      </ul>
    </section>
  `,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'Maru',
      tags: ['Commercial App', 'Flutter', 'Dart', 'Decentralized network'],
      url: null,
      repo: null,
      description:
        'Maru was developed to create a secure and decentralized way to access the internet that is resistant to censorship and ensures a high level of anonymity. The network consists of numerous nodes created by users around the world, making it decentralized and resilient to attacks.',
    },
    {
      id: 2,
      name: 'Papi Burgers',
      tags: [
        'Commercial App',
        'Flutter',
        'Dart',
        'Firebase',
        'Google Maps API',
      ],
      url: 'https://www.instagram.com/papi__burgers/',
      repo: null,
      description:
        "This application functions as a delivery platform for a network of restaurants, offering users an intuitive way to order food. At the start, users select their preferred restaurant, add desired items to their cart, and proceed seamlessly to checkout, with integrated payment options for a smooth transaction process. In addition, a powerful Admin application provides full control over the platform's operations. Administrators can easily manage restaurants, edit or add menus, update restaurant locations on the map, post job vacancies, and perform various other administrative tasks to ensure smooth platform management.",
    },
    {
      id: 3,
      name: 'NullEnd VPN',
      tags: ['Commercial App', 'Flutter', 'Dart', 'Kotlin', 'Java'],
      url: 'https://nullend.org/',
      repo: null,
      description:
        "NULL END® is an application that combines VPN and Tor technologies to provide robust digital security. VPN encrypts your traffic and hides your IP address, while Tor enables anonymous internet browsing through a secure network of servers. Together, they ensure protection against tracking and data leaks, making NULL END® a new standard in internet security. The app includes two VPN protocols and flexible Tor settings to bypass blocks, encrypting all device traffic for dependable protection. As the app's developer, I've implemented some small fixes to improve non-native components, enhancing its performance.",
    },

    {
      id: 4,
      name: 'NullEnd Browser',
      tags: ['Commercial App', 'Flutter', 'Dart', 'Firebase', 'WebView'],
      url: 'https://nullend.org/',
      repo: null,
      description:
        'The application is a secure browser with an integrated VPN (NullEnd VPN) offering Standard and Incognito modes. In Incognito mode, browsing history, cookies, and cache are cleared, WebRTC is disabled, and downloads require confirmation to prevent accidental files or viruses. It supports tabbed browsing, bookmarks with editing, search history, and download tracking. Available in Russian and English.',
    },
    {
      id: 5,
      name: 'EasyPGP',
      tags: ['Commercial App', 'Flutter', 'Dart', 'openpgp', 'Secured Storage'],
      url: null,
      repo: 'https://github.com/Chewbacca-14/My-Website/tree/mainnew/phone_mockups/easypgp',
      description:
        'The app decrypts PGP-encrypted messages using the password and the PGP private key. Decrypt messages by pasting the encrypted text or scanning a QR code. If you don’t have PGP keys, generate them in the app with 2048, 4096, or 8192-bit lengths. Generated keys are securely stored on your phone. You can also upload existing key pairs. Access can be secured with a password, fingerprint, or Face ID.',
    },
    {
      id: 6,
      name: 'Taxi App ',
      tags: ['Commercial App', 'Flutter', 'Dart'],
      url: null,
      repo: null,
      description:
        "The application's real name is kept confidential at the client's request. I was involved in developing the entire UI (layout), Google Maps integration and optimization.",
    },
    {
      id: 7,
      name: 'Horizon Village',
      tags: ['Commercial App', 'Flutter', 'Dart', 'Firebase'],
      url: null,
      repo: null,
      description:
        'This app is designed for remote regions in Uzbekistan. Residents can use it to buy or sell items in the marketplace, receive news from local authorities, view promotional posts, find a ride to the city, or offer rides to others.',
    },
    {
      id: 8,
      name: 'Kami',
      tags: [
        'Commercial App',
        'Flutter',
        'Dart',
        'AppWrite',
        'Google Maps API',
      ],
      url: null,
      repo: null,
      description:
        'The KAMI app, soon to be rebranded as APAR, was created for the eco-friendly electric truck manufacturer to streamline freight transportation. Users can order transport by selecting up to 3 delivery points on a map, view all orders, and access detailed route and order information directly in the app.',
    },
    {
      id: 9,
      name: 'Budget Manager',
      tags: [
        'Pet Project',
        'Flutter',
        'Dart',
        'Firebase',
        'Shared Preferences',
      ],
      url: null,
      repo: null,
      description:
        'My first Flutter app! It helps you track your expenses and income and is available in four languages. I designed every aspect of the app except for the graphical representation of expense/income filtering by month and local currency storage functionality.',
    },
  ];
}
