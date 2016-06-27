import { Component, Injectable, Input } from '@angular/core';
import { FieldMetaData,SectionMetaData } from './models';
import { MetaFieldComponent } from './meta-field.component';
import { FilterEmptyPipe } from '../tools/filterEmpty.pipe';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
    selector:'field-section',
    pipes:[ FilterEmptyPipe ],
    directives:[ MetaFieldComponent, REACTIVE_FORM_DIRECTIVES ],
    template:`
        <hr>
        <div class='meta-field-section'>
            <div class='meta-field-section-header'>
                {{section.title}}
            </div>
            <div clas='meta-field-section-body'>
                <div *ngIf='section.fields && section.fields.length>0'>
                        <meta-field [field]='field' [form]='form' [model]='model'  *ngFor='let field of section.fields | filterEmpty' ></meta-field>
                </div>
            </div>
        </div>
    `
})
export class FieldSectionComponent{
    @Input() section: SectionMetaData;
    @Input() form: FormGroup;
    @Input() model: any;

}