//components/property-list.component.ts

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyService } from '../services/property.service';

@Component({
    selector: 'app-property-list',
    template: `
    <div class="property-list">
      <div *ngFor="let property of properties" class="property-card">
        <h3>{{ property.title }}</h3>
        <p>{{ property.description }}</p>
        <p>Price: {{ property.price }}</p>
        <p>Area: {{ property.area }} sq/ft</p>
        <img [src]="property.image" alt="{{ property.title }}" />
        <p>Contact: {{ property.contact }}</p>
        <button (click)="onDeleteProperty(property._id)">Delete</button>
      </div>
    </div>
  `,
    styles: [
        // Styles remain the same
    ],
})
export class PropertyListComponent implements OnInit {
    @Input() properties: Property[] = [];
    @Output() deleteProperty = new EventEmitter<string>();

    constructor(private propertyService: PropertyService) { }

    ngOnInit(): void { }

    onDeleteProperty(id: string | undefined): void {
        if (id) {
            this.propertyService.deleteProperty(id).subscribe(
                () => {
                    this.properties = this.properties.filter(
                        (property) => property._id !== id
                    );
                },
                (error) => console.error(error)
            );
        }
    }
}
