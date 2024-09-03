import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <footer>
    <nav>
      <ul>
        <li><a href="">TEMAS</a></li>
        <li><a href="">TENDENCIAS</a></li>
        <li><a href="">TECNOLOGIA</a></li>
        <li><a href="">TESTIMONIOS</a></li>
        <li><a href="">NOTICIAS</a></li>
        <li class="buscar"><a href=""><img src="icons/buscar.svg" alt=""></a></li>
      </ul>
      <p>2024 - ALL RIGHTS RESERVED </p>
    </nav>
    
  </footer>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
