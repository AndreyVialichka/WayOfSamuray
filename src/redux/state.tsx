export const STATE = {
    ProfilePage : { 
        statePost : [
        {
        id:1,
        likeNumber:13,
        text:'text',
        },
    ],
    },
    DialogsPage:{
            stateNames : [
                {
                    id: 1,
                    name: 'Name1'
                },
                {
                    id: 2,
                    name: 'Name2'
                },
                {
                    id: 3, 
                    name: 'Name3'
                },
                {
                    id: 4, 
                    name: 'Name4'
                },
        ],

            stateMessages : [
                {
                    id: 1, 
                    Message: 'Message1'
                },
                {
                    id: 2, 
                    Message: 'Message2'
                },
                {
                    id: 3, 
                    Message: 'Message3'
                },
                {
                    id: 4, 
                    Message: 'Message4'
                },
        ]
    }
}

export let addPost = (userPost : string) => {
    let newUserPost = {
        id:3,
        likeNumber:0,
        text: userPost
    }

    STATE.ProfilePage.statePost.push(newUserPost)
}
