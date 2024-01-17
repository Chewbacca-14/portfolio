import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Post } from '@models';
import { LinkIconComponent } from '@shared/components/link-icon/link-icon.component';
import { BlogService } from '@shared/services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [LinkIconComponent, DatePipe],
  template: `
    <section id="blog">
      <h2 class="text-4xl font-semibold">Blog</h2>
      <ul
        class="mt-10 flex flex-col justify-center gap-3 md:flex-row md:flex-wrap"
      >
        @for (post of posts; track post.id) {
          <li class="flex-[1_0_40%]">
            <a
              [href]="post.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-fit flex-col rounded-lg px-4 py-3 transition-all hover:scale-[102%] hover:bg-neutral-500/10"
            >
              <header>
                <span class="text-sm font-semibold text-neutral-400/80">{{
                  post.date | date
                }}</span>
                <h3 class="mb-1 line-clamp-2 text-xl font-semibold md:text-2xl">
                  {{ post.title }}
                </h3>
              </header>
              <p
                class="mt-1.5 line-clamp-2 text-sm font-medium text-neutral-500 md:text-base dark:text-neutral-400/80"
              >
                {{ post.description }}
              </p>
              <footer class="mt-1.5 flex flex-row items-center gap-2">
                @for (tag of post.tags; track $index) {
                  <div
                    class="text-sm font-semibold text-neutral-600 md:text-base dark:text-neutral-300"
                  >
                    #{{ tag }}
                  </div>
                }
              </footer>
            </a>
          </li>
        }
      </ul>
    </section>
  `,
})
export class BlogComponent implements OnInit {
  private blogService = inject(BlogService);

  posts: Post[] = [];

  ngOnInit() {
    this.blogService
      .getLatestsPosts()
      .subscribe((posts) => (this.posts = posts));
  }
}
