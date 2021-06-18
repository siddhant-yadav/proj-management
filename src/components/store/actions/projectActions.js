export const createProject = (project) =>
{

    // async call will be made here

    return (dispatch, getState) =>
    dispatch(
    {
        type : "CREATE_PROJECT",
        project     // same as project : project
    })
};