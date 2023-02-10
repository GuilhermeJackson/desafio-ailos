import { Component, OnInit, Input } from '@angular/core';
import { Cooperated } from '../../model/Cooperated.model';

@Component({
  selector: 'app-card-data-coperative',
  templateUrl: './card-data-coperative.component.html',
  styleUrls: ['./card-data-coperative.component.less']
})
export class CardDataCoperativeComponent implements OnInit {
  @Input() cooperated?: Cooperated;

  constructor() { }

  ngOnInit(): void {
  }

  isViewCoperative(): boolean {
    if(this.cooperated) {
      return true
    }
    return false
  }
  
}
