import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public _toggleSidebar() {
    this.opened = !this.opened;
  }
}
