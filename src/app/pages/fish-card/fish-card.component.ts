import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-card',
  templateUrl: './fish-card.component.html',
  styleUrls: ['./fish-card.component.css']
})
export class FishCardComponent implements OnInit {

  @Input() dataFish: any;

  constructor() { }

  ngOnInit(): void {
  }

  details() {
    console.log('Clicou: ');
  }
}
