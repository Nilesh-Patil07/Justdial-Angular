import { Component, OnInit } from '@angular/core';
import { ElementConfigService } from '../element-config.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  constructor(private data:ElementConfigService) { 
    
  }

  ngOnInit(): void {
  }

}
