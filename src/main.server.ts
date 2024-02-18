import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { TopComponent } from './app/top-component/top-component.component';
import { config } from './app/app.config.server';

// ルートコンポーネントとアプリやサーバーに関するconfig
const bootstrap = () => bootstrapApplication(TopComponent, config);

export default bootstrap;
