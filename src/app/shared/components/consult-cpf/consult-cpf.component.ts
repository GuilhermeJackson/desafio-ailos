import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cooperated } from '../../model/Cooperated.model';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-consult-cpf',
  templateUrl: './consult-cpf.component.html',
  styleUrls: ['./consult-cpf.component.less']
})
export class ConsultCPFComponent implements OnInit {
  cpf?: number;
  cooperated?: Cooperated;
  @Output() cpfCoperated = new EventEmitter();

  constructor(private message: NzMessageService) { }

  ngOnInit(): void {

  }

  showDataCoperative() {
    this.cpfCoperated.emit(this.cpf)
    this.messageError(this.cpf);
  }

  messageError(cpf?: number) {
    if (cpf?.toString().length !== 14)
      this.message.create('error', 'Digite um CPF válido!')
  }
}
