import { Component, ViewChild, TemplateRef } from '@angular/core';
@Component({
selector:'new',
template:"<ng-template #itemTemplate let-data><span class='name'> {{data.Game}}</span><span class ='city'>{{data.Id}}</span></ng-template>"
})
export class Newcomponent{

    @ViewChild('itemTemplate')
    public itemTemplate: TemplateRef<any>;


}
