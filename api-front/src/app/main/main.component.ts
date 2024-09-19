import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client } from '../model/Client';
import { ClientService } from '../service/client.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  // * Object of type Client
  client = new Client();
  // * Variable for visibility of buttons
  btnRegister: boolean = true;

  // * JSON of clients
  clientes: Client[] = [];

  // * Contructor
  constructor(private service: ClientService) {}

  // * Method de seleção
  selecionar(): void {
    this.service.selecionar().subscribe((retorno) => (this.clientes = retorno));
  }

  // * Method of initialization
  ngOnInit() {
    this.selecionar();
  }
}
