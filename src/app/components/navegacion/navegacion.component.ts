import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResponsiveComponent } from "./responsive/responsive.component";

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
    ResponsiveComponent
],
  template: `
    <nav>
      <img class="logo" src="icons/logo.svg" alt="">
      <ul>
        <li><a href="">INICIO</a></li>
        <li><a href="">NOVEDADES</a></li>
        <li><a href="">NUESTROS TRABAJOS</a></li>
        <li><a href="">TECNOLOGIA</a></li>
        <li><a href="">NOTICIAS</a></li>
        <li class="buscar"><a href=""><img src="icons/buscar.svg" alt=""></a></li>
      </ul>
    </nav>
    <app-responsive></app-responsive>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { }
