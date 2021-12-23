import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export type Feature = 'recipes' | 'shopping-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<Feature>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: Feature) {
    this.featureSelected.emit(feature);
  }

}
