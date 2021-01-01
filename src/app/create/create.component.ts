import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {AddUser} from '../store/actions/user.actions';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../models/User.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private readonly store: Store) {
  }

  registrationForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl()
  });

  ngOnInit() {
  }

  registerUser = () => {
    this.store.dispatch(new AddUser(this.registrationForm.value));
  }
}
