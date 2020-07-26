import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Link } from 'src/app/core/models/link.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() links: Link[] = [];
  @Output() sidenavOpen = new EventEmitter<boolean>();

  onSidenavOpen() {
    this.sidenavOpen.emit(true);
  }
}
