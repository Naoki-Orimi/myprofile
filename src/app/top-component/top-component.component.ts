import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  // selector：<top-component><top-component>のコンポーネントを描画する設定。
  // ここではapp-rootに設定して
  selector: 'app-root',
  // standalone：他のコンポーネントに依存しない設定
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './top-component.component.html',
  styleUrl: './top-component.component.scss'
})
export class TopComponent {

}
