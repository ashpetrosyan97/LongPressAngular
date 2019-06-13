import {NgModule} from '@angular/core';
import {MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatMenuModule, MatSelectModule,} from '@angular/material';
import {MatRippleModule} from '@angular/material';
import {ObserversModule} from '@angular/cdk/observers';


@NgModule({
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatRippleModule,
    MatSelectModule,
    ObserversModule,
  ]
})
export class MaterialModule {
}
