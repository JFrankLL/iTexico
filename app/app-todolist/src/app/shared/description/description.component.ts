import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IProfile } from '../../profile/profile';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent implements OnInit, OnChanges {

  @Input() profile: IProfile;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.profile);
  }

}
