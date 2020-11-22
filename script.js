const myApp = new Vue ({
    el: '#root',
    data: {
        myUsername: {myName: 'Marco Taba', myImg: 'img/avatar_io'},
        contacts: [
            {
                name: 'Michele',
                propic: 'img/avatar_1.jpg'
            },
            {
                name: 'Fabio',
                propic: 'img/avatar_2.jpg'
            },
            {
                name: 'Samuele',
                propic: 'img/avatar_3.jpg'
            },
            {
                name: 'Luisa',
                propic:'img/avatar_4.jpg'
            }
        ]
    }
})