import { Component, OnInit } from '@angular/core';
import { DosboxService } from './dosbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private _gameStarted = false;
  constructor(private dosboxService: DosboxService) { }
  public ngOnInit(): void {
  }

  public startDosbox() {
    this._gameStarted = true;
    const canvas = document.getElementById('jsdos') as HTMLCanvasElement;
    this.dosboxService.init(canvas);
  }

  public gameStarted(): boolean {
    return this._gameStarted;
  }

}
