import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  private route = inject(ActivatedRoute);
  bookId: string | null = null;
  authorName: string | null = null;
  bookData: { name: string, authorName: string } | null = null;


  ngOnInit() {
    console.log('INIT BOOK COMPONENT');
    console.log('ROUTE', this.route);
    console.log('ID', this.route.snapshot.params['id']);
    this.bookId = this.route.snapshot.params['id'];
    this.authorName = this.route.snapshot.queryParams['authorName'];
    this.bookData = this.route.snapshot.data['book'];
  }

}
