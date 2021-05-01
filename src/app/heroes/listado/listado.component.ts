import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = '';

  borrarHerore(){
    // borra un elemento del array heroes
    this.heroeBorrado = this.heroes.shift() || '';

  }



}
