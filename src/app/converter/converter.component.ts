import { Component, OnInit } from '@angular/core';
import { TextWebModel } from 'src/app/shared/text-web-model.model';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-converter',
	templateUrl: './converter.component.html',
	styles: [
	]
})
export class ConverterComponent implements OnInit {
	inputText: TextWebModel;

	constructor() { }

	ngOnInit(): void {
		this.resetForm();
	}

	resetForm(form?: NgForm) {
		if (form != null) {
			form.resetForm();
		}
		this.inputText = { content: '' }
	}
}
