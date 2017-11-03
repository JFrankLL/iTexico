import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { IProfile } from './profile';

import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  private _url = 'https://jsonplaceholder.typicode.com/photos';
  private _nPhotos = 50;

  photos: any[];
  error: any;

  currentProfile: any;

  profiles: IProfile[];

  name: String;
  img: String;

  constructor(private _productService: ProfileService) {
    this.profiles = [];
    for (let i = 0; i < Math.random() * 10 * 0 + 1; i++) {
      const newProfile: IProfile = {
        name: 'Nombre ' + i,
        img: 'http://lorempixel.com/64/64/?' + i,
        description: 'descripcion ' + i
      };
      this.profiles.push(newProfile);
    }
  }

  ngOnInit() {
    this._productService.getProducts(this._url).subscribe(
      photos => {
        this.photos = photos;
        for (let i = 0; i < this._nPhotos; i++) {
          this.profiles.push({
            name: 'Nombre ' + this.photos[i].id,
            img: this.photos[i].thumbnailUrl,
            description: this.photos[i].title
          });
        }
      },
      error => this.error
    );
  }

  update() {
    // console.log(this.newProfile);
  }

  remove(profile): void {
    this.profiles = this.profiles.filter( element => element.name !== profile.name );
  }

  add() {
    const newProfile = { name: this.name, img: this.img, description: 'default' };
    this.profiles.push(newProfile);
  }

  setCurrentProfile(profile) {
    this.currentProfile = profile;
  }

}
