
let properties = [];

function postProperty(event) {
    event.preventDefault();
    const place = document.getElementById('place').value;
    const area = document.getElementById('area').value;

    
    const property = { place, area };
    properties.push(property);

    displayProperties();
}

function displayProperties() {
    const propertyList = document.getElementById('propertyList');
    propertyList.innerHTML = ''; 

    properties.forEach((property, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Property ${index + 1}: ${property.place}, ${property.area} sq ft`;
        propertyList.appendChild(listItem);
    });
}

document.getElementById('postPropertyForm').addEventListener('submit', postProperty);
