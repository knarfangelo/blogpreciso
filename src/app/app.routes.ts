import { Routes } from '@angular/router';
import { BlogPrecisoComponent } from './components/blog-preciso/blog-preciso.component';
import { ContenidoComponent } from './contenido/contenido.component';

export const routes: Routes = [
    { path: '', component: BlogPrecisoComponent },
    { path: 'contenido', component: ContenidoComponent }
];
