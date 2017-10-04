import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'app/modal/modal.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  constructor(private dialogService:DialogService) {}
  showConfirm() {
    let disposable = this.dialogService.addDialog(ModalComponent, {
      title:'Confirm title'},
       { backdropColor: 'rgba(0, 0, 0 , 0.8)'})
    }

  ngOnInit() {
  }

}
