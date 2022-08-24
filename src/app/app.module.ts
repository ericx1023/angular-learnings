import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemplateDrivenForm } from './template-driven-form';
import { ReactiveForm } from './reactive-form';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TemplateDrivenForm,
    ReactiveForm,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
