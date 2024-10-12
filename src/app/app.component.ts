// app.component.ts

import { Component, OnInit } from '@angular/core';
import { Property, Review } from './models/property.model'; // Import Review
import { PropertyService } from './services/property.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    properties: Property[] = [];
    filteredProperties: Property[] = [];
    filterOptions = { sortBy: '', sortOrder: 'asc' };

    constructor(private propertyService: PropertyService) { }

    ngOnInit(): void {
        this.getAllProperties();
    }

    getAllProperties(): void {
        this.propertyService.getAllProperties().subscribe(
            (res: Property[]) => {
                this.properties = res;
                this.applyFilter();
            },
            (error) => console.error(error)
        );
    }

    onPropertyAdded(property: Property): void {
        this.properties.push(property);
        this.applyFilter();
    }

    onDeleteProperty(id: string): void {
        this.properties = this.properties
            .filter((property) => property._id !== id);
        this.applyFilter();
    }

    applyFilter(): void {
        this.filteredProperties = this.properties.slice();
        if (this.filterOptions.sortBy) {
            this.filteredProperties.sort((a, b) => {
                if (this.filterOptions.sortBy === 'price') {
                    return this.filterOptions.sortOrder === 'asc'
                        ? a.price - b.price
                        : b.price - a.price;
                } else if (this.filterOptions.sortBy === 'area') {
                    return this.filterOptions.sortOrder === 'asc'
                        ? a.area - b.area
                        : b.area - a.area;
                } else {
                    return 0;
                }
            });
        }
    }
}
