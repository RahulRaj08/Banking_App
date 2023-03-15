import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent {

  @Input() item:String|undefined  //binding of property, @input is used to get data into it (parent-child)

  @Output() onCancel = new EventEmitter() // event creation, @Output() is used to send data from child to parent
  @Output() onDelete = new EventEmitter() // event created



  cancel(){

    this.onCancel.emit() //to start an event

  }

  delete(){
    this.onDelete.emit(this.item)
  }

}
