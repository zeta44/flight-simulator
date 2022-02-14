import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})
export class ToggleButtonComponent implements OnInit {
  @Output() changed = new EventEmitter<boolean>();
  checked?: any;

  constructor() { }

  ngOnInit(): void {
       
  }

}
