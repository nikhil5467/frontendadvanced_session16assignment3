import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {Modal} from '../my-modal/myModal.component';
const template: string = require('./trees.html');


@Component({
    selector: 'custom-modal',
    template,
    directives: [ROUTER_DIRECTIVES, Modal]
})

export class CustomModalComponent implements AfterViewInit, OnDestroy {
    isModalOpen: boolean;

    errorMessage: any;

  


    constructor() {
        this.isModalOpen = false;  
    }

   showDeleteTreePopup(modal: Modal) {
       modal.show()
    }

    
    deleteSelectedTree(modal: Modal) {
        modal.hide();
        
    }
}