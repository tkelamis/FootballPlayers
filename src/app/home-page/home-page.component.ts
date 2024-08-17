import { Component, OnInit, SimpleChanges } from '@angular/core';
import { PlayersService } from '../players-service/Services/players.service';
import { Player } from '../Models/Player';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  players!: Player[];

  constructor(private playersService: PlayersService) {

  }

  ngOnInit() {
    this.players = this.playersService.getAllPlayers();
  }

  /*getPlayersFromService(): Player[]{

    this.players = this.playersService.getAllPlayers();
    return this.players;

  }*/
  


}
