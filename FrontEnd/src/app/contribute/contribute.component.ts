import { Component, OnInit } from '@angular/core';
import {OrganizationService} from "../services/organization.service";
import {Organization} from "../models/Organization";


@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  organizations: Organization[];

  constructor(private organizationService: OrganizationService) {
  }

  ngOnInit() {
    this.organizationService.getAll().subscribe(data => {
      this.organizations = data;
    },
      err =>{
      console.log(err);
      });
  }

}
