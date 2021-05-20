import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {User} from '../models/User.model';
import {Observable} from 'rxjs';
import {UserState} from '../store/state/user.state';

@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

    // users$: User[];

    @Select(UserState.getUsers) users$: Observable<User>;

    constructor(private readonly store: Store) {
        // this.store.select(UserState.getUsers).subscribe(response => this.users$ = response);
    }

    ngOnInit() {
    }

}
