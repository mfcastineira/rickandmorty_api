import { Component, Input, OnInit } from '@angular/core'
import { icharacters } from '../models/icharacters';
@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss']
})
export class CharactersCardComponent implements OnInit {
@Input() public character!: icharacters ;
  constructor() { }

  ngOnInit(): void {
  }

}
