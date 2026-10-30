import { Component, input, output } from '@angular/core';
import { Character } from '../../interfaces/character-list-response';

@Component({
  imports: [],
  selector: 'app-character-item-component',
  styleUrl: './character-item-component.css',
  templateUrl: './character-item-component.html',
})
export class CharacterItemComponent {
  // STEP5: el componente hijo dibuja un personaje que recibe como input desde el padre
  character = input.required<Character>();

  // STEP6: output (evento custom) para avisar al padre de que se ha hecho clic
  // en el personaje. Emite el ID del personaje.
  characterClicked = output<number>();

  // STEP8: método que gestiona el clic del botón en el hijo
  // y emite el ID por el output.
  emitCharacterClicked() {
    this.characterClicked.emit(this.character().id);
  }
}
