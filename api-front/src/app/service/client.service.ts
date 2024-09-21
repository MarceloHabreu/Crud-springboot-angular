import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  // * Url da API
  private url: string = 'http://localhost:8080';

  // * Constructor
  constructor(private http: HttpClient) {}

  // * Method for select all the clients
  selecionar(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }

  // * Method for register clients
  cadastar(obj: Client): Observable<Client> {
    return this.http.post<Client>(this.url, obj);
  }

  // * Method for update clients
  editar(obj: Client): Observable<Client> {
    return this.http.put<Client>(this.url, obj);
  }

  // *  Method for to remove clients
  remover(codigo: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + codigo);
  }
}
