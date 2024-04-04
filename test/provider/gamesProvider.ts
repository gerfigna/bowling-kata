const invalidGames = [
    {
        rolls: [7, 4, 10],
    },
    {
        rolls: [1, 10, 11],
    },
    {
        rolls: [0, 6, 3, 8],
    },
    {
        rolls: [6, 3, 6, 5],
    },
];

const incompleteGames = [
    {
        score: 3,
        rolls: [1, 1, 1],
    },
    {
        score: 4,
        rolls: [1, 1, 2],
    },
    {
        score: 6,
        rolls: [1, 2, 3],
    },
    {
        score: 58,
        rolls: [10, 10, 10, 8],
    },
];

const completeGames = [
    {
        score: 300,
        rolls: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    },
    {
        score: 144,
        rolls: [10, 4, 5, 6, 4, 10, 9, 0, 1, 9, 6, 4, 3, 0, 10, 8, 2, 6],
    },
    {
        score: 139,
        rolls: [5, 4, 9, 1, 10, 4, 1, 2, 8, 0, 10, 7, 1, 3, 7, 10, 4, 6, 5],
    },
    {
        score: 132,
        rolls: [5, 4, 9, 1, 10, 4, 1, 2, 8, 0, 10, 7, 1, 3, 7, 10, 9, 0],
    },
    {
        score: 145,
        rolls: [5, 4, 9, 1, 10, 4, 1, 2, 8, 0, 10, 7, 1, 3, 7, 10, 10, 1, 9],
    },
    {
        score: 80,
        rolls: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4] ,
    },
    {
        score: 100,
        rolls: [10, 0, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0] ,
    },
];

export { invalidGames, incompleteGames, completeGames };
