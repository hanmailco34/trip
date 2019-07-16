import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-tour-review',
  templateUrl: './tour-review.component.html',
  styleUrls: ['./tour-review.component.css']
})

export class TourReviewComponent implements OnInit {
  public Editor = ClassicEditor;

    public onChange( { editor }: ChangeEvent ) {
        const data = editor.getData();

        console.log( data );
    }
  constructor() { }

  ngOnInit() {
  }

}