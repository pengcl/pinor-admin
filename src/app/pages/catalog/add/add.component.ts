import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, Form} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

import {NbAuthJWTToken} from "@nebular/auth";
import {JwtHelperService} from "@auth0/angular-jwt";
import {TypeInputDto, TypeOutputDto, TypeService} from "../../../@core/data/type.service";

import {Uploader, UploaderOptions} from "../../../@theme/components/uploader";

import {Catalog} from "../catalog.interface";
import {CatalogService} from "../catalog.service";

@Component({
  selector: 'app-catalog-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class CatalogAddComponent implements OnInit {

  catalogs: Catalog[];
  catalog: Catalog;

  types: TypeOutputDto[];
  adForm: FormGroup;
  catalogForm: FormGroup;

  uploader: Uploader = new Uploader(<UploaderOptions>{
    url: '/api/upload',
    headers: [
      {name: 'Authorization', value: 'Bearer ' + this.tokenSvc.tokenGetter()}
    ],
    params: {},
    auto: true,
    onUploadSuccess: (file, res) => {
      const _res = JSON.parse(res);
      console.log(file);
      this.adForm.get('file').setValue(_res.result);
    }
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tokenSvc: JwtHelperService,
    private typeSvc: TypeService,
    private catalogSvc: CatalogService) {
  }

  ngOnInit() {

    this.adForm = new FormGroup({
      name: new FormControl('', []),
      file: new FormControl('', [])
    });

    this.catalogForm = new FormGroup({
      name: new FormControl('', []),
      description: new FormControl('', []),
      parent: new FormControl('', []),
      pic: new FormControl('', []),
      type: new FormControl('', [])
    });

    this.typeSvc.get().subscribe(res => {
      this.types = res;
      console.log(this.types);
    });

    this.catalogSvc.get().subscribe(res => {
      this.catalogs = res;
      console.log(this.catalogs);
    });
  }

  save() {
    console.log(this.catalogForm.value);
    this.catalogSvc.create(this.catalogForm.value).subscribe(res => {
      console.log(res);
    })
    /*this.http.post('/ware', this.srv.getSaveData()).subscribe(() => {
        this.msg.success('Save Success!');
        this.cancel();
    });*/
  }

  cancel() {
    this.router.navigateByUrl('..');
  }
}
