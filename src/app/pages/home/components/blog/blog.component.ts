import { Component, OnInit, inject } from '@angular/core';
import { Post } from '@models';
import { BlogService } from '@shared/services/blog.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [PostComponent],
  template: `
    <section id="blog">
      <h2 class="text-4xl font-semibold">Blog</h2>
      <ul
        class="mt-10 flex flex-col justify-center gap-3 md:flex-row md:flex-wrap"
      >
        @for (post of posts; track post.id) {
          <li class="flex-[1_0_40%]">
            <app-post [post]="post" />
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
