import { Component, OnInit } from '@angular/core';
import { Cooperated } from 'src/app/shared/model/Cooperated.model';
import { cooperated } from './../../../data';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  cooperated?: Cooperated;

  constructor(private message: NzMessageService) { }

  ngOnInit(): void {

  }

  showDataCoperative(cpf?: string) {
    this.cooperated = cooperated.find(item => item.cpf === cpf);
    if (!this.cooperated) {
      this.showErrorMessage('CPF não encontrado!');
    }
  }

  private showErrorMessage(error: string) {
    this.message.create('error', error);
  }
}
