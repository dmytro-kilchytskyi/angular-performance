import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css'],
})
export class WidgetComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
    this.user = this.userService.userEntity;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
