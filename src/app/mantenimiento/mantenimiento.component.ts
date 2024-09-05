import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-mantenimiento',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
  ],
  template: `
  <header>
    <button>CREAR</button>
    <button>LEER</button>
    <button>ACTUALIZAR</button>
    <button>BORRAR</button>

<table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
<!-- ID Column -->
<ng-container matColumnDef="id">
  <th mat-header-cell encabezado *matHeaderCellDef>ID</th>
  <td mat-cell *matCellDef="let element">{{element.id}}</td>
</ng-container>

<!-- Título Column -->
<ng-container matColumnDef="titulo">
  <th mat-header-cell encabezado *matHeaderCellDef>Título</th>
  <td mat-cell *matCellDef="let element">{{element.titulo}}</td>
</ng-container>

<!-- Descripción Column -->
<ng-container matColumnDef="descripcion">
  <th mat-header-cell encabezado *matHeaderCellDef>Descripción</th>
  <td mat-cell *matCellDef="let element">{{element.descripcion}}</td>
</ng-container>

<!-- Contenido Column -->
<ng-container matColumnDef="contenido">
  <th mat-header-cell encabezado *matHeaderCellDef>Contenido</th>
  <td mat-cell *matCellDef="let element">{{element.contenido}}</td>
</ng-container>

<!-- Autor Column -->
<ng-container matColumnDef="autor">
  <th mat-header-cell encabezado *matHeaderCellDef>Autor</th>
  <td mat-cell *matCellDef="let element">{{element.autor}}</td>
</ng-container>

<!-- Fecha de Publicación Column -->
<ng-container matColumnDef="fecha_publicacion">
  <th mat-header-cell encabezado *matHeaderCellDef>Fecha de Publicación</th>
  <td mat-cell *matCellDef="let element">{{element.fecha_publicacion}}</td>
</ng-container>

<!-- URL Column -->
<ng-container matColumnDef="url">
  <th mat-header-cell encabezado *matHeaderCellDef>URL</th>
  <td mat-cell *matCellDef="let element"><a [href]="element.url" target="_blank">{{element.url}}</a></td>
</ng-container>

<!-- Imagen URL Column -->
<ng-container matColumnDef="imagen_url">
  <th mat-header-cell encabezado *matHeaderCellDef>Imagen URL</th>
  <td mat-cell *matCellDef="let element"><img [src]="element.imagen_url" alt="Imagen" width="100"></td>
</ng-container>

<!-- Categoría Column -->
<ng-container matColumnDef="categoria">
  <th mat-header-cell encabezado *matHeaderCellDef>Categoría</th>
  <td mat-cell *matCellDef="let element">{{element.categoria}}</td>
</ng-container>

<!-- Etiquetas Column -->
<ng-container matColumnDef="etiquetas">
  <th mat-header-cell encabezado *matHeaderCellDef>Etiquetas</th>
  <td mat-cell *matCellDef="let element">{{element.etiquetas}}</td>
</ng-container>

<!-- Publicado Column -->
<ng-container matColumnDef="publicado">
  <th mat-header-cell encabezado *matHeaderCellDef>Publicado</th>
  <td mat-cell *matCellDef="let element">{{element.publicado ? 'Sí' : 'No'}}</td>
</ng-container>

<!-- Vistas Column -->
<ng-container matColumnDef="vistas">
  <th mat-header-cell encabezado *matHeaderCellDef>Vistas</th>
  <td mat-cell *matCellDef="let element">{{element.vistas}}</td>
</ng-container>

<!-- Fecha de Creación Column -->
<ng-container matColumnDef="fecha_creacion">
  <th mat-header-cell encabezado *matHeaderCellDef>Fecha de Creación</th>
  <td mat-cell *matCellDef="let element">{{element.fecha_creacion}}</td>
</ng-container>

<!-- Fecha de Actualización Column -->
<ng-container matColumnDef="fecha_actualizacion">
  <th mat-header-cell encabezado *matHeaderCellDef>Fecha de Actualización</th>
  <td mat-cell *matCellDef="let element">{{element.fecha_actualizacion}}</td>
</ng-container>
<!-- Header and Row Definitions -->
<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
<tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

  </header>
  `,
  styleUrl: './mantenimiento.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MantenimientoComponent {

  displayedColumns: string[] = ['id', 'titulo', 'descripcion', 'contenido', 'autor', 'fecha_publicacion', 'url', 'imagen_url', 'categoria', 'etiquetas', 'publicado', 'vistas', 'fecha_creacion', 'fecha_actualizacion'];
  dataSource = ELEMENT_DATA; // Define tus datos aquí
  }

const ELEMENT_DATA = [
{id: 1, titulo: 'Ejemplo de Título', descripcion: 'Descripción del artículo.', contenido: 'Contenido completo del artículo.', autor: 'Autor del artículo', fecha_publicacion: '2024-09-05', url: 'https://example.com/articulo1', imagen_url: 'https://example.com/imagen1.jpg', categoria: 'Categoría Ejemplo', etiquetas: 'etiqueta1, etiqueta2', publicado: true, vistas: 100, fecha_creacion: '2024-09-01 12:00:00', fecha_actualizacion: '2024-09-02 14:30:00'},
// Agrega más datos aquí
];

