import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from 'src/app/models/characters.model';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characterdetail',
  templateUrl: './characterdetail.component.html',
  styleUrls: ['./characterdetail.component.scss']
})
export class CharacterdetailComponent implements OnInit {
  public character!: any;

  constructor(private characterService: CharacterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const characterID = params.get('characterID')
      
      this.characterService.getCharacter(characterID).subscribe((data: any) => {
        this.character = data;
        console.log(this.character)
      })
    })
  }

}
