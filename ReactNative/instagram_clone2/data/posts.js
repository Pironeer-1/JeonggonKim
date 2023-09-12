import {USERS} from './users'

export const POSTS = [
    {
        imageUrl: 'https://images.healthshots.com/healthshots/en/uploads/2023/01/18175821/face-glow-770x436.jpg',
        user : USERS[0].user,
        likes: 7870,
        caption: 'Train Ride to Hogasdfasdfasdf',
        profile_picture: USERS[0].image,
        comments : [
            {
                user: '1asdfasdf',
                comment: '1asdfasdfadf asfdljasd;fkljalsdf asfd askdljflk',
            },
            {
                user: '1fasdddf',
                comment: '1a asfdljasd;fkljalsdf asfd askdljflk',
            },
        ],
    },
    {
        imageUrl: 'https://images.healthshots.com/healthshots/en/uploads/2023/01/18175821/face-glow-770x436.jpg',
        user : USERS[1].user,
        likes: 73,
        caption: 'Train Ride to Hogasdfasdfasdf',
        profile_picture: USERS[0].image,
        comments : [
            {
                user: '2asdfasdf',
                comment: 'asdfasdfadf asfdljasd;fkljalsdf asfd askdljflk',
            },
        ],
    },
    {
        imageUrl: 'https://images.healthshots.com/healthshots/en/uploads/2023/01/18175821/face-glow-770x436.jpg',
        user : USERS[2].user,
        likes: 123,
        caption: 'Train Ride to Hogasdfasdfasdf',
        profile_picture: USERS[0].image,
        comments : [
        ],
    },
    {
        imageUrl: 'https://images.healthshots.com/healthshots/en/uploads/2023/01/18175821/face-glow-770x436.jpg',
        user : USERS[3].user,
        likes: 456,
        caption: 'Train Ride to Hogasdfasdfasdf',
        profile_picture: USERS[0].image,
        comments : [
            {
                user: 'asdfasdf',
                comment: 'asdfasdfadf asfdljasd;fkljalsdf asfd askdljflk',
            },
            {
                user: 'fasdddf',
                comment: 'a asfdljasd;fkljalsdf asfd askdljflk',
            },
        ],
    },

]