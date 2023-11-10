import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import logger from 'src/lib/logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CV-Builder';

  get selectedTheme() {
    return this.currentTheme;
  }

  private currentTheme = 'light';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('activeTheme') || 'light';
    this.renderer.addClass(this.document.documentElement, this.currentTheme);
  }

  handleSelectTheme(selectedTheme: string) {
    this.renderer.removeClass(this.document.documentElement, this.currentTheme); // Remove the current class
    this.currentTheme = selectedTheme;
    this.renderer.addClass(this.document.documentElement, this.currentTheme); // Add the new class
    localStorage.setItem('activeTheme', this.currentTheme);
    logger(selectedTheme);
  }
}
