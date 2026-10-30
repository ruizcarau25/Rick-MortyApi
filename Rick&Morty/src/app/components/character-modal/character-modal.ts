import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from '../../interfaces/character-list-response';

@Component({
  imports: [],
  selector: 'app-character-modal',
  styleUrl: './character-modal.css',
  templateUrl: './character-modal.html',
})
export class CharacterModal {
  // STEP11: componente del modal. NgbActiveModal permite cerrarlo desde dentro.
  activeModal = inject(NgbActiveModal);

  // Parámetro de entrada: el padre lo rellena con modalRef.componentInstance.character
  @Input() character: Character | undefined;
}
