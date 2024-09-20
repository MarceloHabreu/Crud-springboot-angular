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

  // * Variable for visibility of table
  table: boolean = true;

  // * JSON of clients
  clientes: Client[] = [];

  // * Contructor
  constructor(private service: ClientService) {}

  // * Method de seleção
  selecionar(): void {
    this.service.selecionar().subscribe((retorno) => (this.clientes = retorno));
  }

  // * Method of register
  cadastrar(): void {
    this.service.cadastar(this.client).subscribe((retorno) => {
      this.clientes.push(retorno); // * Cadastrando o clinete no vetor
      this.client = new Client(); // * Clearing form

      alert('Successfully registered customer'); // * Alert mesage
    });
  }

  // Method for select a client especify
  selecionarCliente(position: number): void {
    // * Select client in vector
    this.client = this.clientes[position];

    // * Visibility of buttons
    this.btnRegister = false;

    // * Visibility of table
    this.table = false;
  }

  // * Method of initialization
  ngOnInit() {
    this.selecionar();
  }
}
