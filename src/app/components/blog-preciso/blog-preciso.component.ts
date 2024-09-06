import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InicioComponent } from "../inicio/inicio.component";
import { NovedadesComponent } from "../novedades/novedades.component";
import { UltimoComponent } from "../ultimo/ultimo.component";
import { RegistroComponent } from "../registro/registro.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-blog-preciso',
  standalone: true,
  imports: [
    CommonModule,
    InicioComponent,
    NovedadesComponent,
    UltimoComponent,
    RegistroComponent,
    FooterComponent
],
  template: `
  <header>
    <app-inicio></app-inicio>
    <app-novedades></app-novedades>
    <app-ultimo></app-ultimo>
    <app-registro></app-registro>
    <app-footer></app-footer></header>
  `,
  styleUrl: './blog-preciso.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPrecisoComponent { }
