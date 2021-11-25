import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { RegisterPizzaComponent } from './admin/register-pizza/register-pizza.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterOrderComponent } from './admin/register-order/register-order.component';
import { ListOrderComponent } from './admin/list-order/list-order.component';
import { ListPizzaComponent } from './admin/list-pizza/list-pizza.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { UpdateOrderComponent } from './admin/update-order/update-order.component';
import { UpdatePizzaComponent } from './admin/update-pizza/update-pizza.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';

import {OrderService} from './services/order.service';
import {PizzaService} from './services/pizza.service';
import {RoleService} from './services/role.service';
import {UserService} from './services/user.service';
import {TokenInterceptorService} from './services/token-interceptor.service';

import {AuthGuard} from './guard/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule,ReactiveFormsModule}from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RegisterUserComponent,
    RegisterPizzaComponent,
    RegisterRoleComponent,
    RegisterOrderComponent,
    ListOrderComponent,
    ListPizzaComponent,
    ListRoleComponent,
    ListUserComponent,
    UpdateOrderComponent,
    UpdatePizzaComponent,
    UpdateRoleComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [OrderService,PizzaService,RoleService,UserService,TokenInterceptorService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
