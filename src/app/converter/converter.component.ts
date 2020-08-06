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

	constructor(private service: ConverterService) { }

	ngOnInit(): void {
		this.resetForm();
	}

	resetForm(form?: NgForm) {
		if (form != null) {
			form.resetForm();
		}
		this.inputText = { content: '' }
		this.convertedText = { content: '' }
	}

	convertToXml(form: NgForm) {
		let convertResult = this.service.convertToXml(form.value);
		this.processConvertResult(convertResult);
	}

	convertToCsv(form: NgForm) {
		let convertResult = this.service.convertToCsv(form.value);
		this.processConvertResult(convertResult);
	}

	processConvertResult(convertResult: Observable<TextWebModel>) {
		convertResult.subscribe(
			result => {
				this.convertedText = result;
			},
			error => {
				console.log(error);
			}
		)
	}
}
