import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeUtil, FileType } from 'utils';

export const mef = new MfeUtil();

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'restaurant',
    loadChildren: () => mef.loadRemoteFile({
      remoteName: 'restaurant',
      remoteEntry: 'http://localhost:4201/remoteRestaurant.js',
      exposedFile: 'RestaurantModule',
      exposeFileType: FileType.Module
    }).then(m => m.RestaurantModule)
  },
  {
    path: 'orders',
    loadChildren: () => mef.loadRemoteFile({
      remoteName: 'orders',
      remoteEntry: 'http://localhost:4202/remoteOrders.js',
      exposedFile: 'OrdersModule',
      exposeFileType: FileType.Module
    }).then(m => m.OrdersModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
