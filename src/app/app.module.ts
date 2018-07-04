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
    RouterModule.forRoot([
      {path:'**',redirectTo:'home'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
