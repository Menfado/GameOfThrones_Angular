import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
public charactersURL: string = "https://thronesapi.com/api/v2/Characters"

  constructor(private httpClient: HttpClient) { }
  
  public getCharacters() {
    return this.httpClient.get(this.charactersURL)
  }


  public getCharacter(characterID: any){
    return this.httpClient.get(`https://thronesapi.com/api/v2/Characters/${characterID}`)
  }

}


