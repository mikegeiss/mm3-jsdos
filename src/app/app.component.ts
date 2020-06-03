import { Component, OnInit } from '@angular/core';
import { DosboxService } from './dosbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private dosboxService: DosboxService) { }
  public ngOnInit(): void {
  }

  public startDosbox() {
    const canvas = document.getElementById('jsdos') as HTMLCanvasElement;
    this.dosboxService.init(canvas);
  }

}
