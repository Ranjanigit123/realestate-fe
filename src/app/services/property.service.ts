//services/property.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
    providedIn: 'root',
})
export class PropertyService {
    private apiUrl = 'http://localhost:5000/api/properties';

    constructor(private http: HttpClient) { }

    getAllProperties():
        Observable<Property[]> {
        return this.http.get<Property[]>
            (this.apiUrl);
    }

    addProperty(property: Property):
        Observable<Property> {
        return this.http.post<Property>
            (this.apiUrl, property);
    }

    deleteProperty(id: string):
        Observable<any> {
        return this.http
            .delete(`${this.apiUrl}/${id}`);
    }

    addReview(id: string, review: any):
        Observable<Property> {
        return this.http.post<Property>
            (`${this.apiUrl}/${id}/review`, review);
    }

    getFilteredProperties(params: any):
        Observable<Property[]> {
        return this.http.get<Property[]>
            (this.apiUrl, { params: params });
    }
}
