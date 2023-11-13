import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { menuItemsProps } from 'src/types';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  faSun = faSun;
  faMoon = faMoon;

  menu: menuItemsProps[] = [
    {
      label: 'Home',
      link: '/landing-page',
    },
    {
      label: 'Builder',
      link: '/builder',
    },
  ];

  @Input()
  selectedTheme = 'light';
  isDarkMode = true;

  @Output()
  readonly darkModeSelect = new EventEmitter<string>();

  handleClick(value: string): void {
    this.selectedTheme = value;
    this.darkModeSelect.emit(value);
  }
}
