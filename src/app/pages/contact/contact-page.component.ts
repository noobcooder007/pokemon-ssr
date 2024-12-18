import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact page');
    this.meta.updateTag({ name: 'description', content: 'Este es mi contact page' });
    this.meta.updateTag({ name: 'og:title', content: 'Contact page' });
    this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Juan,Tejeda,Curso,Angular,PRO' });
  }
}
