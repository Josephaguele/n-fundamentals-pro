import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  //local db
  //local array
  private readonly songs = [];

  create(song) {
    // save the song in the db
    this.songs.push(song);
    return this.songs;
  }

  // fetch the song in the database.
  findAll() {
    // fetch the songs from the db
    // Errors come while fetching the data from DB
    //throw new Error('Error in DB while fetching record');
    return this.songs;
  }
}
