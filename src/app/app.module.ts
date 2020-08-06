import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { ConverterService } from './shared/converter.service';

@NgModule({
	declarations: [
		AppComponent,
		ConverterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [ConverterService],
	bootstrap: [AppComponent]
})
export class AppModule { }
