/* --------------------------------------------------------------------------------
 * name:        Dynamic Load Modules based on user permissions
 * description: dynamically loads modules based on conditions
 * 
 * ------------------------------------------------------------------------------*/

/* ================================================================================
 * IMPORTANT
 * --------------------------------------------------------------------------------
 * The concept here would be that every angular component will belong to a parent
 * module i.e. a battery status grid component for instance would be part of the 
 * "battery" module in the "modules" folder
 * 
 * By doing this, we do not need to specify the component explicitly in the 
 * route entry (preventing us from importing it here - which would mean pulling it
 * down pre-maturely). Instead, we will predominantly use the "loadChildren" property
 * to "lazy load" all required component dependencies on the route "just in time"
 * or on demand
 * 
 * (Assumption):
 * -------------
 * Each module dependency would be responsible for figuring
 * out what the user can see based on their permissions and role and what routes
 * get loaded
 * ============================================================================= */

import { Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Enumerations } from './enumerations';

/*this class will load our modules for us. it should probably use some sort of 
 "permissions service" as dependency in it's parametarized constructor */
export class RouteGenerator {
    constructor() {
    }

    private checkUserAccess(module_type?: string) {
        return true;
    }

    private getModuleRouteInfo(module_type?: string) {
        let route: any;

        switch (module_type) {
            case Enumerations.Modules.Dashboard:
                route = { path: '', loadChildren: 'app/pages/dashboard/dashboard.module' };
                break;
        }

       return route;
    }

    public generateRoutes() {
        let app_routes: Routes = [];

        //Dashboard
        app_routes.push(this.getModuleRouteInfo(Enumerations.Modules.Dashboard));

        //Misc routes
        app_routes.push({ path: '', redirectTo: 'dashboard', pathMatch:'full' });
        
        return app_routes;
    }
}
