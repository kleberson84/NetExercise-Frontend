import { Injectable } from '@angular/core';
import { TextWebModel } from './text-web-model.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ConverterService {
	readonly apiUrl = 'http://localhost:51115/api';

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(private http: HttpClient) { }

	convertToXml(formData: TextWebModel): Observable<TextWebModel> {
		return this.http.post<TextWebModel>(`${this.apiUrl}/convert/xml`, formData, this.httpOptions);
	}

	convertToCsv(formData: TextWebModel): Observable<TextWebModel> {
		return this.http.post<TextWebModel>(`${this.apiUrl}/convert/csv`, formData, this.httpOptions);
	}
}
