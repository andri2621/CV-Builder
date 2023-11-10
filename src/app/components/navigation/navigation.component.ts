import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  faSun = faSun;
  faMoon = faMoon;

  cobaEmptyVar = '';

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
