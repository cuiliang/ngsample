import { Component,Injectable,Input,OnInit } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { FieldMetaData } from '../models';

@Component({
    selector:'text-field',
    template:`
    <div [formGroup]="form">
        <input [id]='field.key' [formControlName]='field.key' [(ngModel)]='model[field.key]' [placeholder]='field.placeholder'/>

    </div>
    `,
    directives:[ REACTIVE_FORM_DIRECTIVES]
})
@Injectable()
export class TextFieldComponent implements OnInit{
    @Input() form: FormGroup;
    @Input() field: FieldMetaData;
    @Input() model: any;

    ngOnInit(){
        //console.log('field:', this.field.key, ' control:', this.form.controls[this.field.key]);
    }
}


//formControlName='field.key'