(() => {
    // const getTshirts = async () => {
    //     try{
    //         const url = "https://jsonplaceholder.typicode.com/photos";

    //         const response = await fetch(url);
    //         const data = await response.json();

    //         const el = document.getElementById("list-items");
    //         user = data[0];

    //         for (let index = 0; index < array.length; index++) {
    //             const element = array[index];
                
    //         }
            
    //         console.log(data.lenght);
    //         el.innerText =  `${user}`
    //         return <div>"hello"</div>
    //     }
    //     catch{
    //         console.log(user);
    //     }
    // };
    // getTshirts();

})();

const LIMIT = 18
let from = LIMIT
let url = 'https://jsonplaceholder.typicode.com/photos'
let data = []

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

})

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

// load.onclick = () => {
// 	const to = from + LIMIT
//   listRender(data.slice(from, to))
//   from = to
// }