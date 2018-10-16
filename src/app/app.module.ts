import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AboutComponent } from './pages/about/about.component';
import { CreateComponent } from './pages/create/create.component';

// services
import {UsersService} from './services/users.service';
import { UpdateComponent } from './pages/update/update.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { NewprojectComponent } from './pages/newproject/newproject.component';
import { ModifyprojectComponent } from './pages/modifyproject/modifyproject.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { ClientComponent } from './pages/client/client.component';
import { ModifyclientComponent } from './pages/modifyclient/modifyclient.component';
import { NewclientComponent } from './pages/newclient/newclient.component';
import { NewworkerComponent } from './pages/newworker/newworker.component';
import { WorkersComponent } from './pages/workers/workers.component';
import { ModifyworkerComponent } from './pages/modifyworker/modifyworker.component';
import { WorkerComponent } from './pages/worker/worker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    HomeComponent,
    UserComponent,
    AboutComponent,
    CreateComponent,
    UpdateComponent,
    ProjectsComponent,
    ProjectComponent,
    NewprojectComponent,
    ModifyprojectComponent,
    ClientsComponent,
    ClientComponent,
    ModifyclientComponent,
    NewclientComponent,
    NewworkerComponent,
    WorkersComponent,
    ModifyworkerComponent,
    WorkerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
      UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    // baseUrl = environment.apiUrl;
    // animal: string = environment.APIEndpoint;
}
