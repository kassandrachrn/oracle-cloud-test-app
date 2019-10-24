package com.example.butter.notes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.butter.notes.entities.Note;


@Repository
public interface NotesRepository extends JpaRepository<Note, Long>{
	
}
