import React, { useEffect, useState } from "react";
import Dashboard from "../commons/Dashboard";
import NoteForm from "../components/NoteComponent/NoteForm";
import NoteList from "../components/NoteComponent/NoteList";
import { Button, Pagination } from "antd";
import CategoryTabs from "../components/NoteComponent/CategoryTabs";
import NoteCard from "../components/NoteComponent/NoteCard";
import { generateRandomHexColor } from "../utils/randomColor";
import { connect } from "react-redux";
import {
  createNote,
  deleteNote,
  fetchNotes,
  updateNote,
} from "../store/note/noteAction";
import { fetchCatagories } from "../store/catagory/catagoryyAction";

function Note({
  notes,
  fetchNotes,
  createNote,
  deleteNote,
  catagories,
  fetchCatagory,
}) {
  useEffect(() => {
    fetchNotes();
    fetchCatagory();
  }, []);

  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const categories = ["All", "Personal", "Work", "Ideas"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  const filteredNotes =
    selectedCategory === "All"
      ? notes
      : notes.filter((note) => note.category === selectedCategory);

  const [openAddNote, setAddNote] = useState(false);
  const paginatedNotes = filteredNotes.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const hanldeAddNote = () => {
    setAddNote((prev) => !prev);
  };

  const handleDeleteNote = (id) => {
    deleteNote(id);
  };

  return (
    <Dashboard>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold mb-4">Notes App</h1>
          <Button
            placeholder="Add Note"
            title="Add Note"
            onClick={hanldeAddNote}
          >
            Add Note
          </Button>
        </div>

        <CategoryTabs
          categories={categories}
          onSelectCategory={handleSelectCategory}
        />
        <NoteForm
          catagories={catagories}
          addNote={createNote}
          visble={openAddNote}
          setVisble={setAddNote}
        />
        <div className="flex flex-wrap">
          {paginatedNotes.map((note) => (
            <NoteCard deleteNote={handleDeleteNote} key={note.id} note={note} />
          ))}
        </div>
        <Pagination
          className="mt-4"
          current={currentPage}
          total={filteredNotes.length}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </div>
    </Dashboard>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes.notes,
    catagories: state.catagories.catagories,
    note: state.notes.note,
    loading: state.notes.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (noteData) => dispatch(createNote(noteData)),
    updateNote: (noteId, noteData) => dispatch(updateNote(noteId, noteData)),
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    fetchCatagory: () => dispatch(fetchCatagories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
