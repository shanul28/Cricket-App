import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoritesComponent } from "./favorites/favorites.component";
import { HomeComponent } from "./home/home.component";
import { MatchesComponent } from "./matches/matches.component";
import { RecommendedComponent } from "./recommended/recommended.component";
import { RegisterComponent } from "./register/register.component";
import { ScoreComponent } from "./score/score.component";
import { SeriesComponent } from "./series/series.component";
import { AuthGuard } from "./services/auth.guard";
import { SignInComponent } from "./sign-in/sign-in.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { ViewPlayerComponent } from "./statistics/view-player/view-player.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes=[
  {
    path:'user-login',
    component: SignInComponent
  },
    {
      path:'',
      redirectTo: '/user-login',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent,
       canActivate: [AuthGuard]
    },
   
    {
      path:'user-register',
      component: RegisterComponent
    },
    {
      path:'user-profile',
      component: UserProfileComponent,
      canActivate: [AuthGuard]
    },
    {
      path:'favorites',
      component: FavoritesComponent,
    canActivate: [AuthGuard]
    },
    {
      path:'player-stats',
      component: StatisticsComponent,
     canActivate: [AuthGuard]
    },
    {
        path: 'player/:id',
        component: ViewPlayerComponent,
         canActivate: [AuthGuard]
    },
    {
      path:'score',
      component: ScoreComponent,
    },
    {
      path:'recommended',
      component:RecommendedComponent
    },
    {
    path:'matches',
    component: MatchesComponent
    },
    {
      path:'series',
      component:SeriesComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export class AppRouting{}