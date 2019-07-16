import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-test-scroller',
  templateUrl: './test-scroller.component.html',
  styleUrls: ['./test-scroller.component.css']
})
export class TestScrollerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( document ).ready( function() {
      
      var jbOffset = $( '.jbMenu' ).offset();

      $( window ).scroll( function() {
        if ( $( document ).scrollTop() > jbOffset.top ) {
          $( '.jbMenu' ).addClass( 'jbFixed' );
        }
        else {
          $( '.jbMenu' ).removeClass( 'jbFixed' );
        }
      });
    } );
  }


  
  
  
}
