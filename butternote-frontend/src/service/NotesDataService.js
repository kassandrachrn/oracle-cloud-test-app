import axios from 'axios'

const NOTES = 'notes'
const NOTES_API_URL = `http://localhost:8089/${NOTES}`


class NotesDataService {

    retrieveAllNotes() {
        return axios.get(`${NOTES_API_URL}/all`);
    }

    deleteNoteById(id) {
        return axios.delete(`${NOTES_API_URL}/${id}`);
    }
}

export default new NotesDataService()