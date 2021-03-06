import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-spin-custom-indicator',
  template: `
    <ng-template #indicatorTemplate><i class="anticon anticon-spin anticon-loading" style="font-size: 24px;"></i>
    </ng-template>
    <nz-spin [nzIndicator]="indicatorTemplate">
    </nz-spin>`
})
export class NzDemoSpinCustomIndicatorComponent {
}
