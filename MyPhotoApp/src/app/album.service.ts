import { Injectable } from '@angular/core';
import { Album } from './Album';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  private albums: Album[] = [{

    id: "1",
    title: "Album 1",
    coverPhotoUrl: "https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg",
    creationDate: "",
    createdBy: "",

  },
  {
  id: "2",
  title: "Album 2",
  coverPhotoUrl: "https://scx2.b-cdn.net/gfx/news/2016/birdflustrai.jpg",
  creationDate: "",
  createdBy: "",

  },
  {
    id: "3",
    title: "Album 3",
    coverPhotoUrl: "http://images5.fanpop.com/image/photos/24900000/kanzeon-cats-24910376-800-600.jpg",
    creationDate: "",
    createdBy: "",
  
  },
  ];

  public getAllAlbums() {

    var idToken = localStorage.getItem('idToken');
    console.log('Id token inside Album service', idToken);

    const headers = {
      'idToken': idToken
    };


    return this.http.get("http://ec2-54-218-206-93.us-west-2.compute.amazonaws.com:7000/api/albums",{headers})

    
  }

  public getAlbumDetails(id) {
    return this.albums[id-1];
  }
}
