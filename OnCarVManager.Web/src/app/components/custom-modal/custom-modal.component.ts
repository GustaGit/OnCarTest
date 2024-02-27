import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-custom-modal',
    templateUrl: './custom-modal.component.html',
    styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent   {

    show: boolean = false;

    toggle() {
        this.show = !this.show;
    }
    closeModal() {
        this.show = false;
    }
}