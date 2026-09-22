import { Component, signal } from '@angular/core';
import {MatExpansionPanelActionRow} from '@angular/material/expansion';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatToolbarRow, TranslatePipe, RouterOutlet, MatToolbar, RouterLink, RouterLinkActive, MatButtonModule],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  options = signal([
    { link: '/home', label: 'option.home' },
    { link: '/about', label: 'option.about' },
  ]);
}
