import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConsultCPFComponent } from './components/consult-cpf/consult-cpf.component';
import { CardDataCoperativeComponent } from './components/card-data-coperative/card-data-coperative.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { NzMessageModule } from 'ng-zorro-antd/message';
@NgModule({
  declarations: [
    ConsultCPFComponent,
    CardDataCoperativeComponent,
    StepperComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NzStepsModule,
    NzPopoverModule,
    NzIconModule,
    NgxMaskModule.forChild(),
    NzMessageModule,
    FormsModule
  ],
  exports: [
    ConsultCPFComponent,
    CardDataCoperativeComponent,
    StepperComponent,
    FooterComponent
  ]
})
export class SharedModule { }
