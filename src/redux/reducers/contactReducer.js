const initialState = [
    { id: 0, name: "Saurabh Kesharwani", email: "saurabh29111999@gmail.com", number: 7309090671 },
    { id: 1, name: "Test ", email: "test@sau.com", number: 45678921334 },
  ];

  export const contactReducer = (state = initialState, action) => {

     switch(action.type) {
      case "ADD_CONTACT":
         state = [...state, action.payload];
         return state;
      case "UPDATE_CONTACT":
            const contactUpdate = state.filter((contact) =>
              contact.id === action.payload.id
                ? Object.assign(contact, action.payload)
                : contact
            );
            state = contactUpdate;
            return state;
      case "DELETE_CONTACT":
               const contactFilter = state.filter((contact) =>
                 contact.id === action.payload ? null : contact
               );
               state = contactFilter;
               return state;
        default :
       return state ;
     }
  }

  export default contactReducer ;