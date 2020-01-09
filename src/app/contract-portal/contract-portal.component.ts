import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contract-portal',
  templateUrl: './contract-portal.component.html',
  styleUrls: ['./contract-portal.component.scss']
})
export class ContractPortalComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone : ['', Validators.required],
      email : ['', Validators.required],
      jobtitle : ['', Validators.required],
      info:[`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
      dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
      animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
      nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
      omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
      voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
      voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`],
      yoe:[''],
      website:[''],
      location:[''],
      uploadFile:['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }

}
