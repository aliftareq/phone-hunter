console.log('app js connected')


// fetch(`https://jsonplaceholder.typicode.com/photos`)
//     .then(res => res.json())
//     .then(data => console.log(data))

const loadPhotos = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhotos(data)
}


const displayPhotos = (photos) => {
    //console.log(photos)
    const PhotosDiv = document.getElementById('photos-div');
    photos.forEach(photo => {
        //console.log(photo);
        if (photo.id <= 21) {
            const PhotoDiv = document.createElement('div')
            PhotoDiv.classList.add('col')
            PhotoDiv.innerHTML = `
                <div onclick="loadDetails(${photo.id})" class="card">
                    <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${photo.title.slice(0, 15)}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            `
            PhotosDiv.appendChild(PhotoDiv);
        }
    })
}


const loadDetails = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data)

}

const displayDetails = async (photo) => {
    console.log(photo)
    const detailBox = document.getElementById('details-card')
    detailBox.innerHTML = `
    <div class="col">
        <div class="card">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card">
            <img src="${photo.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
    `
}

loadPhotos()





