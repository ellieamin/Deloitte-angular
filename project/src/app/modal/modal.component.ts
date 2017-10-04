import { Component, OnInit, HostListener } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

@HostListener('wheel', ['$event'])
 handleWheelEvent(event) {
   event.preventDefault();
 }
  title= 'hello';
  message= 'bye';
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
}
