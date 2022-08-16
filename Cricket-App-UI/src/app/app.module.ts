import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewPlayerComponent } from './statistics/view-player/view-player.component'
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { LoginService } from './services/login.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchFilterPipe } from './services/search-filter.pipe';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RecommendedComponent } from './recommended/recommended.component';
import { ScoreComponent } from './score/score.component';
import { SearchFilterPipe2 } from './score/search-filter2.pipe';
import { MatchesComponent } from './matches/matches.component';
import { SeriesComponent } from './series/series.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    RegisterComponent,
    FavoritesComponent,
    StatisticsComponent,
    ViewPlayerComponent,
    HomeComponent,
    SearchFilterPipe,
    UserProfileComponent,
    RecommendedComponent,
    ScoreComponent,
    SearchFilterPipe2,
    MatchesComponent,
    SeriesComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    
  ],
  providers: [LoginService, AuthGuard, [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
