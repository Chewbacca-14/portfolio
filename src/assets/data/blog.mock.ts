import { Post } from '@models';

export const POSTS: Post[] = [
  {
    id: 'angular/new-control-flow-syntax.mdx',
    url: 'http://localhost:4321/blog/angular/new-control-flow-syntax',
    title: 'Introducción a @-syntax de Angular | Angular 17 Update',
    tags: ['angular'],
    date: new Date('2023-11-09T00:00:00.000Z'),
    description:
      'Primer aproximación a la nueva sintaxis de Angular y cómo busca transformar la experiencia de desarrollo junto con sus beneficios.',
  },
  {
    id: 'copy-button.mdx',
    url: 'http://localhost:4321/blog/copy-button',
    title: 'Agregando un botón "Copy code to clipboard" en Astro',
    tags: ['typescript', 'astro'],
    date: new Date('2023-10-21T00:00:00.000Z'),
    description:
      'Una funcionalidad útil a la hora de pensar en el desarrollo de un blog de programación con Astro',
  },
  {
    id: 'dialog-script.mdx',
    url: 'http://localhost:4321/blog/dialog-script',
    title: 'Un script para mejorar el uso de diálogos en HTML',
    tags: ['typescript'],
    date: new Date('2023-10-11T00:00:00.000Z'),
    description:
      'Desarrollo de un pequeño script que simplifica la creación y gestión de dialogs.',
  },
  {
    id: 'angular/angular-inject.mdx',
    url: 'http://localhost:4321/blog/angular/angular-inject',
    title: 'Angular | ¿Qué es inject()?',
    tags: ['angular'],
    date: new Date('2023-07-22T00:00:00.000Z'),
    description:
      'Introducción a la función inject() de Angular y algunos casos de uso',
  },
  {
    id: 'angular/angular-oninit-vs-constructor.mdx',
    url: 'http://localhost:4321/blog/angular/angular-oninit-vs-constructor',
    title: 'OnInit vs constructor',
    tags: ['angular'],
    date: new Date('2023-06-15T00:00:00.000Z'),
    description:
      'Veamos las diferencias entre ellos y analicemos cuándo deben ser usados',
  },
];
