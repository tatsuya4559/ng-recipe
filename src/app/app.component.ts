import { Component } from '@angular/core';
import { Feature } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recepi-app';
  activeFeature: Feature = 'recipes';

  onNavigate(feature: Feature) {
    this.activeFeature = feature;
  }
}
