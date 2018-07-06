import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ViewerModule } from './viewer/viewer.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { QueryModule } from './query/query.module';
import { HeaderFooterModule} from './header-footer/header-footer.module';
import { HttpClientModule} from '@angular/common/http';
import { RecordService } from './services/record.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewerModule,
    SharedModule,
    HomeModule,
    ProfileModule,
    QueryModule,
    HeaderFooterModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'**',redirectTo:'home'}
    ])
  ],
  providers: [
    RecordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
