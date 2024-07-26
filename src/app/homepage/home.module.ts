import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DynamicBodyComponent } from './components/dynamic-body/dynamic-body.component';
import { DynamicModalComponent } from './components/dynamic-modal/dynamic-modal.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { NgClass, NgIf } from '@angular/common';


@NgModule({
    imports: [NgIf,NgClass],
    exports: [MainPageComponent],
    declarations: [MainPageComponent,DynamicBodyComponent,DynamicModalComponent,PokemonDetailComponent],
    providers: [],
})
export class HomeModule { }
