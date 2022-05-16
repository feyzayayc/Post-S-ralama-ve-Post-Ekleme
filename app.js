const post = [
    {
        name: 'Kitap 1',
        author: 'Yazar 1',
        id: 123
    },
    {
        name: 'Kitap 2',
        author: 'Yazar 2',
        id: 456
    },
    {
        name: 'Kitap 3',
        author: 'Yazar 3',
        id: 789
    },

];

const post2 = [
    {
        name: 'Kitap 4',
        author: 'Yazar 4',
        id: 741
    }
];

screen();
async function ekle(data,callback) {
    await post.push({
        name: 'Kitap 4',
        author: 'Yazar 4',
        id: 741
    });
    callback();
}
function screen() {
    post.forEach(element => {
        console.log(element);
    });
}
ekle(post2,screen);