import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { ArticuloComponent } from "../articulo/articulo.component";

@Component({
  selector: 'app-ultimo',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    ArticuloComponent
],
  template: `
      <header>
    <h1>Lo último de Preciso Group</h1>
    <app-banner [idarticulo]="2" class="row-reverse"></app-banner>
    <main>
    <app-articulo></app-articulo>
    <app-articulo></app-articulo>
    <app-articulo></app-articulo></main>
  </header>
  `,
  styleUrl: './ultimo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UltimoComponent { 
 
}
