import { Routes } from '@angular/router';
import { BlogPrecisoComponent } from './components/blog-preciso/blog-preciso.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';

export const routes: Routes = [
    { path: '', component: BlogPrecisoComponent },
    { path: 'contenido', component: ContenidoComponent },
    { path: 'mantenimiento', component: MantenimientoComponent }
];
