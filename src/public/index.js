console.log('Подключение завершено');

const config = {
    'X-Knack-REST-API-KEY': '76a9037d-b94f-4435-97be-fcf615e0ec95',
    'X-Knack-Application-Id': '66c732e9085df002769c6351',
    'content-type': 'application/json'
}

const form = document.forms.stream;

// fetch('http://localhost:3000/streams').then((res) => {
//     if (res.ok) {
//         return res.json();
//     }
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// form.addEventListener('submit', (evt) => {
//     evt.preventDefault();

//     const st = form.status.value == "on" ? true : false;

    // fetch(`http://localhost:3000/stream`, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         title: form.title.value,
    //         date: form.date.value,
    //         status: st,
    //         links: form.link.value.split(' ').map((item) => {
    //             if (item.includes('youtube')) {
    //                 return {
    //                     name: "Youtube",
    //                     link: item
    //                 }
    //             }
    //             if (item.includes('rutube')) {
    //                 return {
    //                     name: 'Rutube',
    //                     link: item
    //                 }
    //             }
    //             return {
    //                 name: 'undefined',
    //                 link: item
    //             }
    //         }),
    //         timesteps: form.timesteps.value.split(', ').map((item) => {
    //             if (item == "") return null;
    //             const a = item.split('(');
    //             if (a.length == 1) return {
    //                 time: a[0],
    //                 description: ''
    //             }
    //             return {
    //                 time: a[0],
    //                 description: a[1].slice(0, a[1].length - 1)
    //             }
    //         })
    //     })
    // }).then((res) => {
    //     form.reset();
    //     console.log(res.status);
    // })
// })

// fetch(`http://localhost:3000/stream`, {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'keke',
//         date: '12.01.2003',
//         status: 'просмотрено',
//         links: [],
//         timesteps: []
//     })
// }).then((res) => {
//     form.reset();
//     console.log(res.status);
// })