import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
 
  searchStr: string = '';
  minLength: number = 3;
  isLoaded: boolean = false;
  user: any

  constructor(private service: UsersService) { }
  
    handleGhange(){
      if (this.minLength <= this.searchStr.length){
        this.service.getUser(this.searchStr)
        .subscribe(user => {
          this.user = user;
          this.isLoaded = true
        })
      }
    }
  ngOnInit() {
  }

}
