// Material Module example.
// All other Angular Material component imports here
// but the important ones are...
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [],
    imports: [
    // Other material imports removed for brevity,
    MatIconModule],
    exports: [
    // Other material exports removed for brevity,
    MatIconModule, MatIconRegistry
    ],
    entryComponents: [],
    providers: [MatIconRegistry]
})
export  class  MaterialModule  {}
