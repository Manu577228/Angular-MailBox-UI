import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardComponent } from '../../shared/component/card/card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
