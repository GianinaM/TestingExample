import { Component, OnInit, OnChanges, Input, Output, SimpleChanges, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
 import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-caesar',
  templateUrl: './caesar.component.html',
  styleUrls: ['./caesar.component.css']
})
export class CaesarComponent implements OnInit, OnChanges {

  outputValue: string
  shiftNumber: string
  textInput: string

  constructor(private router: Router, private homeService: HomeService) {
    this.outputValue = '300'
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.textInput.currentValue != changes.textInput.previousValue) {
      console.log("there")
    }
  }

  ngOnInit() {
    this.outputValue = '?x??'
    this.shiftNumber = "3"
    this.textInput = ""
  }

  redirectBackClicked(){
    this.router.navigate(['']);
  }

  makeCaesar(){

    this.homeService.postCaesarResults(this.textInput, this.shiftNumber).subscribe(
      data => {
        this.outputValue = data
      },
      error => {
        console.log(JSON.stringify(error));
      })
  }

  decryptCaesar(){

    this.homeService.postCaesarDecryptResults(this.textInput, this.shiftNumber).subscribe(
      data => {
        this.outputValue = data
      },
      error => {
        console.log(JSON.stringify(error));
      })
  }

}
