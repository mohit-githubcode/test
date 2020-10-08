import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path:'signup',
    loadChildren: () =>
    import('./Login/log.module').then(m => m.LogModule),
  },
 
  {
    path:'',
    loadChildren: () =>
    import('./shared/Shared.module').then(m => m.SharedModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
