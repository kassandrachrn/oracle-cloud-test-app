import React, { Component } from 'react';
import ListNotesComponent from './ListNotesComponent';

class NotesApp extends Component {
    render() {
        return (<>
              <h1>Butter Notes App</h1>
              <ListNotesComponent/>
              </>
        )
    }
}

export default NotesApp