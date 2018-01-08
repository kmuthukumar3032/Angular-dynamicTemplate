import { Component, TemplateRef, ViewChild, Compiler, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DropDownListComponent, PopupEventArgs, SelectEventArgs } from '@syncfusion/ej2-ng-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data'
import { EmitType } from '@syncfusion/ej2-base';
import { Newcomponent } from './component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    entryComponents: [Newcomponent]
})
export class AppComponent {

    constructor(private componentResolver: ComponentFactoryResolver, protected viewContainerRef: ViewContainerRef, ) {
    }


    // @ViewChild('itemTemplate')
    // public DDlist: TemplateRef<any>;

    @ViewChild('ddl')
    public ddl: DropDownListComponent;

    ngAfterViewInit() {        
        let componentFactory = this.componentResolver.resolveComponentFactory(Newcomponent);
        const ref = this.viewContainerRef.createComponent(componentFactory);
        this.ddl.itemTemplate = ref.instance.itemTemplate;
    }

    public data: Object[] = [
        { Id: 'Game1', Game: 'American Football' },
        { Id: 'Game2', Game: 'Badminton' },
        { Id: 'Game3', Game: 'Basketball' },
        { Id: 'Game4', Game: 'Cricket' },
        { Id: 'Game5', Game: 'Football' },
        { Id: 'Game6', Game: 'Golf' },
        { Id: 'Game7', Game: 'Hockey' },
        { Id: 'Game8', Game: 'Rugby' },
        { Id: 'Game9', Game: 'Snooker' },
        { Id: 'Game10', Game: 'Tennis' }
    ];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'Game', value: 'Id' };
    //bind the Query instance to query property
    public query: Query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6);
        //set the placeholder to DropDownList input
        public text: string = "Select an employee";
        //sort the result items
        public sorting: string = 'Ascending';

    }

