import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


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
      const requestedUrl = '/legacy/?counter=' + this.counter + '#!/' + urlSegments.join('');
      console.log(requestedUrl);

      // Angular by default sanitises a URL, we need to bypass that so the full URL is rendered
      // NOTE: Need to look into security considerations of this
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(requestedUrl);
    });

    this.listenForFallbackRoutingEvents();
  }


  /*
   If the iframed-in app can't resolve a URL itself it will post a message to the parent
   iframe (this app). Listen to those messages and attempt to navigate to that URL.
   */
  listenForFallbackRoutingEvents() {
    // Create IE + others compatible event handler
    const eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    const eventer = window[eventMethod];
    const messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";


    eventer(messageEvent, (e) => {
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
