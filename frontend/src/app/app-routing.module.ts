import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './admin/list-order/list-order.component';
import { ListPizzaComponent } from './admin/list-pizza/list-pizza.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterOrderComponent } from './admin/register-order/register-order.component';
import { RegisterPizzaComponent } from './admin/register-pizza/register-pizza.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateOrderComponent } from './admin/update-order/update-order.component';
import { UpdatePizzaComponent } from './admin/update-pizza/update-pizza.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'list-order',component:ListOrderComponent},
  {path:'list-pizza',component:ListPizzaComponent},
  {path:'list-role',component:ListRoleComponent},
  {path:'list-user',component:ListUserComponent},
  {path:'register-order',component:RegisterOrderComponent},
  {path:'register-pizza',component:RegisterPizzaComponent},
  {path:'register-role',component:RegisterRoleComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'update-order',component:UpdateOrderComponent},
  {path:'update-pizza',component:UpdatePizzaComponent},
  {path:'update-role',component:UpdateRoleComponent},
  {path:'update-user',component:UpdateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
