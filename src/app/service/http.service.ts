import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://gateway.marvel.com/v1/public'
const KEY = '24a50defe4de47f45c3fa0900b48f728';
const HASH = '7c7dbc9ef41518a738eebe55a77d3849';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  async get(req: string, options?: any){
    return await this.http.get(`${API}/${req}`, options)
      .toPromise()
      .then((retorno: any) => retorno);
  };

  async post(req: string, value: any){
    return await this.http.post(`${API}/${req}`, value)
      .toPromise()
      .then((retorno: any) => retorno);
  };

  async put(req: string, codigo: number, value: any) {
    return await this.http.put(`${API}/${req}/${codigo}`, value)
      .toPromise()
      .then((retorno: any) => retorno);
  };

  async delete(req: string, codigo: number) {
    return await this.http.delete(`${API}/${req}/${codigo}`)
      .toPromise()
      .then((retorno: any) => retorno);
  };

  async getAllCharacters(options?: any){
    return await this.http.get(`${API}/characters?ts=1&apikey=${KEY}&hash=${HASH}&limit=100&offset=90`, options)
      .toPromise()
      .then((retorno: any) => retorno);
  };

  async getCharactersById(codigo: string, options?: any){
    return await this.http.get(`${API}/characters/${codigo}?ts=1&apikey=${KEY}&hash=${HASH}`, options)
      .toPromise()
      .then((retorno: any) => retorno);
  };
}
