import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NormalEventsComponent } from "./normal-events/normal-events.component";
import { SpecialEventsComponent } from "./special-events/special-events.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuardService } from "./auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "/regularEvents", pathMatch: "full" },
  { path: "regularEvents", component: NormalEventsComponent },
  {
    path: "specialEvents",
    component: SpecialEventsComponent,
    canActivate: [AuthGuardService]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
