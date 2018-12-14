import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-stop-training',
    template: `<h2>Are you sure?</h2>
            <p>The training is already at {{data.progress}}%</p>
            <mat-dialog-actions>
                <button mat-button [mat-dialog-close]="true">Yes</button>
                <button mat-button [mat-dialog-close]="data.progress" (click)="onContinue()">No</button>
            </mat-dialog-actions>`
})
export class StopTrainingComponent {
    constructor(
        public dialogRef: MatDialogRef<StopTrainingComponent>,
        @Inject(MAT_DIALOG_DATA) public data) { 
            
        console.log(data);
        }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onContinue() {
        
    }
}
