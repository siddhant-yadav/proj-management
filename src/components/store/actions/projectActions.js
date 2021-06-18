// export const createProject = (project) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     // async call will be made here

//     const firestore = getFirestore();
//     firestore.collection("projects").add({
//         ...project, // project here carries title and content data in it
//         authorFirstName: "Shri",
//         authorLastName: "Ram",
//         authorId: 12345,
//         createdAt: new Date(),
//       })
//       .then(() => 
//       {
//           dispatch({type: "CREATE_PROJECT",project,}); // same as project : project         
//         })
//         .catch((err) => {
//           dispatch({type: "CREATE_PROJECT_ERR",err}); 
//       });
//   };
// };
export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('projects').add({
        ...project,
        authorFirstName: 'Net',
        authorLastName: 'Ninja',
        authorId: 12345,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  };