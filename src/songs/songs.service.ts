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
    return this.songs;
  }
}
