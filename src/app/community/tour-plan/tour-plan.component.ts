import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-tour-plan',
  templateUrl: './tour-plan.component.html',
  styleUrls: ['./tour-plan.component.css']
})
export class TourPlanComponent implements OnInit {
  public Editor = ClassicEditor;

  public onChange( { editor }: ChangeEvent ) {
      const data = editor.getData();

      console.log( data );
  }
  constructor() { }

  ngOnInit() {
  }

}
