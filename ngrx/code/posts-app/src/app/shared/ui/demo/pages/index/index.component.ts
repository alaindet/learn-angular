import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './index.component.html',
})
export class DemoUiIndex implements OnInit {

  routes = [];

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    console.log(
      this.router.config
        .find(route => route.path === 'demo')
    );
  }
}


/*
import { Router, Route } from "@angular/router";

constructor(private router: Router) { }

ngOnInit() {
  this.printpath('', this.router.config);
}

printpath(parent: String, config: Route[]) {
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    console.log(parent + '/' + route.path);
    if (route.children) {
      const currentPath = route.path ? parent + '/' + route.path : parent;
      this.printpath(currentPath, route.children);
    }
  }
}
*/
