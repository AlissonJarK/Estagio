import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.onToggle.emit();
  }

}
