import { ChangeDetectionStrategy, Component, ContentChild, TemplateRef, input } from '@angular/core';
import { NgIf, NgStyle, NgFor, NgTemplateOutlet, SlicePipe } from '@angular/common';

@Component({
    selector: 'app-data-grid',
    template: `
    <div *ngIf="!data()?.length">you should pass data() any[]</div>
    <div *ngIf="!tpl">you should pass ng-template</div>
    <div class="box">
      <table *ngIf="data()?.length" class="my-table">
        <thead>
            <tr>
                <th *ngFor="let head of headers()">
                    {{head}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let row of data() | slice:currentPage * pageSize:currentPage * pageSize + pageSize; let idx=index">
                <ng-container
                  [ngTemplateOutlet]="tpl"
                  [ngTemplateOutletContext]="{$implicit: row, nr: idx+1}"
        ></ng-container>
            </tr>
        </tbody>
      </table>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, NgStyle, NgFor, NgTemplateOutlet, SlicePipe]
})
export class DataGridComponent {
    data = input<any[] | null>();
    headers = input<string[]>();
    @ContentChild(TemplateRef) tpl!: TemplateRef<any>;
    public pageSize = 5;
    public currentPage = 0;

    constructor() { }

    handlePage(e: any) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
    }
}
