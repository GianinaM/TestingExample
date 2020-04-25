import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-decrypt-caesar',
  templateUrl: './decrypt-caesar.component.html',
  styleUrls: ['./decrypt-caesar.component.css']
})
export class DecryptCaesarComponent implements OnInit {

  cipherText: string;
  shiftNumber: string;
  outputValue: string;

  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.outputValue = ""
    this.shiftNumber = "3"
    this.cipherText = ""
  }

  redirectBackClicked(){
    this.router.navigate(['']);
  }

  decryptCaesar(){

    this.homeService.postCaesarDecryptResults(this.cipherText, this.shiftNumber).subscribe(
      data => {
        this.outputValue = data
      },
      error => {
        console.log(JSON.stringify(error));
      })
  }

}
