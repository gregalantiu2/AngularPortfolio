import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { DogsComponent } from './dogs/dogs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { DogsService } from './models/dogs.service';
import { HttpClientModule } from '@angular/common/http';
import { DogcarouselComponent } from './dogcarousel/dogcarousel.component';
import { AboutMeadminComponent } from './admin/about-meadmin/about-meadmin.component';
import { AdminResumeComponent } from './admin/admin-resume/admin-resume.component';
import { AdminProjectComponent } from './admin/admin-project/admin-project.component';
import { AboutmeService } from './models/aboutme.service';
import { EditorModule } from '@tinymce/tinymce-angular';



@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    AboutComponent,
    ProjectsComponent,
    DogsComponent,
    SidebarComponent,
    AdminComponent,
    DogcarouselComponent,
    AboutMeadminComponent,
    AdminResumeComponent,
    AdminProjectComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    EditorModule
  ],
  providers: [DogsService,AboutmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
