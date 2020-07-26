import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Link {
  path: string;
  label: string;
}

@Component({
  templateUrl: './index.component.html',
})
export class DemoUiIndexPage implements OnInit {

  links: Link[] = [];

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.links = this.buildLinks();
  }

  private buildLinks(): Link[] {
    return this.router.config
      .find(route => route.path === 'demo')
      ['_loadedConfig'] // TODO
      .routes
      .map(route => {
        return {
          path: route.path ? `/demo/${route.path}` : '/demo',
          label: route.data.label,
        };
      });
  }
}
