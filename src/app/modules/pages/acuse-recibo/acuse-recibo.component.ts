import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from '@angular/forms';

import { Acuse } from '../../interfaces/acuse/acuse';

import { SocketioService } from '../../../services/socket/socketio.service';

@Component({
  selector: 'sc-acuse-recibo',
  templateUrl: './acuse-recibo.component.html',
  styleUrls: ['./acuse-recibo.component.scss']
})
export class AcuseReciboComponent implements OnInit {
  @ViewChild('myForm') formValues;

  acuseForm: FormGroup;
  IsAccepted:number=0;
  hide:boolean = true;
  textIcon:string = 'remove_red_eye';
  isDisabledBzg:boolean = false;

  acuse: Acuse;
  // acuseFormControl:[]<FormControl>;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.initAcuse();   
  }

  createForm() {
    // To initialize FormGroup  
    this.acuseForm = this.fb.group({
      tipo_ducumento: [null, Validators.compose([Validators.required])],
      numero_documento: new FormControl({value: 12333, disabled: true}),
      nombre_cliente: new FormControl({value: 'Pedro Perez', disabled: true}),
      telefono: [null, Validators.compose([Validators.required, Validators.pattern('^\s*([0-9][\s-]*){6,}\s*$'), Validators.minLength(7), Validators.maxLength(15)])],
      ciudad: [null, Validators.compose([Validators.required, Validators.maxLength(200)])],
      email: [null, Validators.compose([Validators.required,Validators.email])],
      tipo_escalamiento: new FormControl({value: 'Acuse de Recibido', disabled: true}),
      tipo_producto: [null, Validators.compose([Validators.required])],
      numero_producto: [null, Validators.compose([Validators.required, Validators.pattern('[0-9]{1,30}'), Validators.maxLength(30)])],
      medio_respuesta: [null, Validators.compose([Validators.required])],
      descripcion_caso: [null, Validators.compose([Validators.required, Validators.maxLength(600)])]
    });
  }

  initAcuse(){
    this.acuse = {
      tipo_ducumento: null,
      numero_documento: null,
      nombre_cliente: null,
      telefono: null,
      ciudad: null,
      email: null,
      tipo_escalamiento: null,
      tipo_producto: null,
      numero_producto: null,
      medio_respuesta: null,
      descripcion_caso: null
    };
  }
  
  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  {
    if(form){
      console.log(form);
    }
  }

  resetForm(){
    this.formValues.resetForm();
  }
  
  // ngOnInit(): void {
  //   this.socketService.setupSocketJoin();
  //   this.socketService.getUserJoined();
  //   setTimeout(() => {
  //     this.sendMessage('hola**')
  //     console.log('send message');
  //   }, 5000);
  // }

  // sendMessage(msg:string) {
  //   this.socketService.sendMessage(msg);
  // }

}
