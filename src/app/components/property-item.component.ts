//components/property-item.component.ts

import { Component, Input } from '@angular/core';
import { Property } from '../models/property.model';

@Component({
    selector: 'app-property-item',
    template: `
    <div>
      <h3>{{ property.title }}</h3>
      <p>{{ property.description }}</p>
      <img [src]="property.image" alt="{{ property.title }}" />
      <p>Contact: {{ property.contact }}</p>
    </div>
  `,
})
export class PropertyItemComponent {
    @Input() property!: Property;

    constructor() { }
}
