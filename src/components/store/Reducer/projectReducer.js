const initState = {
    projects : 
    [
        {id : '1' , title : "Call Elections" , content : "Call Suyash Sarthak Sanskar Rutuja"},
        {id : '2' , title : "Reach OOPS" , content : "Very important, already Lagging"},
        {id : '3' , title : "Meet Divyansh" , content : "Arrange for Seniyr's Assets"}
    ]
}

const projectReducer = (state = initState , action) =>
{
    return state;
}

export default projectReducer


// const initState = {
//     projects: [
//       {id: '1', title: 'help me find peach', content: 'blah blah blah'},
//       {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
//       {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
//     ]
//   }
  
//   const projectReducer = (state = initState, action) => {
//     return state;
//   };
  
//   export default projectReducer;