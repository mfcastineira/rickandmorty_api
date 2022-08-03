import { Component, OnInit } from '@angular/core';
import { icharacters } from './models/icharacters';
import { ServicesService } from './services/services.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  public character: icharacters[] = [];

  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    this.recoverList();
  }

  public recoverList() {
    this.servicesService
      .getCharacters()

      .subscribe((data: any) => {
        const results: icharacters[] = data.results;

        const formattedResults = results.map(({ name, image }) => ({
          name,

          image,
        }));

        this.character = formattedResults;
      });
  }
}
