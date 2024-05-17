const properties = [
    { 
        place: 'Chennai', 
        area: '1000 sq ft', 
        price: 'Rs.30,000', 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqBz3k6efSrcByJiblPy_KOHldKPfLMlwTaD04_TLsw&s',
        seller: { name: 'kavivarshini', email: 'kavi@example.com', phone: '923-456-7890' }
        
    },
    { 
        place: 'Ooty', 
        area: '1200 sq ft', 
        price: 'Rs.10,000', 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBYPjDzUXE1exkzhkuJNPKSEIPifZjZ1Jz1aakAGsGg&s",
        seller: { name: 'Sathiya', email: 'sathiya@example.com', phone: '987-654-3210' }
    },
    { 
        place: 'Salem', 
        area: '800 sq ft', 
        price: 'Rs.15,000', 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBlCOaWKKHbS3BjyOQceJSzhMgpiEK96WLRAfC7HNlw&s",
        seller: { name: 'Akash', email: 'akash@example.com', phone: '945-654-0000' }
    },
    { 
        place: 'Theni', 
        area: '700 sq ft', 
        price: 'Rs.18500', 
        imageUrl: "https://dyimg2.realestateindia.com/prop_images/3235634/1212067_1-350x350.jpg",
        seller: { name: 'Ajith', email: 'ajith@example.com', phone: '907-986-6789' }
    },
    { 
        place: 'Madurai', 
        area: '1000 sq ft', 
        price: 'Rs.15,000', 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7PIHB4EY8rbjtFI8r5iGyu82kplA8KYsOo5CzBf2Ag&s",
        seller: { name: 'Elakiya', email: 'elaki@example.com', phone: '987-654-3210' }
    },
    { 
        place: 'Dindigul', 
        area: '1100 sq ft', 
        price: 'Rs.12,000', 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuWWap_tvqUJmEcONOYzDGwC6_nZLIZRIMUPwsIxm4A&s",
        seller: { name: 'Sanjay', email: 'sanju@example.com', phone: '987-074-5976' }
    },
    { 
        place: 'Puducherry', 
        area: '1300 sq ft', 
        price: 'Rs.14,000', 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVFHWMSttP5iL_5p2t0QSiueaNox-qBsDBMWXzxHiHQ&s",
        seller: { name: 'Sandeep', email: 'sand@example.com', phone: '900-687-1000' }
    },
    { 
        place: 'Kodaikanal', 
        area: '1000 sq ft', 
        price: 'Rs.20,000', 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQquR1iDzVpYScCNhOVtMc4n-GnuUgrDv4tZlTwRDYgWA&s",
        seller: { name: 'sharadha', email: 'Shar12@example.com', phone: '988-655-3110' }
    },
    { 
        place: 'Erode', 
        area: '500 sq ft', 
        price: 'Rs.25,000', 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44eRKT8_Jyz24L_h2EOLy3Iw2vPQ7XchG5lxyfxy8UQ&s",
        seller: { name: 'Arasu', email: 'arasu@example.com', phone: '997-544-3000' }
    },
    { 
        place: 'Yercaud', 
        area: '1200 sq ft', 
        price: 'Rs.13,000', 
        imageUrl: "https://dyimg1.realestateindia.com/prop_images/2955469/1216705_1-350x350.jpeg",
        seller: { name: 'swetha', email: 'swe09@example.com', phone: '901-111-0210' }
    },
    { 
        place: 'Namakal', 
        area: '1000 sq ft', 
        price: 'Rs.15,000', 
        imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/16/Photo_h180_w240/71886273_1_PropertyImage243-82320454603223_180_240.jpg",
        seller: { name: 'Sanjeev', email: 'sanj54@example.com', phone: '987-654-3665' }
    },
    { 
        place: 'Kanchipuram', 
        area: '800 sq ft', 
        price: 'Rs.15,000', 
        imageUrl: "https://housing-images.n7net.in/01c16c28/ac732d78cb7b1f8be4b630a4eca261ed/v0/medium/1_bhk_independent_house-for-rent-kanchipuram-Chennai-others.jpg",
        seller: { name: 'Karthick', email: 'kar124@example.com', phone: '887-654-0210' }
    },
    { 
        place: 'Kallakuruchi', 
        area: '1300 sq ft', 
        price: 'Rs.12,000', 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKw9DA3ygD2-pOyRbZp0VbqzEbF_P3qSe8rELh_9wxKA&s",
        seller: { name: 'Ragu', email: 'rags@example.com', phone: '787-654-3210' }
    },
    { 
        place: 'Karur', 
        area: '900 sq ft', 
        price: 'Rs.30,000', 
        imageUrl: "https://imagecdn.99acres.com/media1/24450/18/489018080M-1714383398745.webp",
        seller: { name: 'Nikitha', email: 'niki@example.com', phone: '988-666-8810' }
    },
];

const itemsPerPage = 5;
let currentPage = 1;


function displayFilteredProperties(filteredProperties) {
    const propertyList = document.getElementById('filteredProperties');
    propertyList.innerHTML = ''; 

    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProperties = filteredProperties.slice(start, end);

    paginatedProperties.forEach((property, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('property-item');
        listItem.dataset.index = index; 
        listItem.innerHTML = `
            <div class="property-details">
                <img src="${property.imageUrl}" alt="${property.place} Property">
                <div>
                    <h3>${property.place}</h3>
                    <p>Area: ${property.area}</p>
                    <p>Price: ${property.price}</p>
                    <button class="like-btn" data-index="${index}">Like (${property.likes})</button>
                    <button class="interested-btn" data-index="${index}">I'm Interested</button>
                </div>
            </div>
            <div class="seller-details">
                <h4>Seller Details</h4>
                <p>Name: ${property.seller.name}</p>
                <p>Email: ${property.seller.email}</p>
                <p>Phone: ${property.seller.phone}</p>
            </div>`;
        propertyList.appendChild(listItem);
    });

    document.querySelectorAll('.interested-btn').forEach(button => {
        button.addEventListener('click', function() {
            const sellerDetails = this.closest('.property-item').querySelector('.seller-details');
            const propertyIndex = this.getAttribute('data-index');

            if (!isLoggedIn()) {
                alert("Please log in to view seller details.");
                window.location.href = 'login.html'; 
                return;
            }

            sellerDetails.style.display = sellerDetails.style.display === 'block' ? 'none' : 'block';

            const property = properties[propertyIndex];
            sendEmailToSeller(property.seller);
            sendEmailToBuyer(property.seller, property);
        });
    });

    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', function() {
            const propertyIndex = this.getAttribute('data-index');
            properties[propertyIndex].likes++;
            this.textContent = `Like (${properties[propertyIndex].likes})`;
        });
    });

    updatePaginationControls(totalPages);
}

function filterProperties() {
    const placeFilter = document.getElementById('placeFilter').value.toLowerCase();
    const filteredProperties = properties.filter(property => property.place.toLowerCase().includes(placeFilter));
    currentPage = 1; 
    displayFilteredProperties(filteredProperties);
}

function updatePaginationControls(totalPages) {
    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        filterProperties();
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    const placeFilter = document.getElementById('placeFilter').value.toLowerCase();
    const filteredProperties = properties.filter(property => property.place.toLowerCase().includes(placeFilter));
    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayFilteredProperties(filteredProperties);
    }
});

filterProperties();

document.getElementById('placeFilter').addEventListener('input', filterProperties);

function isLoggedIn() {
    return true; 
}

function sendEmailToSeller(seller) {
    console.log(`Email sent to seller: ${seller.email}`);
}

function sendEmailToBuyer(seller, property) {
    console.log(`Email sent to buyer: ${property.seller.email}`);
}