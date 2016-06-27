import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FieldMetaData,SectionMetaData,FormMetaData } from './models';

@Injectable()
export class FieldControlService {
  constructor() { }

  toFormGroup(formSchema: FormMetaData ) {
    let group: any = {};

    formSchema.fields.forEach(field => {
      group[field.key] = field.required ? new FormControl('', Validators.required)
                                              : new FormControl('');
    });

    formSchema.sections.forEach(section => {
      if (section && section.fields)
      {
        section.fields.forEach(field => {
          group[field.key] = field.required ? new FormControl('', Validators.required)
                                                  : new FormControl('');
        });
      }
    })
    return new FormGroup(group);
  }
}