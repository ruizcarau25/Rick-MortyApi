import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../interfaces/character-list-response';
import { CharacterItemComponent } from '../character-item-component/character-item-component';
import { CharacterModal } from '../character-modal/character-modal';

// STEP2: generación de componentes: ng g c components/character-list-component
@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent implements OnInit {
  characterService = inject(CharacterService);
  characterList = signal<Character[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.characterService.getAll().subscribe((resp) => {
      this.characterList.set(resp.results);
    });
  }

  // STEP10: recibo el ID que me envía por el output el componente hijo
  // y abro un modal con la información de ese personaje.
  openCharacterModal(id: number) {
    this.characterService.getOne(id).subscribe((resp) => {
      // STEP12: abro el modal y le paso la información del personaje recibida de la API
      const modalRef = this.modalService.open(CharacterModal);
      modalRef.componentInstance.character = resp;
    });
  }
}
