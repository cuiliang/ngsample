
export interface NgIfCallback{
    (model: any, field?: FieldMetaData): boolean
}

/** 描述一个字段 */
export class FieldMetaData{
    key: string;    //字段键值
    label: string;  //字段标题
    controlType: string; //输入方式类型
    required: boolean; //是否必填
    readonly: boolean; //是否只读
    disabled: boolean; //是否禁用
    help: string;   //提示文字
    placeholder: string; //显示在输入框里的
    children: Array<FieldMetaData>; //子字段
    ngIfFunc: NgIfCallback; //用于是否显示字段的函数  Function | {(field, model) : boolean}
    ngIfExpression: string; //判断

    constructor(options:{
      key?:string,
      label?:string,
      required?:boolean,
      readonly?:boolean,
      disabled?:boolean,
      order?:number,
      controlType?:string,
      help?:string,
      placeholder?:string,
      children?:Array<FieldMetaData>,
      ngIfFunc?:NgIfCallback,
      ngIfExpression?:string
    } = {}){
    this.key = options.key || '';
    this.label = options.label || '';
    this.controlType = options.controlType || '';
    this.required = !!options.required;
    this.readonly = !!options.readonly;
    this.disabled = !!options.disabled;
    this.help = options.help || '';
    this.placeholder = options.placeholder || '';
    this.children = options.children;
    this.ngIfFunc = options.ngIfFunc;
    this.ngIfExpression = options.ngIfExpression;

    if (this.ngIfExpression && !this.ngIfFunc)
    {
        this.ngIfFunc = <NgIfCallback> new Function("model", "field", this.ngIfExpression);
    }
  }

}

export class SectionMetaData{
    title:string;
    fields: Array<FieldMetaData>;
}

export class FormMetaData{
    title: string;
    fields: Array<FieldMetaData>;
    sections: Array<SectionMetaData>;
}
