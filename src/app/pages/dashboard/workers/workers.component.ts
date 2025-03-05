import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

//import { MatDialog } from '@angular/material/dialog';

//import { DialogWorkerComponent } from '../../components/modals/dialog-worker/dialog-worker.component';

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './workers.component.html',
  styleUrl: './workers.component.css',
})
export class WorkersComponent {
  //readonly dialog = inject(MatDialog);
  router = inject(Router)
  displayedColumns: string[] = ['id', 'identification', 'firstName'];

  protected listOfworkers = [
    { id: crypto.randomUUID(), identification: '12392342', firstName: 'Angel' },
    {
      id: crypto.randomUUID(),
      identification: '12392342',
      firstName: 'Campillo',
    },
  ];

  goMaintenance = () => {

    this.router.navigate(['/home/maintenance'], {state:{  idWorker:"00000000-0000-0000-0000-000000000000" }})

  };

  /*openDialog(): void {

    const dialogRef = this.dialog.open(DialogWorkerComponent, {
      data: {name: "test", animal: "bruno"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        
      }
    });

  }*/
}
