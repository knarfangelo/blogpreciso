import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-responsive',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `  
    <nav>
      <section class="barra">
        <button  (click)="toggleMenu()"><img src="icons/burguer.svg" alt=""></button>
        <img class="logo" src="icons/logo.svg" alt="">
        <img class="buscar" src="icons/buscar.svg" alt="">
      </section>

    </nav>
      <ul [class.open]="nav">
        <li class="cerrar"><button (click)="closeMenu()"><img class="close" src="icons/close.svg" alt=""></button></li>
        <li><a href="">TEMAS</a></li>
        <li><a href="">TENDENCIAS</a></li>
        <li><a href="">TECNOLOGIA</a></li>
        <li><a href="">TESTIMONIOS</a></li>
        <li><a href="">NOTICIAS</a></li>
      </ul>
      <div class="relleno">

      </div>
  `,
  styleUrl: './responsive.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResponsiveComponent { 

  nav = false;
  toggleMenu() {
    this.nav = !this.nav;
  }
  closeMenu(){
    this.nav = false;
  }

}
