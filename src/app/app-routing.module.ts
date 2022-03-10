import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  { path: "", redirectTo: "price", pathMatch: "full"},
  { path: "price", component: PriceComponent },
  { path: "detail/:crypto", component: DetailComponent },
  { path: "error", component: ErrorComponent },
  { path: "**", redirectTo: "error", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
