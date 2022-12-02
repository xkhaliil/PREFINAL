import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../model/game.model';
import { Genre } from '../model/genre.model';


@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styles: [
  ]
})
export class UpdateGameComponent implements OnInit {
  currentGame = new Game();
  genres!: Genre[];
  updatedGenreId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private gameService: GameService) { }

    ngOnInit(): void {
      this.genres = this.gameService.listeGenres();
      this.currentGame =
      this.gameService.consulterGame(this.activatedRoute.snapshot.params['id']);
      this.updatedGenreId=this.currentGame.genre.idGenre;
    }
    updateGame() {
      this.currentGame.genre=this.gameService.consulterGenre(this.updatedGenreId);
      this.gameService.updateGame(this.currentGame);
      this.router.navigate(['games']);
      }
    }