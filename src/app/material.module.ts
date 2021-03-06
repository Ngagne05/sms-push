import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, DateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatExpansionModule,
        MatListModule,
        MatTabsModule,
        MatTooltipModule,
        MatMenuModule,
        MatDialogModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatCardModule,
        MatRadioModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatExpansionModule,
        MatListModule,
        MatTabsModule,
        MatTooltipModule,
        MatMenuModule,
        MatDialogModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatCardModule,
        MatRadioModule

    ]
})

export class MaterialAppModule { }