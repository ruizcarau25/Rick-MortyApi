import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharacterListResponse } from '../interfaces/character-list-response';

// STEP4: servicio que hace las peticiones a la API de Rick & Morty
@Injectable({ providedIn: 'root' })
export class CharacterService {
  http = inject(HttpClient);

  private readonly baseUrl = 'https://rickandmortyapi.com/api/character';

  getAll(): Observable<CharacterListResponse> {
    return this.http.get<CharacterListResponse>(this.baseUrl);
  }

  // STEP4: método que obtiene la información de un personaje a partir de su ID
  getOne(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
  }
}
