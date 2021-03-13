import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public eventos: any;

  ngOnInit(): void {
    this.GetEventos();
  }

  public GetEventos(): void{
    // tslint:disable-next-line: deprecation
    this.http.get('https://localhost:5001/Eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );
  }
}
