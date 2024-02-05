package com.lookify.lookify.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.lookify.lookify.models.Song;
import com.lookify.lookify.repositories.SongRepo;

@Service
public class SongService {
	private final SongRepo songRepo;
	
	public SongService(SongRepo songRepo) {
		this.songRepo = songRepo;
	}
	
	public List<Song> allSongs(){
		return songRepo.findAll();
	}
	
	public void addSong(Song song) {
		songRepo.save(song);
	}
	
	public Song findSong(Long id) {
		Optional<Song> optionalSong = songRepo.findById(id);
        return optionalSong.orElse(null);
	}

	public List<Song> searchByArtist(String artist) {
		return songRepo.findByArtistContaining(artist);
	}


	public List<Song> topTen() {
		return songRepo.getTopTen();
	}
	
	public Song updateSong(Song song) {
		return songRepo.save(song);
	}
	
	public void deleteSong(Song song) {
		songRepo.delete(song);
	}
}
