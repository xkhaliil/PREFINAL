import { Genre } from './../model/genre.model';
import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  games!: Game[];
  genres! : Genre[];
  IdGenre!: number;
  nom! : String;
  game!: Game[];
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.genres = this.gameService.listeGenres();
    this.games = this.gameService.listeGames();
    this.game = [];
  }
onChange() {
    // console.log(this.IdCategorie);
     this.game =  this.gameService.rechercherParNom(this.nom);
     console.log(this.game);
     
     }
supprimerGame(p: Game)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
{
  this.gameService.supprimerGame(p);
  this.games =  this.gameService.rechercherParNom(this.nom);
  
}
}

}
