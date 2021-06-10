import './index.css'
const button = document.querySelector('#Load');
const cardList = document.querySelector('.center__grid')

function renderCard(cardObj) {
    const card = `<div class="card-wrap">
                <div class="card">
                    <img class="card__image" src=${cardObj.url} alt="Футболка">
                    <h2 class="card__title">
                        ${cardObj.title}
                    </h2>
                    <p class="card__text">
                        ${cardObj.title}
                    </p>
                </div>
            </div>`
    cardList.insertAdjacentHTML('beforeend', card)
    }

function getData() {
        return fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                const json = res.json();
                return json.then(Promise.reject.bind(Promise))
            })
            .catch((err) => {
                throw err;
            })

}
const refresh = () => {
    getData().then((data) => {
        return data.forEach((el) => {
            renderCard(el)
        })
    })
}

refresh()
button.addEventListener('click', refresh)


