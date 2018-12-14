import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  @Output() startTraining = new EventEmitter<void>();

  trainings = [
    { value: 1, name: "Swimming", icon: "accessibility"},
    { value: 2, name: "Soccer", icon: "stars"}
  ]

  constructor() { }

  ngOnInit() {
  }

  onStartExercise() {
    this.startTraining.emit();
  }

}
