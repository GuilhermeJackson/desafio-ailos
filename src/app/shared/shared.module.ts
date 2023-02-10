import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConsultCPFComponent } from './components/consult-cpf/consult-cpf.component';
import { CardDataCoperativeComponent } from './components/card-data-coperative/card-data-coperative.component';
import { StepperComponent } from './components/stepper/stepper.component';
import {StepsModule} from 'primeng/steps';

@NgModule({
  declarations: [
    ConsultCPFComponent,
    CardDataCoperativeComponent,
    StepperComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    StepsModule
  ],
  exports: [
    ConsultCPFComponent,
    CardDataCoperativeComponent,
    StepperComponent
  ]
})
export class SharedModule { }
