import { Component, Injectable, Input } from '@angular/core';
import { FieldMetaData, SectionMetaData, FormMetaData } from './models';
import { MetaFieldComponent } from './meta-field.component';
import { FieldSectionComponent } from './field-section.component';
import { FilterEmptyPipe } from '../tools/filterEmpty.pipe';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';


@Component({
    selector: 'meta-form',
    template: `
        this is a form
        <div class='meta-form'>
            <div class='meta-form-fields' *ngIf='metaData && metaData.fields && metaData.fields.length>0'>
                <meta-field *ngFor='let field of metaData.fields | filterEmpty' [field]='field' [model]='model' [form]='form' ></meta-field>
            </div>
            <div class='meta-form-sections' *ngIf='metaData && metaData.sections && metaData.sections.length>0'>
                <field-section *ngFor='let section of metaData.sections | filterEmpty' [section]='section' [model]='model' [form]='form'  ></field-section>
            </div>
        </div>

    `,
    directives: [MetaFieldComponent, FieldSectionComponent, REACTIVE_FORM_DIRECTIVES],
    pipes: [ FilterEmptyPipe ]
})
export class MetaFormComponent {
    @Input() metaData: FormMetaData;
    @Input() model: any;
    @Input() form: FormGroup;


}


// <field-section [section]='section' *ngIf='metaData.sections && metaData.sections.length>0' *ngFor='let section of metaData.sections'></field-section>