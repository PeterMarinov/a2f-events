import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { ISession, restrictedWords } from '../shared/index';


@Component({
	selector: 'create-session',
	templateUrl: 'app/events/event-details/create-session.component.html',
	styles: [`
     em { float: right; color: #E05C65; padding-left: 10px;}
    .error input { background-color: #E3C3C5;}
    .error ::webkit-input-placeholder {color #999;}
    .error ::-moz-placeholder {color #999;}
    .error :-moz-input-placeholder {color #999;}
    .error :ms-input-placeholder {color #999;}
    `]
})
export class CreateSessionComponent implements OnInit {
	@Output()
	saveNewSession: EventEmitter<ISession> = new EventEmitter<ISession>();
	@Output()
	cancelAddSession: EventEmitter<any> = new EventEmitter();
	newSessionForm: FormGroup;
	name: FormControl;
	presenter: FormControl;
	duration: FormControl;
	level: FormControl;
	abstract: FormControl;


	ngOnInit(): void {
		this.name = new FormControl('', Validators.required);
		this.presenter = new FormControl('', Validators.required);
		this.duration = new FormControl('', Validators.required);
		this.level = new FormControl('', Validators.required);
		this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(["foo", "string"])]);

		this.newSessionForm = new FormGroup({
			name: this.name,
			presenter: this.presenter,
			duration: this.duration,
			level: this.level,
			abstract: this.abstract
		});
	}

	saveSession(formValues: any): void {
		let session: ISession = {
			id: undefined,
			name: formValues.name,
			presenter: formValues.presented,
			duration: +formValues.duration,
			level: formValues.level,
			abstract: formValues.abstract,
			voters: []
		}

		this.saveNewSession.emit(session);
	}

	cancel() : void {
		this.cancelAddSession.emit();
	}
}