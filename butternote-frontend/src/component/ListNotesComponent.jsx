import React, { Component } from 'react';
import NotesDataService from '../service/NotesDataService';

class ListNotesComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            message: null
        }
    }

    componentDidMount() {
        this.refreshNotes();
    }

    refreshNotes() {
        NotesDataService.retrieveAllNotes()
            .then(
                response => {
                    console.log(response);
                    this.setState({ notes: response.data })
                }
            )
    }

    deleteNoteClicked(id) {
        NotesDataService.deleteNoteById(id)
            .then(
                response => {
                    this.setState({ message: `Delete of note ${id} Successful` })
                    this.refreshNotes()
                }
            )
    
    }

    render() {
        return (
            <div className="container">
                <h3>All Notes</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.notes.map(
                                    note =>
                                        <tr key={note.id}>
                                            <td>{note.id}</td>
                                            <td>{note.title}</td>
                                            <td>{note.content}</td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteNoteClicked(note.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListNotesComponent