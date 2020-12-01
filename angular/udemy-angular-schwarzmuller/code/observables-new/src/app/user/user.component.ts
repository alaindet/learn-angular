import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  id: number;
  private paramsSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  /**
   * This is not needed as Angular clears built-in subscriptions automatically
   */
  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

  onActivate(): void {
    // this.usersService.activatedEmitter.emit(true);
    this.usersService.activatedSubject.next(true);
  }
}
