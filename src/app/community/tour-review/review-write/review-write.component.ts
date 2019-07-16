import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-review-write',
  templateUrl: './review-write.component.html',
  styleUrls: ['./review-write.component.css']
})
export class ReviewWriteComponent implements OnInit {
  public Editor = ClassicEditor;

  public onChange( { editor }: ChangeEvent ) {
      const data = editor.getData();

      console.log( data );
  }
  
  constructor() { }

  ngOnInit() {
  }

}
