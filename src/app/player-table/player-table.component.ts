import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Player } from '../Models/Player';
import { Router } from '@angular/router';
import { PlayersService } from '../players-service/Services/players.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrl: './player-table.component.css'
})
export class PlayerTableComponent implements OnInit {

  @Input() players: Player[] = [];
  selectedPlayer!: Player;
  goBackFlag: boolean = true;

  constructor(private playersService:PlayersService) { }

  ngOnInit() {
  }

  cellClickHandler(event: any): void{
    this.selectedPlayer = {
      id: event.dataItem.id,
      name: event.dataItem.name,
      pass: event.dataItem.pass,
      shoot: event.dataItem.shoot,
      control: event.dataItem.control,
      country: event.dataItem.country,
      defense: event.dataItem.defense
    };
    this.goBackFlag = false;
  }

  goBack(): void {
    this.goBackFlag = true;
  }

}
