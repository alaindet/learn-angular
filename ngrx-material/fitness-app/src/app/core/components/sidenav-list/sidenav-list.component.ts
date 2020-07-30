import { Component, Output, EventEmitter, Input } from '@angular/core';

import { AuthService } from './../../../features/auth/services/auth.service';
import { Link } from 'src/app/core/models/link.interface';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {

  @Input() links: Link[] = [];
  @Output() sidenavClose = new EventEmitter<void>();
  @Output() loggedOut = new EventEmitter<void>();

  constructor(
    public authService: AuthService,
  ) {}

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  onLogout() {
    this.loggedOut.emit();
  }
}
