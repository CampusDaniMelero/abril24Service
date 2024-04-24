import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { Blog2Component } from './blog2/blog2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogComponent,ArticulosComponent, Blog2Component, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '22Abril';
}
