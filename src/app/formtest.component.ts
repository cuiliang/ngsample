import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MetaFormComponent } from './shared/meta-form/meta-form.component';
import { FieldMetaData, SectionMetaData, FormMetaData } from './shared/meta-form/models';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { FieldControlService } from './shared/meta-form/field-control.service';


@Component({
    selector:'form-test',
    template:`
    <h1>TestForm</h1>
    
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <meta-form [metaData]='formSchema' [form]='form' [model]='item'></meta-form>
        <button type="submit" [disabled]="!form.valid">Save</button>
    </form>
    <hr>
    {{item | json}}

    `,
    directives: [MetaFormComponent, REACTIVE_FORM_DIRECTIVES,ROUTER_DIRECTIVES],
    providers:[ FieldControlService]
})
export class FormtestComponent implements OnInit{
    formSchema: FormMetaData = new FormMetaData();
    item: any = {};
    form: FormGroup;


    constructor(private controlService: FieldControlService){
    }

    ngOnInit(){
        this.formSchema.title = 'Test Form';
        this.formSchema.fields = [
            new FieldMetaData({label:'name',key:'name',controlType:'text', ngIfExpression: "return model.description !=='aaa';", help:'please input your name <b> some demo bold text.</b>', placeholder:'name'}),
            new FieldMetaData({label:'description',key:'description',controlType:'text'})
        ];
        this.formSchema.sections = [
            // {
            //      title : '基本信息',
            //      fields:  [
            //         new FieldMetaData({label:'name',key:'name1',controlType:'text'}),
            //         new FieldMetaData({label:'description',key:'description1',controlType:'text'}),
            //     ]
            // }
            // ,
            // {
            //      title : '段落2',
            //      fields:  [
            //         new FieldMetaData({label:'name',key:'name2',controlType:'text'}),
            //         new FieldMetaData({label:'description',key:'description2',controlType:'text'}),
            //     ]
            // }
        ];

        for(let i=0; i<1000; i++)
        {
            this.formSchema.fields.push(new FieldMetaData({label:'name_' + i,key:'name_' + i,controlType:'text', help:'please input your name <b> some demo bold text.</b>', placeholder:'姓名'}))
        }


        this.form = this.controlService.toFormGroup(this.formSchema);
        console.log('formGroup:', this.form);
    }

    onSubmit(){
        console.log(this.form.value);
    }
}