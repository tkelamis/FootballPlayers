import { Injectable } from '@angular/core';
import { Player } from '../../Models/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  players: Player[] = [
    {
      id: 1, name: 'Lionel Messi', pass: 95, shoot: 94, control: 98, country: 'Argentina', defense: 40
    },
    {
      id: 2, name: 'Cristiano Ronaldo', pass: 82, shoot: 93, control: 89, country: 'Portugal', defense: 40
    },
    {
      id: 3, name: 'Neymar Jr', pass: 87, shoot: 85, control: 96, country: 'Brazil', defense: 38
    },
    {
      id: 4, name: 'Kevin De Bruyne', pass: 94, shoot: 86, control: 92, country: 'Belgium', defense: 60
    },
    {
      id: 5, name: 'Kylian Mbappé', pass: 78, shoot: 88, control: 91, country: 'France', defense: 45
    },
    {
      id: 6, name: 'Virgil van Dijk', pass: 75, shoot: 60, control: 78, country: 'Netherlands', defense: 93
    },
    {
      id: 7, name: 'Mohamed Salah', pass: 80, shoot: 89, control: 90, country: 'Egypt', defense: 45
    },
    {
      id: 8, name: 'Robert Lewandowski', pass: 78, shoot: 92, control: 86, country: 'Poland', defense: 40
    },
    {
      id: 9, name: 'Sergio Ramos', pass: 75, shoot: 70, control: 80, country: 'Spain', defense: 88
    },
    {
      id: 10, name: 'Luka Modrić', pass: 91, shoot: 80, control: 93, country: 'Croatia', defense: 70
    }
  ]

  constructor() { }

  getAllPlayers(): Player[] {
    return this.players;
  }

  updatePlayer(player: Player): void {
    const players = this.getAllPlayers();
    const playerToUpdate = players.find(p => p.id === player.id);
    if (playerToUpdate) {
      playerToUpdate.name = player.name;
      playerToUpdate.pass = player.pass;
      playerToUpdate.shoot = player.shoot;
      playerToUpdate.control = player.control;
      playerToUpdate.country = player.country;
      playerToUpdate.defense = player.defense;
    } else {
      console.warn(`Player with id ${player.id} not found.`);
    }

    console.log(playerToUpdate);
    console.log(players);
  }
}
