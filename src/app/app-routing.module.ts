import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivateChildGuard } from './guard/activate-child.guard';
import { ActivateGuard } from './guard/activate.guard';
import { RoleGuard } from './guard/role.guard';
import { HomeComponent } from './home/home.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
 
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'news',
    component: NewsComponent,
    canActivate: [ActivateGuard,RoleGuard],
    // canActivateChild: [ActivateChildGuard],
    data:{
      accessRole: ['Admin']
    },
    children:[
      {
        path: 'detail/:id',
        component: NewsDetailComponent
      }

    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  { 
    path: '**',
    redirectTo: '/not-found'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                   HomeComponent,
                                   AboutComponent,
                                   NewsComponent
                                  ]