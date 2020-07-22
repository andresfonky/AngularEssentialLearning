import { Component, OnInit } from '@angular/core';
import { MediaItemService } from './../media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems: any;
  constructor(private mediaItemService: MediaItemService) { }

  ngOnInit(): void {
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem){
    this.mediaItemService.delete(mediaItem);
  }

}
