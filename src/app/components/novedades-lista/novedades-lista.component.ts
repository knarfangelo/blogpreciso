import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticuloComponent } from "../articulo/articulo.component";
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-novedades-lista',
  standalone: true,
  imports: [
    CommonModule,
    ArticuloComponent,
    NavegacionComponent,
    FooterComponent
],
  template: `
  <div class="container">
  <app-navegacion></app-navegacion>
  <header>
  
    <main>
    <app-articulo></app-articulo>
    <app-articulo></app-articulo>
    <app-articulo></app-articulo>
    <app-articulo></app-articulo>
    <app-articulo></app-articulo>
    <app-articulo></app-articulo>
    </main>
  </header>
  <app-footer></app-footer>
</div>
  `,
  styleUrl: './novedades-lista.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovedadesListaComponent { }
