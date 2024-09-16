import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { IArticulo } from '../../DB/IArticulo';
import { articuloJSON } from '../../DB/articuloJSON';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
<a href="contenido">
      <img class="imagen" [src]="articulos[idarticulo].imagen" alt="">
      <section class="contenido">
         
        <h2>{{articulos[idarticulo].titulo}}</h2>
        <p class="fecha">{{articulos[idarticulo].fecha}}</p>
        <div class="etiquetas">
          @for (item of articulos[idarticulo].etiqueta; track $index) {
            <p class="etiqueta">{{item}}</p>
          }
        </div>
        <p class="descripcion">{{articulos[idarticulo].descripcion}}</p>
        <p class="tiempo"><img class="reloj" src="icons/reloj.svg" alt="">{{articulos[idarticulo].tiempo}}</p>
      </section></a>
  `,
  styleUrl: './banner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent { 
  @Input() idarticulo: number = 0;
  articulos: IArticulo[] = articuloJSON; 
  
}
