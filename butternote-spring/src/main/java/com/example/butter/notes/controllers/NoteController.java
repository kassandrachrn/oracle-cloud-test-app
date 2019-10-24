package com.example.butter.notes.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.butter.notes.entities.Note;
import com.example.butter.notes.repository.NotesRepository;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
@RequestMapping("/notes")
public class NoteController {
	
	@Autowired
	private NotesRepository notesRepository;
	
	@GetMapping("/all")
	public List<Note> getNotes() {
		
		return notesRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Note> getNoteById(@PathVariable("id") Long id) {
		
		Optional<Note> toGet = notesRepository.findById(id);
		return toGet.isPresent() ? ResponseEntity.ok(toGet.get()) : ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteNoteById(@PathVariable("id") Long id) {
		
		Note toDelete = notesRepository.getOne(id);
		
		if(toDelete != null) {
			notesRepository.delete(toDelete);
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}

}
