import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/shared/converter.service';
import { TextWebModel } from 'src/app/shared/text-web-model.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-converter',
	templateUrl: './converter.component.html',
	styles: [
	]
})
export class ConverterComponent implements OnInit {
	inputText: TextWebModel;
	convertedText: TextWebModel;
	hasError: boolean;
	errorMessage: string;

	constructor(private service: ConverterService) { }

	ngOnInit(): void {
		this.resetForm();
	}

	resetForm(form?: NgForm) {
		if (form != null) {
			form.resetForm();
		}
		this.hasError = false;
		this.errorMessage = '';
		this.inputText = { content: '' }
		this.convertedText = { content: '' }
	}

	getXml(form: NgForm) {
		this.hasError = false;
		let convertResult = this.service.getXml(form.value);
		this.processConvertResult(convertResult);
	}

	getCsv(form: NgForm) {
		this.hasError = false;
		let convertResult = this.service.getCsv(form.value);
		this.processConvertResult(convertResult);
	}

	processConvertResult(convertResult: Observable<TextWebModel>) {
		convertResult.subscribe(
			res => {
				this.convertedText = res;
			},
			err => {
				this.hasError = true;
				this.errorMessage = err.error;
				this.convertedText = { content: '' }
			}
		)
	}
}
