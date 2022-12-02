import { Genre } from './../model/genre.model';
import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-genre.component.html',
  styles: [
  ]
})
export class RechercheParGenreComponent implements OnInit {
  games!: Game[];
  genres! : Genre[];
  IdGenre!: number;
  constructor(private gameService: GameService) { }

ngOnInit(): void {
    this.genres = this.gameService.listeGenres();
    this.games = this.gameService.listeGames();
  }
onChange() {
    // console.log(this.IdCategorie);
     this.games =  this.gameService.rechercherParGenre(this.IdGenre);
     console.log(this.games);
     
     }
supprimerGame(p: Game)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
{
  this.gameService.supprimerGame(p);
  this.games =  this.gameService.rechercherParGenre(this.IdGenre);
  
}
}

}