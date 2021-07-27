// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NgProgressModule } from 'ngx-progressbar';
// módulo de firebase:
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// módulo principal de material:
import { DemoMaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceProfessionalComponent } from './pages/experience-professional/experience-professional.component';
import { ProductdesignComponent } from './components/pages1/productdesign/productdesign.component';
import { GalleryrendersComponent } from './shared/components/galleryrenders/galleryrenders.component';

import { RendersService } from './shared/services/renders.service';
import { HeroComponent } from './shared/components/hero/hero.component';
import { SliderGalleryComponent } from './shared/components/slider-gallery/slider-gallery.component';
import { IieaGalleryComponent } from './shared/components/iiea-gallery/iiea-gallery.component';
import { SkillsComponent } from './shared/components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WebDevelopmentComponent,
    HomeComponent,
    ContactComponent,
    ExperienceProfessionalComponent,
    ProductdesignComponent,
    GalleryrendersComponent,
    HeroComponent,
    SliderGalleryComponent,
    IieaGalleryComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    LayoutModule,
    NgProgressModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
