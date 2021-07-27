import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceProfessionalComponent } from './pages/experience-professional/experience-professional.component';
import { HomeComponent } from './pages/home/home.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { ProductdesignComponent } from './components/pages1/productdesign/productdesign.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'experience-pro', component:ExperienceProfessionalComponent},
  { path: 'web-development', component: WebDevelopmentComponent},
  { path: 'productdesign', component: ProductdesignComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
