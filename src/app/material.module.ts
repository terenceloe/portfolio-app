import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';



@NgModule({
    imports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatDialogModule, MatCardModule],
    exports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatDialogModule, MatCardModule],
})

export class MaterialModule { }