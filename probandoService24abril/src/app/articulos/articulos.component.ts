import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ServicioService } from '../servicio/servicio.service';
import { OnInit } from '@angular/core';
import { Articulo } from '../articulo';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,],
  templateUrl: './articulos.component.html',
  styleUrl: './articulos.component.css'
})
export class ArticulosComponent implements OnInit{
  articles: Articulo[] = [];
  showLongDescription = false;
  articleId: number = 0;

  constructor(public servicio: ServicioService) { }

  ngOnInit() {
    this.articles = this.servicio.getArticulos();
  }

  toggleLongDescription(articuloId: number) {
    this.showLongDescription = !this.showLongDescription;
    this.articleId = articuloId;
  }
}