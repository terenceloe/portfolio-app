import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatDialogModule],
    exports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatDialogModule],
})

export class MaterialModule {}