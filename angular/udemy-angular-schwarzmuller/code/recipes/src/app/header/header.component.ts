import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private dataStorageService: DataStorageService,
    public authService: AuthService
  ) {}

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onStoreData(): void {
    this.dataStorageService.store();
  }

  onFetchData(): void {
    this.dataStorageService.fetch();
  }

  onLogout(): void {
    this.authService.logout();
  }

}
