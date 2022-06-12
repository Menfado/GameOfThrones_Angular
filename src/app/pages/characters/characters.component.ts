import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/models/characters.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public characterList: CharacterInterface[] = [];
  constructor(public characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data: any) => {
      const charactersAPI: CharacterInterface[] = data.map((character: any) => ({
        id: character.id,
        fullName: character.fullName,
        title: character.title,
        family: character.family,
        imageUrl: character.imageUrl
      }));
      this.characterList = charactersAPI;
    })
  }

}