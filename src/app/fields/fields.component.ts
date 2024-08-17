import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Player } from '../Models/Player';
import { PlayersService } from '../players-service/Services/players.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrl: './fields.component.css'
})
export class FieldsComponent implements OnInit {

  @Input() isDisabled!: boolean;
  @Input() selectedPlayer!: Player;

  myForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    pass: [0],
    shoot: [0],
    control: [0],
    country: [''],
    defense: [0]
    });

  constructor(private formBuilder: FormBuilder, private playersService:PlayersService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPlayer'] && changes['selectedPlayer'].currentValue) {
      this.patchForm();
    }
  }

  updateTable(): void {
    let playerToUpdateOnTable = this.updateSelectedPlayer();
    if (playerToUpdateOnTable) {
      this.playersService.updatePlayer(playerToUpdateOnTable);
    }
  }


  updateSelectedPlayer(): Player | null {
    if (this.myForm.value) {
      const formValues = this.myForm.value;
      this.selectedPlayer.name = formValues.name as string;
      this.selectedPlayer.pass = formValues.pass as number;
      this.selectedPlayer.shoot = formValues.shoot as number;
      this.selectedPlayer.control = formValues.control as number;
      this.selectedPlayer.country = formValues.country as string;
      this.selectedPlayer.defense = formValues.defense as number;
    }
    else {
      console.warn("Selected player or form values are not defined.");
    }

    if (this.selectedPlayer) {
      return this.selectedPlayer;
    }
    else {
      console.warn("Selected player or form values are not defined.");
      return null;
    };
  }

  private patchForm(): void {
      this.myForm.patchValue({
        name: this.selectedPlayer.name,
        pass: this.selectedPlayer.pass,
        shoot: this.selectedPlayer.shoot,
        control: this.selectedPlayer.control,
        country: this.selectedPlayer.country,
        defense: this.selectedPlayer.defense
      });
  }
}
