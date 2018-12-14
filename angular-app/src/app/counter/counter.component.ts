import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter = 0;

  constructor() {
  }

  increment() {
    this.counter += 1;
    localStorage.setItem("counter", this.counter.toString())
  }

  reset() {
    this.counter = 0;
    localStorage.setItem("counter", this.counter.toString())
  }

  ngOnInit() {
    this.counter = parseInt(localStorage.getItem("counter")) || 0;

    window.addEventListener('storage', (e) => {
      if (e.key == "counter") {
        this.counter = parseInt(e.newValue);
        console.log("'counter' key updated to " + this.counter);
      }
    });
  }

}
