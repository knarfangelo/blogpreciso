import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { ArticuloComponent } from "../articulo/articulo.component";

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    ArticuloComponent
],
  template: `
  <header>
    <h1>NOVEDADES</h1>
    <app-banner></app-banner>
    <main>
    <app-articulo></app-articulo>
    <app-articulo></app-articulo>
    <app-articulo></app-articulo></main>
  </header>
  `,
  styleUrl: './novedades.component.css',
})
export class NovedadesComponent { 
  
}
