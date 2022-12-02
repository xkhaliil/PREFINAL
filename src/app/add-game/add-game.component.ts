import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game.model';
import { GameService } from '../services/game.service';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  newGame = new Game();
  genres! : Genre[];
  newIdGenre! : number;
  newGenre! : Genre;
  constructor(private gameService: GameService,private router :Router) { }

  ngOnInit(): void {
    this.genres = this.gameService.listeGenres();
  }
  addGame(){
    //console.log(this.newGame);
    this.newGenre =this.gameService.consulterGenre(this.newIdGenre);
this.newGame.genre = this.newGenre;
    this.gameService.ajouterGame(this.newGame);
    this.router.navigate(['games']);
    }
}
