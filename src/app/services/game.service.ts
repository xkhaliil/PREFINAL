import { Injectable } from '@angular/core';
import { Game } from '../model/game.model';
import { Genre } from '../model/genre.model';
@Injectable({
providedIn: 'root'
})
export class GameService {
  games : Game[]; 
  game! : Game;
  genres : Genre[];
  gamesRecherche! : Game[];
  constructor() {
  this.genres = [ {idGenre : 1, nomGenre : "FPS"},
                  {idGenre : 2, nomGenre : "TPS"},];
  this.games = [
    {idGame : 1, nomGame : "Call Of Duty", prixGame : 299, dateCreation : new Date("01/14/2022"),genre : {idGenre : 1, nomGenre : "FPS"}},
    {idGame : 2, nomGame : "Elden Ring", prixGame : 200, dateCreation : new Date("12/17/2022"),genre : {idGenre : 2, nomGenre : "TPS"}},
    {idGame : 3, nomGame :"Rainbow 6 Siege", prixGame : 120, dateCreation : new Date("02/20/2015"),genre : {idGenre : 1, nomGenre : "FPS"}},
    {idGame : 4, nomGame :"Valorant", prixGame : 0, dateCreation : new Date("05/22/2020"),genre : {idGenre : 1, nomGenre : "FPS"}}
    ];
}
listeGames():Game[] {
return this.games;
}
ajouterGame( game: Game){
this.games.push(game);
}
supprimerGame( Gam: Game){
  const index = this.games.indexOf(Gam, 0);
  if (index > -1) {
  this.games.splice(index, 1);
  }
}
consulterGame(id:number): Game{
  this.game = this.games.find(p => p.idGame == id)!;
  return this.game;
  }
updateGame(p:Game)
{
this.supprimerGame(p);
this.ajouterGame(p);
}
listeGenres():Genre[] {
  return this.genres;
  }
  consulterGenre(id:number): Genre{
    return this.genres.find(cat => cat.idGenre == id)!;
    }
    rechercherParGenre(idCat: number): Game[]{
      this.gamesRecherche =[];
      this.games.forEach((cur, index) => {
       if(idCat == cur.genre.idGenre) {
           console.log("cur "+cur);
          this.gamesRecherche.push(cur);
           }
      });
       return this.gamesRecherche;
      }

      rechercherParNom(nom: String): Game[]{
        this.gamesRecherche = [];
    
        this.games.forEach((cur, index) => {
         if(nom == cur.nomGame) {
             console.log("cur "+cur);
            this.gamesRecherche.push(cur);
             }
       });
       return this.gamesRecherche;
       }
    
}