import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() category: string = '';
  @Input() area: string = '';
  @Input() id: string = '';

  @Output() cardClick = new EventEmitter<string>();

  onCardClick() {
    this.cardClick.emit(this.id);
  }
}
