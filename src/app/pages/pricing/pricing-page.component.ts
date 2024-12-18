import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platform)) {
    //   document.title = 'Pricing page';
    // }
    this.title.setTitle('Pricing page');
    this.meta.updateTag({ name: 'description', content: 'Este es mi pricing page' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing page' });
    this.meta.updateTag({ name: 'keywords', content: 'Hola,Mundo,Juan,Tejeda,Curso,Angular,PRO' });
  }
}
