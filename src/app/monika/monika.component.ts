import { Component, OnInit } from '@angular/core';
import { MonikaService } from './monika.service';

@Component({
  selector: 'app-monika',
  templateUrl: './monika.component.html',
  styleUrls: ['./monika.component.scss']
})
export class MonikaComponent implements OnInit {
  countSuccess: number = 0;
  countFails: number = 0;
  displayName: string;
  imageURL: string;
  disable: any;
  constructor(private mS: MonikaService) { }

  ngOnInit() {
    this.mS.getMeme().subscribe(
      (result) => {
        this.displayName = result['result']['displayName'];
        this.imageURL = result['result']['imageUrl'];
        this.countSuccess += 1;
      },
      (error) => {
         this.countFails += 1;
      }
    )
  }

  nextImg(){
    this.mS.getNextMeme().subscribe(
      (result) => {
        this.displayName = result['result']['displayName'];
        this.imageURL = result['result']['imageUrl'];
        this.countSuccess += 1;
      },
      (error) => {
        this.countFails += 1;
      }
    )
  }

  prevImg(){
    this.mS.getPrevMeme().subscribe(
      (result) => {
        this.displayName = result['result']['displayName'];
        this.imageURL = result['result']['imageUrl'];
        this.countSuccess += 1;
      },
      (error) => {
         this.countFails += 1;
      }
    )
  }
}
