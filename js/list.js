const LIMIT = 18
let from = LIMIT
let url = 'https://jsonplaceholder.typicode.com/photos'
let data = []

setTimeout(()=>{
    fetch(url)
    .then(response => {
        if (!response.ok) {
          throw `${response.status}`
        }
        return response.json().then((result) => {
          data = result
          listRender(data.slice(0, LIMIT))
        })
      })
       .catch(response => {
          document.querySelector("#list-items").innerHTML = "Что-то пошло не так!"
      
      })
}, 3000)

function listRender(items) {
  let itemsArr = items.map(function(item) {
    return createList(item);
  });

  let content = ``;
  itemsArr.forEach(function(itemInfo) {
    content += itemInfo;
  });

  document.querySelector("#list-items").innerHTML = content
}

function createList(item) {
  return `
    <div class="list-item">
        <div class="list-item__tittle">${item.title}</div>
            <div class="list-item__image">
                <img src="${item.url}" alt="" class="list-image">
            </div>
        <div class="list-item__price">${item.albumId} руб</div>
        <div class="list-item__basket">
            <div class="list-item__minus-container">
                <div class="list-item__minus">
                    <div class="plus">-</div>
                </div>
            </div>
            <div class="list-item__plus-container">
                <div class="list-item__plus">
                    <div class="minus">+</div>
                </div>
            </div>
        </div>
    </div>
  `
}

back.onclick = () => {
    from -= LIMIT
    const to = from
    from -= LIMIT
    if(from >= 0){
        listRender(data.slice(from, to))
    }
    else {
        from += LIMIT
    }
    from += LIMIT
}

forward.onclick = () => {
    const to = from + LIMIT
  listRender(data.slice(from, to))
  from = to
}