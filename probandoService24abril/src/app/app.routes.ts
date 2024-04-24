import { Routes } from '@angular/router';
import { ArticulosComponent } from '../app/articulos/articulos.component'
import { Blog2Component } from './blog2/blog2.component';

export const routes: Routes = [
    { path: 'blog', component: ArticulosComponent},
    {path: 'blog2', component: Blog2Component},
    

];
