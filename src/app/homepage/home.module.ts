import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DynamicModalComponent } from './components/dynamic-modal/dynamic-modal.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { NgClass, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DynamicBodyComponent } from './components/dynamic-body/dynamic-body.component';


@NgModule({
    imports: [NgIf,NgClass,MatTableModule],
    exports: [MainPageComponent],
    declarations: [MainPageComponent,DynamicBodyComponent,DynamicModalComponent,PokemonDetailComponent],
    providers: [],
})
export class HomeModule { }
