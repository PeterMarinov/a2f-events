import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';

import { JQ_TOKEN } from './index';


@Component({
    selector: 'simple-modal',
    templateUrl: '/app/common/simple-modal.component.html',
    styles: [`
        .modal-body { height: 550px; overflow-y: hidden;}
        .modal.fade { width: 400px; margin: auto; }
    `]
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;

    @ViewChild('modalContainer') containerEl: ElementRef;

    constructor( @Inject(JQ_TOKEN) private $: any) { }

    closeModal(): void {
        if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}