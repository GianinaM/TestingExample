import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { CaesarComponent } from './caesar/caesar.component';
import { DecryptCaesarComponent } from './decrypt-caesar/decrypt-caesar.component';

const routes: Routes = [{ path: '', component: IndexComponent },
{path: "Home", component: HomeComponent},
{path: "caesar", component: CaesarComponent},
{path: "decrypt-caesar", component: DecryptCaesarComponent}];

export const HomeRoutes = RouterModule.forChild(routes);
