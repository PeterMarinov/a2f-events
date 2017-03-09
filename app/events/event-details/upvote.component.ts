import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                    <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ["./app/events/event-details/upvote.component.ts"]
}) export class UpvoteComponent {
    @Input() count: number;
    @Input() set voted(val: boolean) {
        this.iconColor = val ? '#63a35c' : "white";
    }
    @Output() vote = new EventEmitter();
    iconColor: string = "#63a35c";

    onClick(): void {
        this.vote.emit({});
    }
}