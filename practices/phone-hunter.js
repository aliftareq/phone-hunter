console.log('phone hunter js connected')

const loadPhones = async (searchText, datalimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, datalimit);
}

const displayPhones = async (phones, datalimit) => {
    //console.log(phones)
    // diplay 10 phones only
    const showAllButtonBox = document.getElementById('show-all-box')
    if (datalimit && phones.length > 10) {
        phones = phones.slice(0, 10)
        showAllButtonBox.classList.remove('d-none')
    }
    else {
        showAllButtonBox.classList.add('d-none')
    }

    //product unavalability handling
    const NoProductMessageBox = document.getElementById('no-product-message')
    if (phones.length === 0) {
        NoProductMessageBox.classList.remove('d-none')
        toggleSpinner(false)
    }
    else {
        NoProductMessageBox.classList.add('d-none')
    }
    //displaying phone
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = ``
    phones.forEach(phone => {
        console.log(phone)
        const phoneContainer = document.createElement('div');
        phoneContainer.classList.add('col');
        phoneContainer.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top p-3" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
                <button onclick="loadPhoneDetalis('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneModal">
            Show details
        </button>
            </div>
        </div>
        `
        phonesContainer.appendChild(phoneContainer);

    })
    toggleSpinner(false)
}


const loadPhoneDetalis = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data)
}

const displayPhoneDetails = async (phoneData) => {
    console.log(phoneData)
    const modalBody = document.getElementById('modal-description')
    modalBody.innerHTML = `
    <p><b>Brand:</b> ${phoneData.brand}</p>
<p><b>Features:</b></p>
<ul>
    <li><b>ChipSet:</b> ${phoneData.mainFeatures.chipSet}</li>
    <li><b>Display size:</b> ${phoneData.mainFeatures.displaySize}</li>
    <li><b>Memory:</b> ${phoneData.mainFeatures.memory}</li>
    <li><b>Storage:</b> ${phoneData.mainFeatures.storage}</li>
</ul>
<p><b>Release Date:</b> ${phoneData.releaseDate
        }</p>
        <p><b>Price:</b> আপনার বন্ধুর কিডনী</p>  
    `
}


/*----------------- product serching function-------------*/

const processSearch = (datalimit) => {
    toggleSpinner(true)
    const searchField = document.getElementById('search-Field')
    const searchText = searchField.value
    loadPhones(searchText, datalimit)
}

/*----------------------toogle spinner function------------------*/
const toggleSpinner = (isLoading) => {
    const spinner = document.getElementById('spinner-box');
    if (isLoading) {
        spinner.classList.remove('d-none')
    }
    else {
        spinner.classList.add('d-none')
    }
}


/*-----------------Event handlers-----------------------*/

document.getElementById('btn-searchPhones').addEventListener('click', function () {
    processSearch(10)
})

document.getElementById('search-Field').addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        processSearch(10)
    }
})

document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch()
})

loadPhones('iphone')