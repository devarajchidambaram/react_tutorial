const initState = {
    posts : [
        {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},
        {userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
        {userId: 1, id: 3, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", body: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"}
    ]
}

const rootReducer = (state = initState, action) =>{
    switch(action.type){
        case 'DELETE_POST' : 
            console.log('=====Root reducer action===', action)

         var postsList = state.posts.filter((post)=>{
                return post.id !== action.id
         })

         return {
             ...state,
             posts : postsList
         }

        default: 
              return state;
    }
}

export default rootReducer;