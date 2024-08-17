import { Component, OnInit } from '@angular/core';
import { DataService } from '../players-service/Services/data.service';

@Component({
  selector: 'app-http-data',
  templateUrl: './http-data.component.html',
  styleUrl: './http-data.component.css'
})
export class HttpDataComponent implements OnInit {

  users: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users: ', error);
      }
    );

  }



}
