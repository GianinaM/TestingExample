import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css']
})
export class CaesarComponent implements OnInit {

  outputValue = ''

  constructor(private router: Router, private homeService: HomeService) {
    this.outputValue = '300'
  }

  ngOnInit() {
    this.outputValue = '?x??'
  }

  redirectBackClicked(){
    this.router.navigate(['']);
  }

  caesarClicked(value, cipher){

    this.homeService.postCaesarResults(value, cipher).subscribe(
      data => {
        this.outputValue = data
      },
      error => {
        console.log(JSON.stringify(error));
      })
  }

}
