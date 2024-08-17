import { Component,Input,OnInit } from '@angular/core';
import { SelectEvent } from "@progress/kendo-angular-layout";
import { Player } from '../Models/Player';

@Component({
  selector: 'app-tab-page',
  templateUrl: './tab-page.component.html',
  styleUrl: './tab-page.component.css'
})
export class TabPageComponent implements OnInit {

  isDisabledFields: boolean = false;
  @Input() selectedPlayer!: Player;

  ngOnInit(){
    this.isDisabledFields = true;
  }

  public onTabSelect(event: any): void {
    if (event.title == "Disabled Fields"){
      this.isDisabledFields = true;
    }
  }
}
