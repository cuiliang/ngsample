import { Component, Injectable, Input } from '@angular/core';
import { FieldMetaData } from './models';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { TextFieldComponent } from './fields/text.field';


@Component({
    selector:'meta-field',
    directives:[ REACTIVE_FORM_DIRECTIVES, TextFieldComponent ],
    template:`
        <div class='meta-field' *ngIf="canShow">
            <div class='meta-field-label'>
                {{field.label}}
            </div>
            <div class='meta-field-body'>
                <div [ngSwitch]='field.controlType'>
                    <text-field *ngSwitchCase="'text'" [field]='field' [form]='form' [model]='model'></text-field>
                </div>
                <div class='help-block' *ngIf='field.help' [innerHtml]='field.help'></div>
            </div>
        </div>
    `
})
export class MetaFieldComponent{
    @Input() field: FieldMetaData;
    @Input() form: FormGroup;
    @Input() model: any;


    ngOnInit(){
        //console.log('field:', this.field.key, ' control:', this.form.controls[this.field.key]);
    }

    get isValid(){
        return this.form.controls[this.field.key].valid;
    }


    /**
     * 本字段是否可见
     */
    get canShow(): boolean{
        if (!this.field.ngIfFunc)
        {
            return true;
        }
        return this.field.ngIfFunc(this.model, this.field);
    }

}