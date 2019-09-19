import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import {Routes, RouterModule} from "@angular/router"
import { UsersComponent } from './users/users.component';
import { ServersService } from './servers/servers.service';
import { UserComponent } from './users/user/user.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path:'users/:id/:name', component: UserComponent},
  {path:'servers', component: ServersComponent},
  {path:'servers/:id', component: ServerComponent},
  {path:'servers/:id/edit', component: EditServerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})


export class AppModule { }
