import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-about',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About page');
    this.meta.updateTag({ name: 'description', content: 'Este es mi about page' });
    this.meta.updateTag({ name: 'og:title', content: 'About page' });
    this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Juan,Tejeda,Curso,Angular,PRO' });
  }
}
