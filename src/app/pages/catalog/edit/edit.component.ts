import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-catalog-edit',
    templateUrl: './edit.component.html',
})
export class CatalogEditComponent implements OnInit {

    catalog = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    save() {
        /*this.http.post('/ware').subscribe(() => {
            this.msg.success('Save Success!');
            this.cancel();
        });*/
    }

    cancel() {
        this.router.navigateByUrl('..');
    }
}
