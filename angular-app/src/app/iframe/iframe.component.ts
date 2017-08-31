import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

// Create IE + others compatible event handler
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";


@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {
  public url: SafeResourceUrl;
  private counter = 0;


  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private router: Router) {
    this.route.url.subscribe(urlSegments => {
      // Create a unique URL each time so the iframe will detect the change
      this.counter += 1;
      const requestedUrl = 'http://localhost:8080/legacy/?counter=' + this.counter + '#!/' + urlSegments.join('');
      console.log(requestedUrl);
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(requestedUrl);
    });


// Listen to message from child window
    eventer(messageEvent,  (e) => {
      if (e.data.navigateTo) {
        console.log('parent received message!:  ', e.data);
        let url = e.data.navigateTo;
        console.log(url);
        this.router.navigateByUrl(url);


      }
    }, false);

  }

  ngOnInit() {
  }
}
