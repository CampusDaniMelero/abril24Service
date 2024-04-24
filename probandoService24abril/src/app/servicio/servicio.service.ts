import { Injectable } from '@angular/core';
import {Articulo} from '../articulo';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  showLongDescription = false; // Flag to control long description display
  articleId: number = 0;
  articles = [
    {
      id: 1,
      title: 'Ronaldo máximo goleador de Arabia Saudi',
      imageURL: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_4562,h_2566,x_0,y_101/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_es_international_web/01h81mxq2e2cjtv1dbzv.jpg',
      shortDescription: 'Ronaldo llego a la cifra de 36 goles con el All-Nasr de Arabia Saudi',
      longDescription: 'Ronaldo llego a la cifra de 36 goles con el All-Nasr de Arabia Saudi .  Cristiano Ronaldo marcó un doblete en la victoria del Al-Nassr por 3-2 sobre el Al-Wehda en la liga de Arabia Saudita, lo que le permitió alcanzar la impresionante cifra de 36 goles en 42 partidos con el club desde su llegada en enero de 2023. El delantero portugués, de 38 años, sigue demostrando ser una máquina de hacer goles. A pesar de su edad, Ronaldo sigue manteniendo un nivel altísimo de juego y es uno de los jugadores más decisivos del mundo.'
    },
    {
      id: 2,
      title: 'Bellimgham remonta el partido',
      imageURL: 'https://ca-times.brightspotcdn.com/dims4/default/d560673/2147483647/strip/true/crop/4659x3106+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F60%2Ffe%2Fbb3035a051d4c6e5404741f7a92d%2F0d22909f3ebf4f30add11d2c099cdc51',
      shortDescription: 'Un espectacular gol de Bellimgham en el minuto 90 le da la victoria al Real Madrid',
      longDescription: ' Un espectacular gol de Bellimgham en el minuto 90 le da la victoria al Real Madrid . El partido comenzó con un ritmo frenético, con ambos equipos buscando el gol desde el primer minuto. El Real Madrid tomó la delantera en el minuto 15 gracias a un gol de Vinicius Jr., pero el FC Barcelona empató el marcador poco antes del descanso con un tanto de Christensen , para luego empatar Vinicus , Fermin y remontar Lucas Vazquez y el tanto final de Jude Bellingham. Cuando parecía que el partido terminaría en empate, Jude Bellingham apareció en el minuto 90 para marcar un golazo con asistencia de Cafucas Vazquez (MVP). El gol desató la locura en el Bernabéu y dio al Real Madrid una victoria vital en la lucha por asegurar la liga.'
    },
  ];

  constructor() { }

  getArticulos(): Articulo[] {
    return this.articles;
  }

  getArticulo(articuloId: number): Articulo | undefined {
    return this.articles.find(articulo => articulo.id === articuloId);
  }

  showArticle(articuloId: number) {
    const article = this.articles.find(article => article.id === articuloId);
    if (article) {
      this.showLongDescription = true;
      this.articleId = articuloId;
    }
  }

  toggleLongDescription(articuloId: number) {
    this.showLongDescription = !this.showLongDescription;
    this.articleId = articuloId;
  }
}
