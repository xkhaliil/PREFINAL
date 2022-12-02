import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../model/game.model';
import { AuthService } from '../services/auth.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games : Game[]; //un tableau de chînes de caractères

  constructor(private gameService: GameService ,
              private router :Router,
              public authService: AuthService) {
    this.games = gameService.listeGames();
    }

  ngOnInit(): void {
  }
  supprimerGame(g: Game)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
 this.gameService.supprimerGame(g);
}
}
