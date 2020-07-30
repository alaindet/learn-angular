import { Component, Output, EventEmitter, Input } from '@angular/core';

import { AuthService } from './../../../features/auth/services/auth.service';
import { Link } from 'src/app/core/models/link.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() links: Link[] = [];
  @Output() sidenavOpen = new EventEmitter<void>();

  constructor(
    public authService: AuthService,
  ) {}

  onSidenavOpen() {
    this.sidenavOpen.emit();
  }
}
