const streamTemplate = document.querySelector('#streams').content;
const streamsList = document.querySelector('.streams__list');

fetch('http://localhost:3000/streams/all')
.then((res) => {
    console.log('Ответ получен');
    if (res.ok) {
        console.log(res);
        return res.json();
    }
    return Promise.reject('Произошла ошибка');
}).then((data) => {
    data.forEach(item => {
        streamsList.append(createStream(item));
    });
}).catch((err) => {
    console.log(err);
})

function createStream(data) {
    const { title, date, links, timesteps, status} = data;
    const newStream = streamTemplate.cloneNode(true);
    const linksList = newStream.querySelector('.streams__links-list');
    const timestepsList = newStream.querySelector('.streams__timesteps');
    newStream.querySelector('.streams__title').textContent = title;
    newStream.querySelector('.streams__status').textContent = status;
    newStream.querySelector('.streams__date').textContent = date;
    links.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('streams__item')
        const linkName = document.createElement('a');
        linkName.classList.add('streams__link');
        linkName.textContent = item.name;
        linkName.setAttribute('href', item.link);
        linkName.setAttribute('target', '_blank');
        li.append(linkName);
        linksList.append(li);
    })
    timesteps.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('timesteps__item')
        const timestepsTime = document.createElement('p');
        timestepsTime.classList.add('timesteps__time');
        timestepsTime.textContent = item.time;
        if (item.description) {
            const timestepsDescription = document.createElement('p');
            timestepsDescription.classList.add('timesteps__description');
            timestepsDescription.textContent = item.description;
            li.append(timestepsTime, timestepsDescription);
        } else {
            li.append(timestepsTime);
        }
        timestepsList.append(li);
    })
    return newStream;
}