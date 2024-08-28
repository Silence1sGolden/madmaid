const mainForm = document.forms.stream;
const addTimeStep = document.querySelector('.form__add-timesptep');
const addLink = document.querySelector('.form__add-link');

addTimeStep.addEventListener('click', checkTimeStep);
addLink.addEventListener('click', checkLink);
mainForm.addEventListener('submit', handleSendData);

function checkTimeStep() {
    const time = mainForm.time.value;
    const description = mainForm.description.value;
    const regex = new RegExp('[0-9]{2}:[0-9]{2}:[0-9]{2}');
    if (time && regex.test(time)) {
        writeTimeStep(time, description);
        mainForm.time.value = '';
        mainForm.description.value = '';
    } else {
        console.log('Что-то не так');
    }
}

function checkLink() {
    const linkName = mainForm.linkname.value;
    const link = mainForm.link.value;
    if (link && linkName) {
        writeLink(linkName, link);
        mainForm.linkname.value = '';
        mainForm.link.value = '';
    } else {
        console.log('Что-то не так');
    }
}

function writeTimeStep(time, description) {
    if (description) {
        mainForm.timesteps.value += `${time}|${description},\n`;
    } else {
        mainForm.timesteps.value += `${time},\n`;
    }
}

function writeLink(name, link) {
    mainForm.links.value += `${name}|${link},\n`;
}

function handleSendData(evt) {
    evt.preventDefault();
    const status = mainForm.status.value ? 'просмотрено' : 'не просмотрено';
    const links = mainForm.links.value.split(',\n').map((item) => {
        const data = item.split('|');
        return {
            name: data[0],
            link: data[1],
        }
    })
    const timesteps = mainForm.timesteps.value.split(',\n').map((item) => {
        if (item.length > 8) {
            const data = item.split('|');
            return {
                time: data[0],
                description: data[1],
            }
        } else {
            return {
                time: item,
                description: '' 
            }
        }
    })

    fetch('http://localhost:3000/streams/add', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            title: mainForm.title.value,
            date: mainForm.date.value,
            status: status,
            links: links,
            timesteps: timesteps
        })
    }).then((res) => {
        if (res.ok) {
            mainForm.reset();
        } else {
            return Promise.reject('Произошла ошибка');
        }
    }).catch((err) => {
        console.log(err);
    })
}