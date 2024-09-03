import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>Regístrate</h1>
      <main>
      <section class="informacion">
        <p>¿Le apasiona el almacenamiento de energía y desea estar al día de los últimos avances en tecnología BESS?</p>
        <p>Si es así, nuestro boletín de almacenamiento de energía es perfecto para usted.</p>
        <p>Con nuestro boletín, obtendrá información periódica sobre las últimas tendencias en BESS y acceso exclusivo a contenidos que no encontrará en ningún otro sitio.</p> 
      </section>
      <section class="registro">
        <p>Además, nuestro equipo de expertos del sector elabora cuidadosamente cada edición para garantizar que reciba los conocimientos más valiosos y relevantes.</p>
        <p>No se lo pierda: suscríbase hoy mismo a nuestro boletín y eleve sus conocimientos sobre BESS al siguiente nivel.</p>
        <div class="button">
          <input type="text" placeholder="Regístrate para enterarte de las noticias">
          <button>enviar</button>
        </div>
      </section></main>
    </header>
  `,
  styleUrl: './registro.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistroComponent { }
