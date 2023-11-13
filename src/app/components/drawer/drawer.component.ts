import { Component } from '@angular/core';
import logger from 'src/lib/logger';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  handleSelect(val: string) {
    logger(val);
  }
}
