import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { articuloJSON } from '../../DB/articuloJSON';
import { IArticulo } from '../../DB/IArticulo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `
  <a href="contenido">
    <article>
      <img src="articulos/articulo.png" alt="">
      <h3 class="titulo">{{articulos[1].titulo}}</h3>
      <div class="etiquetas">
          @for (item of articulos[1].etiqueta; track $index) {
            <p class="etiqueta">{{item}}</p>
          }
      </div>
      <p class="descripcion">{{articulos[1].descripcion}}</p>
      <div class="fechas">
        <p class="tiempo"><img class="reloj" src="icons/reloj.svg" alt="">{{articulos[1].tiempo}}</p>
        <p class="fecha">{{articulos[1].fecha}}</p>
      </div>
    </article></a>
  `,
  styleUrl: './articulo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticuloComponent { 
  articulos: IArticulo[] = articuloJSON; 
}
