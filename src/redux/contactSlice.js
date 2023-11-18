import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialContacts} from '../components/data/inittialContacts'
const initialState = {
     contacts: initialContacts,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare: values => {
        return { payload: { id: nanoid(), ...values } };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;