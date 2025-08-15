import { createSlice, nanoid } from "@reduxjs/toolkit";
import { DUMMY_BOOKS } from "../../data/books";

const initialState = {
  items: DUMMY_BOOKS,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: {
      prepare: (book) => ({
        payload: { id: nanoid(), ...book },
      }),
      reducer: (state, action) => {
        state.items.unshift(action.payload); // show new book on top
      },
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
