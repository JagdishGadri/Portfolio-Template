import { TOGGLE } from "../actions/actionTypes";

const initialState = {
  darkMode: false,
  userData: {
    profilePic:"../../img/SmitProfile.jpeg",
    firstName: "Smit",
    lastName: "Shah",
    intro:
      "I as a Business analyst help guide businesses in improving processes products, services and software through data analysis. I am a agile  worker who straddle the line between IT and the business to help bridge the gap and improve efficiency",
    about:
      "I as a Business analyst help guide businesses in improving processes products, services and software through data analysis. I am a agile  worker who straddle the line between IT and the business to help bridge the gap and improve efficiency",
    education: {
      secondary: {
        institute: "F.A.L.T.U",
        course: "B-Tech Rubber ",
        description: "I was the best student in my mind",
        passout_year: "1420",
        cgpa: "10.01",
      },
      higherSecondary: {
        institute: "F.A.L.T.U",
        course: "B-Tech Rubber ",
        description: "I was the best student in my mind",
        passout_year: "1420",
        cgpa: "10.01",
      },
    experience: {
      secondary: {
        institute: "F.A.L.T.U",
        course: "B-Tech Rubber ",
        description: "I was the best student in my mind",
        passout_year: "1420",
        cgpa: "10.01",
      },
      higherSecondary: {
        institute: "F.A.L.T.U",
        course: "B-Tech Rubber ",
        description: "I was the best student in my mind",
        passout_year: "1420",
        cgpa: "10.01",
      },
      graduation: {
        institute: "F.A.L.T.U",
        course: "B-Tech Rubber ",
        description: "I was the best student in my mind",
        passout_year: "1420",
        cgpa: "10.01",
      },
    },
    projects: {
      secondary: {
        institute: "F.A.L.T.U",
        course: "B-Tech Rubber ",
        description: "I was the best student in my mind",
        passout_year: "1420",
        cgpa: "10.01",
      },
      higherSecondary: {
        institute: "F.A.L.T.U",
        course: "B-Tech Rubber ",
        description: "I was the best student in my mind",
        passout_year: "1420",
        cgpa: "10.01",
      },
      graduation: {
        institute: "F.A.L.T.U",
        course: "B-Tech Rubber ",
        description: "I was the best student in my mind",
        passout_year: "1420",
        cgpa: "10.01",
      },
    },
  },
}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default reducer;
