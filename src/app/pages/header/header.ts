import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
 mode = signal('Dark Mode');
 theme = signal('light');

 
  

  toggleMode() {
    this.mode.update((current)=> current === 'Light Mode' ? 'Dark Mode' : 'Light Mode');
    this.theme.update((current)=> current === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark');
    console.log(document.body.classList);
    

    
  }
}
