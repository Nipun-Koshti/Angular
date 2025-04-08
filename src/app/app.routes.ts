import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VariableComponent } from './component/variable/variable.component';
import { EtaComponent } from './eta/eta.component';
import { AdditionComponent } from './addition/addition.component';
import { InvoiceComponent } from './invoice/invoice.component';

export const routes: Routes = [
    {
        path:'varibles',
        component:VariableComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'api-exp',
        component:EtaComponent
    },
    {
        path:'addition',
        component:AdditionComponent
    },
    {
        path:'download',
        component:InvoiceComponent
    }


];
