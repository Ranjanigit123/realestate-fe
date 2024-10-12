// components/add-property.component.ts
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyService } from '../services/property.service';

@Component({
    selector: 'app-add-property',
    template: `
    <div>
      <h2 style="color: #007BFF;">Add a New Property</h2>
      <form (submit)="addProperty()">
        <div class="form-row">
          <label
            >Title:
            <input
              type="text"
              [(ngModel)]="newProperty.title"
              name="title"
              required
            />
          </label>
          <label
            >Description:
            <input
              type="text"
              [(ngModel)]="newProperty.description"
              name="description"
              required
            />
          </label>
        </div>
        <div class="form-row">
          <label
            >Image URL:
            <input
              type="text"
              [(ngModel)]="newProperty.image"
              name="image"
              required
            />
          </label>
          <label
            >Contact:
            <input
              type="text"
              [(ngModel)]="newProperty.contact"
              name="contact"
              required
            />
          </label>
        </div>
        <div class="form-row">
          <label
            >Price:
            <input
              type="number"
              [(ngModel)]="newProperty.price"
              name="price"
              required
            />
          </label>
          <label
            >Area (sq/feet):
            <input
              type="number"
              [(ngModel)]="newProperty.area"
              name="area"
              required
            />
          </label>
        </div>
        <button type="submit" style="background-color: blue;">
          Add Property
        </button>
      </form>
    </div>
  `,
    styles: [],
})
export class AddPropertyComponent implements OnInit {
    newProperty: Property = {
        title: '',
        description: '',
        image: '',
        contact: '',
        price: 0,
        area: 0,
    };

    @Output() propertyAdded = new EventEmitter<Property>();

    constructor(private propertyService: PropertyService) { }

    ngOnInit(): void { }

    addProperty(): void {
        this.propertyService.addProperty(this.newProperty).subscribe(
            (res: Property) => {
                this.propertyAdded.emit(res);
                this.newProperty = {
                    title: '',
                    description: '',
                    image: '',
                    contact: '',
                    price: 0,
                    area: 0,
                };
            },
            (error) => console.error(error)
        );
    }
}
