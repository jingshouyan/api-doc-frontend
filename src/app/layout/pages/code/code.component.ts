import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  constructor(private apiService: ApiService) {
    console.log(apiService);
   }

  ngOnInit() {
    this.getCodes();
  }

  getCodes() {
    this.apiService.getCodes().subscribe(x => console.log(x));
  }

}
