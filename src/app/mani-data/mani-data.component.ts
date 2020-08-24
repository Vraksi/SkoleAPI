import { Component, OnInit } from '@angular/core';
import { RandomNumberGeneratorService } from '../random-number-generator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mani-data',
  templateUrl: './mani-data.component.html',
  styleUrls: ['./mani-data.component.css']
})
export class ManiDataComponent implements OnInit {

  public randomNumber: Observable<number>;

  constructor(private randomNumberGenerator: RandomNumberGeneratorService) { }

  ngOnInit(): void {
  }

  public generate(): void{
    this.randomNumber = this.randomNumberGenerator.generate();
  }

}
