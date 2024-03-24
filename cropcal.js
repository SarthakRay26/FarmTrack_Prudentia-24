document.getElementById('crop-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const month = document.getElementById('month').value;
    const location = document.getElementById('location').value.trim().toLowerCase();
    let cropSuggestions = [];


    // Get crop suggestions based on month and location
    switch (month.toLowerCase()) {
        case 'january':
            cropSuggestions = getCropSuggestionsForJanuary(location);
            break;
        case 'february':
            cropSuggestions = getCropSuggestionsForFebruary(location);
            break;
        case 'march':
            cropSuggestions = getCropSuggestionsForMarch(location);
            break;
        case 'april':
            cropSuggestions = getCropSuggestionsForApril(location);
            break;
        case 'may':
            cropSuggestions = getCropSuggestionsForMay(location);
            break;
        case 'june':
            cropSuggestions = getCropSuggestionsForJune(location);
            break;
        case 'july':
            cropSuggestions = getCropSuggestionsForJuly(location);
            break;
        case 'august':
            cropSuggestions = getCropSuggestionsForAugust(location);
            break;
        case 'september':
            cropSuggestions = getCropSuggestionsForSeptember(location);
            break;
        case 'october':
            cropSuggestions = getCropSuggestionsForOctober(location);
            break;
        case 'november':
            cropSuggestions = getCropSuggestionsForNovember(location);
            break;
        case 'december':
            cropSuggestions = getCropSuggestionsForDecember(location);
            break;
        default:
            cropSuggestions = [];
    }

    displayCropSuggestions(cropSuggestions);
});

document.getElementById('reset-btn').addEventListener('click', function () {
    document.getElementById('crop-form').reset();
    document.getElementById('crop-list').innerHTML = '';
});

function displayCropSuggestions(crops) {
    const cropList = document.getElementById('crop-list');
    cropList.innerHTML = '';
    if (crops.length === 0) {
        cropList.textContent = 'No crop suggestions available.';
    } else {
        const ul = document.createElement('ul');
        crops.forEach(crop => {
            const li = document.createElement('li');
            li.textContent = crop;
            ul.appendChild(li);
        });
        cropList.appendChild(ul);
    }
}

// Functions to get crop suggestions based on month and location

function getCropSuggestionsForJanuary(location) {
    switch (location.toLowerCase()) {
        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Banana', 'Pineapple', 'Turmeric', 'Ginger', 'Black pepper', 'Vanilla', 'Areca nut', 'Sweet potato'];
        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Buckwheat', 'Mustard', 'Sesame', 'Groundnut', 'Turmeric'];
        case 'assam':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Gram', 'Turmeric', 'Ginger', 'Mustard', 'Linseed', 'Sugarcane'];
        case 'bihar':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato'];
        case 'chandigarh':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean'];
        case 'dadra and nagar haveli':
        case 'daman and diu':
        case 'delhi':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'goa':
            return ['Rice', 'Maize', 'Finger millet', 'Pulses', 'Cashew nut', 'Coconut', 'Sugarcane', 'Arecanut', 'Betel vine', 'Ginger'];
        case 'gujarat':
            return ['Wheat', 'Pulses', 'Bajra', 'Groundnut', 'Cotton', 'Rapeseed', 'Mustard', 'Cumin', 'Sugarcane', 'Tobacco'];
        case 'haryana':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'himachal pradesh':
            return ['Maize', 'Wheat', 'Barley', 'Rice', 'Maize', 'Barley', 'Wheat', 'Apple', 'Stone fruit', 'Vegetables'];
        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Fruits', 'Saffron', 'Walnut', 'Almond', 'Potato'];
        case 'jharkhand':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Mustard', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean', 'Potato'];
        case 'karnataka':
            return ['Rice', 'Ragi', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Castor', 'Cotton', 'Maize', 'Sugarcane'];
        case 'kerala':
            return ['Rice', 'Tapioca', 'Fruits', 'Coconut', 'Rubber', 'Black pepper', 'Ginger', 'Turmeric', 'Banana', 'Pineapple'];
        case 'lakshadweep':
            return ['Coconut', 'Bread fruit', 'Banana', 'Papaya', 'Yam', 'Sweet potato', 'Tapioca', 'Drumstick', 'Mango', 'Jasmine'];
        case 'madhya pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Soybean', 'Pulses', 'Oilseeds', 'Cotton', 'Maize', 'Jowar'];
        case 'maharashtra':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Soybean', 'Pulses', 'Oilseeds', 'Cotton', 'Maize', 'Jowar'];
        case 'manipur':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Sugarcane', 'Oilseeds', 'Pulses', 'Potato', 'Ginger', 'Turmeric'];
        case 'meghalaya':
            return ['Rice', 'Maize', 'Potato', 'Pineapple', 'Orange', 'Jute', 'Black pepper', 'Turmeric', 'Ginger', 'Areca nut'];
        case 'mizoram':
            return ['Rice', 'Maize', 'Pulses', 'Oilseeds', 'Fruits', 'Vegetables', 'Spices', 'Bamboo', 'Oil palm', 'Rubber'];
        case 'nagaland':
            return ['Rice', 'Maize', 'Millets', 'Pulses', 'Oilseeds', 'Fruits', 'Vegetables'];
        case 'odisha':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Mustard', 'Sesame', 'Sunflower', 'Soybean', 'Potato', 'Onion'];
        case 'puducherry':
            return ['Rice', 'Coconut', 'Pulses', 'Groundnut', 'Sugarcane', 'Banana', 'Sweet potato', 'Tapioca', 'Cotton', 'Vegetables'];
        case 'punjab':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'rajasthan':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Pulses', 'Sesame', 'Bajra'];
        case 'sikkim':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Buckwheat', 'Potato', 'Cardamom', 'Ginger', 'Turmeric'];
        case 'tamil nadu':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Banana', 'Onion', 'Tomato', 'Brinjal'];
        case 'telangana':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'tripura':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Groundnut', 'Jute', 'Black pepper', 'Turmeric', 'Ginger'];
        case 'uttar pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Potato', 'Onion', 'Tomato'];
        case 'uttarakhand':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Potato', 'Onion', 'Tomato'];
        case 'west bengal':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato'];
        default:
            return ['No data available for this location'];
    }
}

// Implement similar functions for other months and locations
function getCropSuggestionsForFebruary(location) {
    switch (location.toLowerCase()) {
        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Banana', 'Pineapple', 'Turmeric', 'Ginger', 'Black pepper', 'Vanilla', 'Areca nut', 'Sweet potato'];
        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Buckwheat', 'Mustard', 'Sesame', 'Groundnut', 'Turmeric'];
        case 'assam':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Gram', 'Turmeric', 'Ginger', 'Mustard', 'Linseed', 'Sugarcane'];
        case 'bihar':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato'];
        case 'chandigarh':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean'];
        case 'dadra and nagar haveli':
        case 'daman and diu':
        case 'delhi':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'goa':
            return ['Rice', 'Maize', 'Finger millet', 'Pulses', 'Cashew nut', 'Coconut', 'Sugarcane', 'Arecanut', 'Betel vine', 'Ginger'];
        case 'gujarat':
            return ['Wheat', 'Pulses', 'Bajra', 'Groundnut', 'Cotton', 'Rapeseed', 'Mustard', 'Cumin', 'Sugarcane', 'Tobacco'];
        case 'haryana':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'himachal pradesh':
            return ['Maize', 'Wheat', 'Barley', 'Rice', 'Maize', 'Barley', 'Wheat', 'Apple', 'Stone fruit', 'Vegetables'];
        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Fruits', 'Saffron', 'Walnut', 'Almond', 'Potato'];
        case 'jharkhand':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Mustard', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean', 'Potato'];
        case 'karnataka':
            return ['Rice', 'Ragi', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Castor', 'Cotton', 'Maize', 'Sugarcane'];
        case 'kerala':
            return ['Rice', 'Tapioca', 'Fruits', 'Coconut', 'Rubber', 'Black pepper', 'Ginger', 'Turmeric', 'Banana', 'Pineapple'];
        case 'lakshadweep':
            return ['Coconut', 'Bread fruit', 'Banana', 'Papaya', 'Yam', 'Sweet potato', 'Tapioca', 'Drumstick', 'Mango', 'Jasmine'];
        case 'madhya pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Soybean', 'Pulses', 'Oilseeds', 'Cotton', 'Maize', 'Jowar'];
        case 'maharashtra':
            return ['Wheat', 'Barley', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Sunflower'];
        case 'manipur':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Pulses', 'Mustard', 'Sugarcane', 'Turmeric', 'Ginger', 'Potato'];
        case 'meghalaya':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Jute', 'Tea', 'Mustard', 'Sugarcane'];
        case 'mizoram':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Mustard', 'Soybean', 'Potato'];
        case 'nagaland':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Ginger', 'Turmeric', 'Sugarcane'];
        case 'odisha':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Mustard', 'Sugarcane', 'Cotton', 'Sesame', 'Sunflower', 'Soybean'];
        case 'puducherry':
            return ['Rice', 'Maize', 'Black gram', 'Green gram', 'Groundnut', 'Sugarcane', 'Banana', 'Coconut', 'Turmeric', 'Ginger'];
        case 'punjab':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Rapeseed', 'Mustard', 'Cotton', 'Maize', 'Jowar', 'Bajra'];
        case 'rajasthan':
            return ['Wheat', 'Barley', 'Gram', 'Pulses', 'Mustard', 'Sugarcane', 'Cotton', 'Groundnut', 'Maize', 'Jowar'];
        case 'sikkim':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Ginger', 'Turmeric', 'Sugarcane', 'Cardamom'];
        case 'tamil nadu':
            return ['Rice', 'Maize', 'Bajra', 'Ragi', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Sesame', 'Sunflower'];
        case 'telangana':
            return ['Rice', 'Maize', 'Sorghum', 'Groundnut', 'Sugarcane', 'Turmeric', 'Red gram', 'Black gram', 'Green gram', 'Soybean'];
        case 'tripura':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Jute', 'Turmeric', 'Ginger', 'Sugarcane'];
        case 'uttar pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Pulses', 'Sugarcane', 'Potato', 'Mustard', 'Rapeseed', 'Maize', 'Jowar'];
        case 'uttarakhand':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Potato', 'Rapeseed', 'Mustard', 'Sugarcane', 'Soybean', 'Pulses'];
        case 'west bengal':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Jute', 'Mustard', 'Sugarcane', 'Turmeric'];
        default:
            return [];
    }
}


function getCropSuggestionsForMarch(location) {
    switch (location.toLowerCase()) {
        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Banana', 'Pineapple', 'Turmeric', 'Ginger', 'Black pepper', 'Vanilla', 'Areca nut', 'Sweet potato'];
        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Buckwheat', 'Mustard', 'Sesame', 'Groundnut', 'Turmeric'];
        case 'assam':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Gram', 'Turmeric', 'Ginger', 'Mustard', 'Linseed', 'Sugarcane'];
        case 'bihar':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato'];
        case 'chandigarh':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean'];
        case 'dadra and nagar haveli':
        case 'daman and diu':
        case 'delhi':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'goa':
            return ['Rice', 'Maize', 'Finger millet', 'Pulses', 'Cashew nut', 'Coconut', 'Sugarcane', 'Arecanut', 'Betel vine', 'Ginger'];
        case 'gujarat':
            return ['Wheat', 'Pulses', 'Bajra', 'Groundnut', 'Cotton', 'Rapeseed', 'Mustard', 'Cumin', 'Sugarcane', 'Tobacco'];
        case 'haryana':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'himachal pradesh':
            return ['Maize', 'Wheat', 'Barley', 'Rice', 'Maize', 'Barley', 'Wheat', 'Apple', 'Stone fruit', 'Vegetables'];
        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Fruits', 'Saffron', 'Walnut', 'Almond', 'Potato'];
        case 'jharkhand':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Mustard', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean', 'Potato'];
        case 'karnataka':
            return ['Rice', 'Ragi', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Castor', 'Cotton', 'Maize', 'Sugarcane'];
        case 'kerala':
            return ['Rice', 'Tapioca', 'Fruits', 'Coconut', 'Rubber', 'Black pepper', 'Ginger', 'Turmeric', 'Banana', 'Pineapple'];
        case 'lakshadweep':
            return ['Coconut', 'Bread fruit', 'Banana', 'Papaya', 'Yam', 'Sweet potato', 'Tapioca', 'Drumstick', 'Mango', 'Jasmine'];
        case 'madhya pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Soybean', 'Pulses', 'Oilseeds', 'Cotton', 'Maize', 'Jowar'];
        case 'maharashtra':
            return ['Wheat', 'Gram', 'Pulses', 'Oilseeds', 'Cotton', 'Maize', 'Sorghum', 'Sunflower', 'Soybean', 'Groundnut'];
        case 'manipur':
            return ['Rice', 'Maize', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Vegetables', 'Fruits', 'Flowers'];
        case 'meghalaya':
            return ['Rice', 'Maize', 'Potato', 'Ginger', 'Turmeric', 'Black pepper', 'Cabbage', 'Cauliflower', 'Carrot', 'Radish'];
        case 'mizoram':
            return ['Rice', 'Maize', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Vegetables', 'Fruits', 'Flowers'];
        case 'nagaland':
            return ['Rice', 'Maize', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Vegetables', 'Fruits', 'Flowers'];
        case 'odisha':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Oilseeds', 'Sugarcane', 'Cotton', 'Vegetables', 'Fruits', 'Turmeric'];
        case 'puducherry':
            return ['Rice', 'Pulses', 'Groundnut', 'Oilseeds', 'Tapioca', 'Banana', 'Coconut', 'Sugarcane', 'Turmeric', 'Ginger'];
        case 'punjab':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Mustard', 'Potato', 'Onion', 'Tomato', 'Cabbage', 'Cauliflower'];
        case 'rajasthan':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Pulses', 'Oilseeds', 'Mustard', 'Cotton', 'Maize', 'Bajra'];
        case 'sikkim':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Vegetables'];
        case 'tamil nadu':
            return ['Rice', 'Millets', 'Pulses', 'Groundnut', 'Sesame', 'Cotton', 'Chillies', 'Turmeric', 'Sugar cane', 'Coconut'];
        case 'telangana':
            return ['Rice', 'Maize', 'Sorghum', 'Groundnut', 'Cotton', 'Chillies', 'Turmeric', 'Sesame', 'Pulses', 'Sugarcane'];
        case 'tripura':
            return ['Rice', 'Maize', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Vegetables', 'Fruits', 'Flowers'];
        case 'uttar pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Pulses', 'Oilseeds', 'Potato', 'Onion', 'Tomato', 'Cabbage', 'Cauliflower'];
        case 'uttarakhand':
            return ['Rice', 'Wheat', 'Barley', 'Gram', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Vegetables'];
        case 'west bengal':
            return ['Rice', 'Wheat', 'Maize', 'Pulses', 'Potato', 'Jute', 'Tea', 'Sugarcane', 'Ginger', 'Turmeric'];
        default:
            return ['Crop suggestions for this location are not available.'];
    }
}



function getCropSuggestionsForApril(location) {
    switch (location.toLowerCase()) {
        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Banana', 'Pineapple', 'Turmeric', 'Ginger', 'Black pepper', 'Vanilla', 'Areca nut', 'Sweet potato'];
        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Buckwheat', 'Mustard', 'Sesame', 'Groundnut', 'Turmeric'];
        case 'assam':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Gram', 'Turmeric', 'Ginger', 'Mustard', 'Linseed', 'Sugarcane'];
        case 'bihar':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato'];
        case 'chandigarh':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean'];
        case 'dadra and nagar haveli':
        case 'daman and diu':
        case 'delhi':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'goa':
            return ['Rice', 'Maize', 'Finger millet', 'Pulses', 'Cashew nut', 'Coconut', 'Sugarcane', 'Arecanut', 'Betel vine', 'Ginger'];
        case 'gujarat':
            return ['Wheat', 'Pulses', 'Bajra', 'Groundnut', 'Cotton', 'Rapeseed', 'Mustard', 'Cumin', 'Sugarcane', 'Tobacco'];
        case 'haryana':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'himachal pradesh':
            return ['Maize', 'Wheat', 'Barley', 'Rice', 'Maize', 'Barley', 'Wheat', 'Apple', 'Stone fruit', 'Vegetables'];
        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Fruits', 'Saffron', 'Walnut', 'Almond', 'Potato'];
        case 'jharkhand':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Mustard', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean', 'Potato'];
        case 'karnataka':
            return ['Rice', 'Ragi', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Castor', 'Cotton', 'Maize', 'Sugarcane'];
        case 'kerala':
            return ['Rice', 'Tapioca', 'Fruits', 'Coconut', 'Rubber', 'Black pepper', 'Ginger', 'Turmeric', 'Banana', 'Pineapple'];
        case 'lakshadweep':
            return ['Coconut', 'Bread fruit', 'Banana', 'Papaya', 'Yam', 'Sweet potato', 'Tapioca', 'Drumstick', 'Mango', 'Jasmine'];
        case 'madhya pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Soybean', 'Pulses', 'Oilseeds', 'Cotton', 'Maize', 'Jowar'];
        case 'maharashtra':
            return ['Rice', 'Wheat', 'Jowar', 'Bajra', 'Pulses', 'Sugarcane', 'Cotton', 'Maize', 'Groundnut', 'Sunflower'];
        case 'manipur':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Mustard', 'Potato', 'Sugarcane', 'Oilseeds', 'Spices'];
        case 'meghalaya':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Fruits', 'Potato', 'Ginger', 'Turmeric', 'Orange'];
        case 'mizoram':
            return ['Rice', 'Maize', 'Vegetables', 'Ginger', 'Turmeric', 'Chillies', 'Orange', 'Banana', 'Pineapple', 'Passion fruit'];
        case 'nagaland':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Sugarcane'];
        case 'odisha':
            return ['Rice', 'Wheat', 'Maize', 'Pulses', 'Groundnut', 'Sesame', 'Mustard', 'Sugarcane', 'Cotton', 'Jute'];
        case 'puducherry':
            return ['Rice', 'Groundnut', 'Sugarcane', 'Coconut', 'Banana', 'Onion', 'Tomato', 'Brinjal', 'Bitter gourd', 'Ridge gourd'];
        case 'punjab':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'rajasthan':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Bajra', 'Maize', 'Jowar'];
        case 'sikkim':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Ginger', 'Turmeric', 'Cardamom', 'Orange'];
        case 'tamil nadu':
            return ['Rice', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Maize', 'Millets', 'Turmeric', 'Chillies', 'Banana'];
        case 'telangana':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'tripura':
            return ['Rice', 'Wheat', 'Maize', 'Pulses', 'Groundnut', 'Sesame', 'Mustard', 'Potato', 'Jute', 'Rubber'];
        case 'uttar pradesh':
            return ['Rice', 'Wheat', 'Barley', 'Pulses', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'uttarakhand':
            return ['Rice', 'Wheat', 'Barley', 'Maize', 'Pulses', 'Fruits', 'Potato', 'Ginger', 'Turmeric', 'Honey'];
        case 'west bengal':
            return ['Rice', 'Wheat', 'Maize', 'Pulses', 'Jute', 'Potato', 'Sweet potato', 'Onion', 'Tomato', 'Brinjal'];
        default:
            return [];
    }
}



function getCropSuggestionsForMay(location) {
    switch (location.toLowerCase()) {
        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Banana', 'Pineapple', 'Turmeric', 'Ginger', 'Black pepper', 'Vanilla', 'Areca nut', 'Sweet potato'];
        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Buckwheat', 'Mustard', 'Sesame', 'Groundnut', 'Turmeric'];
        case 'assam':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Gram', 'Turmeric', 'Ginger', 'Mustard', 'Linseed', 'Sugarcane'];
        case 'bihar':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato'];
        case 'chandigarh':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean'];
        case 'dadra and nagar haveli':
        case 'daman and diu':
        case 'delhi':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'goa':
            return ['Rice', 'Maize', 'Finger millet', 'Pulses', 'Cashew nut', 'Coconut', 'Sugarcane', 'Arecanut', 'Betel vine', 'Ginger'];
        case 'gujarat':
            return ['Wheat', 'Pulses', 'Bajra', 'Groundnut', 'Cotton', 'Rapeseed', 'Mustard', 'Cumin', 'Sugarcane', 'Tobacco'];
        case 'haryana':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'himachal pradesh':
            return ['Maize', 'Wheat', 'Barley', 'Rice', 'Maize', 'Barley', 'Wheat', 'Apple', 'Stone fruit', 'Vegetables'];
        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Fruits', 'Saffron', 'Walnut', 'Almond', 'Potato'];
        case 'jharkhand':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Mustard', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean', 'Potato'];
        case 'karnataka':
            return ['Rice', 'Ragi', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Castor', 'Cotton', 'Maize', 'Sugarcane'];
        case 'kerala':
            return ['Rice', 'Tapioca', 'Fruits', 'Coconut', 'Rubber', 'Black pepper', 'Ginger', 'Turmeric', 'Banana', 'Pineapple'];
        case 'lakshadweep':
            return ['Coconut', 'Bread fruit', 'Banana', 'Papaya', 'Yam', 'Sweet potato', 'Tapioca', 'Drumstick', 'Mango', 'Jasmine'];
        case 'madhya pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Soybean', 'Pulses', 'Oilseeds', 'Cotton', 'Maize', 'Jowar'];
        case 'maharashtra':
            return ['Rice', 'Wheat', 'Jowar', 'Bajra', 'Pulses', 'Sugarcane', 'Cotton', 'Maize', 'Groundnut', 'Sunflower'];
        case 'manipur':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Mustard', 'Potato', 'Sugarcane', 'Oilseeds', 'Spices'];
        case 'meghalaya':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Fruits', 'Potato', 'Ginger', 'Turmeric', 'Orange'];
        case 'mizoram':
            return ['Rice', 'Maize', 'Vegetables', 'Ginger', 'Turmeric', 'Chillies', 'Orange', 'Banana', 'Pineapple', 'Passion fruit'];
        case 'nagaland':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Sugarcane'];
        case 'odisha':
            return ['Rice', 'Wheat', 'Maize', 'Pulses', 'Groundnut', 'Sesame', 'Mustard', 'Sugarcane', 'Cotton', 'Jute'];
        case 'puducherry':
            return ['Rice', 'Groundnut', 'Sugarcane', 'Coconut', 'Banana', 'Onion', 'Tomato', 'Brinjal', 'Bitter gourd', 'Ridge gourd'];
        case 'punjab':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'rajasthan':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Bajra', 'Maize', 'Jowar'];
        case 'sikkim':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Ginger', 'Turmeric', 'Cardamom', 'Orange'];
        case 'tamil nadu':
            return ['Rice', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Maize', 'Millets', 'Turmeric', 'Chillies', 'Banana'];
        case 'telangana':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'tripura':
            return ['Rice', 'Wheat', 'Maize', 'Pulses', 'Groundnut', 'Sesame', 'Mustard', 'Potato', 'Jute', 'Rubber'];
        case 'uttar pradesh':
            return ['Rice', 'Wheat', 'Barley', 'Pulses', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'uttarakhand':
            return ['Rice', 'Wheat', 'Barley', 'Maize', 'Pulses', 'Fruits', 'Potato', 'Ginger', 'Turmeric', 'Honey'];
        case 'west bengal':
            return ['Rice', 'Wheat', 'Maize', 'Pulses', 'Jute', 'Potato', 'Sweet potato', 'Onion', 'Tomato', 'Brinjal'];
        default:
            return [];
    }
}


function getCropSuggestionsForJune(location) {
    switch (location.toLowerCase()) {
        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Banana', 'Pineapple', 'Turmeric', 'Ginger', 'Black pepper', 'Vanilla', 'Areca nut', 'Sweet potato'];
        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Buckwheat', 'Mustard', 'Sesame', 'Groundnut', 'Turmeric'];
        case 'assam':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Gram', 'Turmeric', 'Ginger', 'Mustard', 'Linseed', 'Sugarcane'];
        case 'bihar':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato'];
        case 'chandigarh':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean'];
        case 'dadra and nagar haveli':
        case 'daman and diu':
        case 'delhi':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'goa':
            return ['Rice', 'Maize', 'Finger millet', 'Pulses', 'Cashew nut', 'Coconut', 'Sugarcane', 'Arecanut', 'Betel vine', 'Ginger'];
        case 'gujarat':
            return ['Wheat', 'Pulses', 'Bajra', 'Groundnut', 'Cotton', 'Rapeseed', 'Mustard', 'Cumin', 'Sugarcane', 'Tobacco'];
        case 'haryana':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'himachal pradesh':
            return ['Maize', 'Wheat', 'Barley', 'Rice', 'Maize', 'Barley', 'Wheat', 'Apple', 'Stone fruit', 'Vegetables'];
        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Fruits', 'Saffron', 'Walnut', 'Almond', 'Potato'];
        case 'jharkhand':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Mustard', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean', 'Potato'];
        case 'karnataka':
            return ['Rice', 'Ragi', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Castor', 'Cotton', 'Maize', 'Sugarcane'];
        case 'kerala':
            return ['Rice', 'Tapioca', 'Fruits', 'Coconut', 'Rubber', 'Black pepper', 'Ginger', 'Turmeric', 'Banana', 'Pineapple'];
        case 'lakshadweep':
            return ['Coconut', 'Bread fruit', 'Banana', 'Papaya', 'Yam', 'Sweet potato', 'Tapioca', 'Drumstick', 'Mango', 'Jasmine'];
        case 'madhya pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Soybean', 'Pulses', 'Oilseeds', 'Cotton', 'Maize', 'Jowar'];
        case 'maharashtra':
            return ['Rice', 'Jowar', 'Bajra', 'Wheat', 'Sugarcane', 'Cotton', 'Groundnut', 'Soybean', 'Turmeric', 'Onion'];
        case 'manipur':
            return ['Rice', 'Maize', 'Pulses', 'Potato', 'Mustard', 'Oilseeds', 'Fruits', 'Spices', 'Tea', 'Rubber'];
        case 'meghalaya':
            return ['Rice', 'Maize', 'Potato', 'Jute', 'Pulses', 'Oilseeds', 'Fruits', 'Spices', 'Tea', 'Rubber'];
        case 'mizoram':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Oilseeds', 'Fruits', 'Spices', 'Tea', 'Rubber'];
        case 'nagaland':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Oilseeds', 'Fruits', 'Spices', 'Tea', 'Rubber'];
        case 'odisha':
            return ['Rice', 'Wheat', 'Maize', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Mustard', 'Turmeric'];
        case 'puducherry':
            return ['Rice', 'Groundnut', 'Sugarcane', 'Black gram', 'Green gram', 'Banana', 'Coconut', 'Mango', 'Pineapple', 'Jackfruit'];
        case 'punjab':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'rajasthan':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Cotton', 'Groundnut', 'Mustard', 'Bajra', 'Moong', 'Urad'];
        case 'sikkim':
            return ['Maize', 'Wheat', 'Rice', 'Potato', 'Barley', 'Buckwheat', 'Soybean', 'Mustard', 'Ginger', 'Turmeric'];
        case 'tamil nadu':
            return ['Rice', 'Millets', 'Maize', 'Groundnut', 'Sugarcane', 'Cotton', 'Chillies', 'Turmeric', 'Onion', 'Tomato'];
        case 'telangana':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'tripura':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Oilseeds', 'Fruits', 'Spices', 'Tea', 'Rubber'];
        case 'uttar pradesh':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal'];
        case 'uttarakhand':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Apple'];
        case 'west bengal':
            return ['Rice', 'Wheat', 'Maize', 'Pulses', 'Jute', 'Potato', 'Sweet potato', 'Onion', 'Tomato', 'Brinjal'];
        default:
            return [];
    }
}



function getCropSuggestionsForJuly(location) {
    switch (location.toLowerCase()) {
        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Banana', 'Pineapple', 'Turmeric', 'Ginger', 'Black pepper', 'Vanilla', 'Areca nut', 'Sweet potato'];
        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Buckwheat', 'Mustard', 'Sesame', 'Groundnut', 'Turmeric'];
        case 'assam':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Gram', 'Turmeric', 'Ginger', 'Mustard', 'Linseed', 'Sugarcane'];
        case 'bihar':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato'];
        case 'chandigarh':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean'];
        case 'dadra and nagar haveli':
        case 'daman and diu':
        case 'delhi':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'goa':
            return ['Rice', 'Maize', 'Finger millet', 'Pulses', 'Cashew nut', 'Coconut', 'Sugarcane', 'Arecanut', 'Betel vine', 'Ginger'];
        case 'gujarat':
            return ['Wheat', 'Pulses', 'Bajra', 'Groundnut', 'Cotton', 'Rapeseed', 'Mustard', 'Cumin', 'Sugarcane', 'Tobacco'];
        case 'haryana':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'himachal pradesh':
            return ['Maize', 'Wheat', 'Barley', 'Rice', 'Maize', 'Barley', 'Wheat', 'Apple', 'Stone fruit', 'Vegetables'];
        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Fruits', 'Saffron', 'Walnut', 'Almond', 'Potato'];
        case 'jharkhand':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Mustard', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean', 'Potato'];
        case 'karnataka':
            return ['Rice', 'Ragi', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Castor', 'Cotton', 'Maize', 'Sugarcane'];
        case 'kerala':
            return ['Rice', 'Tapioca', 'Fruits', 'Coconut', 'Rubber', 'Black pepper', 'Ginger', 'Turmeric', 'Banana', 'Pineapple'];
        case 'lakshadweep':
            return ['Coconut', 'Bread fruit', 'Banana', 'Papaya', 'Yam', 'Sweet potato', 'Tapioca', 'Drumstick', 'Mango', 'Jasmine'];
        case 'madhya pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Soybean', 'Pulses', 'Oilseeds', 'Cotton', 'Maize', 'Jowar'];
        case 'madhya pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Soybean', 'Pulses', 'Oilseeds', 'Cotton', 'Maize', 'Jowar'];
        case 'maharashtra':
            return ['Rice', 'Wheat', 'Jowar', 'Bajra', 'Pulses', 'Cotton', 'Sugarcane', 'Groundnut', 'Soybean', 'Maize'];
        case 'manipur':
            return ['Rice', 'Maize', 'Pulses', 'Oilseeds', 'Groundnut', 'Sugarcane', 'Potato', 'Vegetables', 'Fruits', 'Flowers'];
        case 'meghalaya':
            return ['Rice', 'Maize', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Jute', 'Tobacco', 'Fruits'];
        case 'mizoram':
            return ['Rice', 'Maize', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Jute', 'Tobacco', 'Fruits'];
        case 'nagaland':
            return ['Rice', 'Maize', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Jute', 'Tobacco', 'Fruits'];
        case 'odisha':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Coconut', 'Cashew nut', 'Ginger', 'Turmeric', 'Banana'];
        case 'puducherry':
            return ['Rice', 'Groundnut', 'Banana', 'Sugarcane', 'Coconut', 'Black gram', 'Green gram', 'Horse gram', 'Pulses', 'Vegetables'];
        case 'punjab':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Sugarcane', 'Cotton', 'Mustard', 'Groundnut', 'Potato'];
        case 'rajasthan':
            return ['Wheat', 'Barley', 'Jowar', 'Bajra', 'Pulses', 'Sugarcane', 'Cotton', 'Mustard', 'Groundnut', 'Moth bean'];
        case 'sikkim':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Buckwheat', 'Potato', 'Ginger', 'Turmeric', 'Large cardamom'];
        case 'tamil nadu':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Coconut', 'Banana', 'Turmeric', 'Black gram', 'Green gram', 'Cashew nut'];
        case 'telangana':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Sesame', 'Sunflower', 'Castor', 'Chillies'];
        case 'tripura':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Potato', 'Vegetables', 'Fruits', 'Rubber', 'Jute'];
        case 'uttar pradesh':
            return ['Rice', 'Wheat', 'Barley', 'Gram', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato'];
        case 'uttarakhand':
            return ['Rice', 'Wheat', 'Barley', 'Gram', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato'];
        case 'west bengal':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Potato', 'Jute', 'Tea', 'Tobacco', 'Vegetables'];
        default:
            return [];
    }
}


function getCropSuggestionsForAugust(location) {
    switch (location.toLowerCase()) {
        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Banana', 'Pineapple', 'Turmeric', 'Ginger', 'Black pepper', 'Vanilla', 'Areca nut', 'Sweet potato'];
        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];
        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Buckwheat', 'Mustard', 'Sesame', 'Groundnut', 'Turmeric'];
        case 'assam':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Gram', 'Turmeric', 'Ginger', 'Mustard', 'Linseed', 'Sugarcane'];
        case 'bihar':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato'];
        case 'chandigarh':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean'];
        case 'dadra and nagar haveli':
        case 'daman and diu':
        case 'delhi':
            return ['Wheat', 'Barley', 'Pulses', 'Mustard', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal', 'Cabbage'];
        case 'goa':
            return ['Rice', 'Maize', 'Finger millet', 'Pulses', 'Cashew nut', 'Coconut', 'Sugarcane', 'Arecanut', 'Betel vine', 'Ginger'];
        case 'gujarat':
            return ['Wheat', 'Pulses', 'Bajra', 'Groundnut', 'Cotton', 'Rapeseed', 'Mustard', 'Cumin', 'Sugarcane', 'Tobacco'];
        case 'haryana':
            return ['Wheat', 'Barley', 'Gram', 'Mustard', 'Sugarcane', 'Cotton', 'Rapeseed', 'Maize', 'Jowar', 'Bajra'];
        case 'himachal pradesh':
            return ['Maize', 'Wheat', 'Barley', 'Rice', 'Maize', 'Barley', 'Wheat', 'Apple', 'Stone fruit', 'Vegetables'];
        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Fruits', 'Saffron', 'Walnut', 'Almond', 'Potato'];
        case 'jharkhand':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Mustard', 'Sugarcane', 'Sesame', 'Sunflower', 'Soybean', 'Potato'];
        case 'karnataka':
            return ['Rice', 'Ragi', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Castor', 'Cotton', 'Maize', 'Sugarcane'];
        case 'kerala':
            return ['Rice', 'Tapioca', 'Fruits', 'Coconut', 'Rubber', 'Black pepper', 'Ginger', 'Turmeric', 'Banana', 'Pineapple'];
        case 'lakshadweep':
            return ['Coconut', 'Bread fruit', 'Banana', 'Papaya', 'Yam', 'Sweet potato', 'Tapioca', 'Drumstick', 'Mango', 'Jasmine'];
        case 'madhya pradesh':
            return ['Wheat', 'Barley', 'Gram', 'Sugarcane', 'Soybean', 'Pulses', 'Oilseeds', 'Cotton', 'Maize', 'Jowar'];
        case 'maharashtra':
            return ['Rice', 'Jowar', 'Bajra', 'Wheat', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Soybean'];

        case 'manipur':
            return ['Rice', 'Maize', 'Sugarcane', 'Pulses', 'Oilseeds', 'Potato', 'Mustard', 'Ginger', 'Turmeric', 'Chilli'];

        case 'meghalaya':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Potato', 'Mustard', 'Sugarcane', 'Ginger', 'Turmeric', 'Black pepper'];

        case 'mizoram':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Sugarcane'];

        case 'nagaland':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Pulses', 'Oilseeds', 'Potato', 'Mustard', 'Sugarcane'];

        case 'odisha':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Turmeric', 'Ginger'];

        case 'puducherry':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Cotton', 'Pulses', 'Oilseeds', 'Tapioca', 'Banana', 'Coconut'];

        case 'punjab':
            return ['Rice', 'Wheat', 'Barley', 'Gram', 'Pulses', 'Sugarcane', 'Cotton', 'Potato', 'Maize', 'Jowar'];

        case 'rajasthan':
            return ['Wheat', 'Barley', 'Gram', 'Pulses', 'Sugarcane', 'Cotton', 'Mustard', 'Bajra', 'Jowar', 'Groundnut'];

        case 'sikkim':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Ginger', 'Turmeric', 'Buckwheat', 'Apple'];

        case 'tamil nadu':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Cotton', 'Pulses', 'Oilseeds', 'Chillies', 'Turmeric', 'Banana'];

        case 'telangana':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];

        case 'tripura':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Chilli'];

        case 'uttar pradesh':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal'];

        case 'uttarakhand':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Sugarcane', 'Potato', 'Tomato', 'Onion', 'Cabbage'];

        case 'west bengal':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Jute', 'Sugarcane', 'Potato', 'Tomato', 'Onion'];

        default:
            return [];
    }
}


function getCropSuggestionsForSeptember(location) {
    switch (location.toLowerCase()) {
        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Arecanut', 'Banana', 'Turmeric', 'Ginger', 'Black pepper', 'Betel vine', 'Cashew', 'Sweet potato'];

        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Bajra', 'Red gram', 'Black gram', 'Green gram', 'Sesame', 'Sunflower'];

        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millets', 'Wheat', 'Pulses', 'Mustard', 'Potato', 'Ginger', 'Turmeric', 'Oilseeds'];

        case 'assam':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Jute'];

        case 'bihar':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'chandigarh':
            return ['Wheat', 'Maize', 'Barley', 'Rice', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Mustard', 'Sugarcane'];

        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Wheat', 'Soybean', 'Sunflower', 'Mustard', 'Turmeric'];

        case 'dadra and nagar haveli and daman and diu':
            return ['Rice', 'Wheat', 'Pulses', 'Groundnut', 'Sugarcane', 'Maize', 'Banana', 'Mango', 'Guava', 'Coconut'];

        case 'delhi':
            return ['Wheat', 'Maize', 'Barley', 'Rice', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Mustard', 'Sugarcane'];

        case 'goa':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Coconut', 'Cashew', 'Banana', 'Mango', 'Black pepper'];

        case 'gujarat':
            return ['Cotton', 'Groundnut', 'Maize', 'Sesame', 'Sugarcane', 'Pulses', 'Mustard', 'Potato', 'Onion', 'Tomato'];

        case 'haryana':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Sugarcane', 'Cotton', 'Tomato', 'Mustard', 'Potato'];

        case 'himachal pradesh':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Apple', 'Plum'];

        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Apple', 'Plum', 'Cherry', 'Peach'];

        case 'jharkhand':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'karnataka':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Jowar', 'Ragi', 'Bajra', 'Turmeric', 'Coconut', 'Areca nut'];

        case 'kerala':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Coconut', 'Pepper', 'Tapioca', 'Banana', 'Rubber', 'Cardamom'];

        case 'ladakh':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Apple', 'Plum'];

        case 'lakshadweep':
            return ['Coconut', 'Arecanut', 'Rice', 'Banana', 'Turmeric', 'Ginger', 'Black pepper', 'Cashew', 'Sweet potato', 'Pulses'];

        case 'madhya pradesh':
            return ['Soybean', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Wheat', 'Mustard', 'Sesame', 'Sunflower'];

        case 'maharashtra':
            return ['Rice', 'Jowar', 'Bajra', 'Wheat', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Soybean'];

        case 'manipur':
            return ['Rice', 'Maize', 'Sugarcane', 'Pulses', 'Oilseeds', 'Potato', 'Mustard', 'Ginger', 'Turmeric', 'Chilli'];

        case 'meghalaya':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Potato', 'Mustard', 'Sugarcane', 'Ginger', 'Turmeric', 'Black pepper'];

        case 'mizoram':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Sugarcane'];

        case 'nagaland':
            return ['Rice', 'Maize', 'Millet', 'Wheat', 'Barley', 'Pulses', 'Oilseeds', 'Potato', 'Mustard', 'Sugarcane'];

        case 'odisha':
            return ['Rice', 'Maize', 'Jowar', 'Bajra', 'Pulses', 'Groundnut', 'Sugarcane', 'Cotton', 'Turmeric', 'Ginger'];

        case 'puducherry':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Cotton', 'Pulses', 'Oilseeds', 'Tapioca', 'Banana', 'Coconut'];

        case 'punjab':
            return ['Rice', 'Wheat', 'Barley', 'Gram', 'Pulses', 'Sugarcane', 'Cotton', 'Potato', 'Maize', 'Jowar'];

        case 'rajasthan':
            return ['Wheat', 'Barley', 'Gram', 'Pulses', 'Sugarcane', 'Cotton', 'Mustard', 'Bajra', 'Jowar', 'Groundnut'];

        case 'sikkim':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Ginger', 'Turmeric', 'Buckwheat', 'Apple'];

        case 'tamil nadu':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Cotton', 'Pulses', 'Oilseeds', 'Chillies', 'Turmeric', 'Banana'];

        case 'telangana':
            return ['Rice', 'Maize', 'Sugarcane', 'Groundnut', 'Sesame', 'Red gram', 'Green gram', 'Black gram', 'Soybean', 'Sunflower'];

        case 'tripura':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Chilli'];

        case 'uttar pradesh':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Sugarcane', 'Potato', 'Onion', 'Tomato', 'Brinjal'];

        case 'uttarakhand':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Sugarcane', 'Potato', 'Tomato', 'Onion', 'Cabbage'];

        case 'west bengal':
            return ['Rice', 'Wheat', 'Maize', 'Barley', 'Pulses', 'Jute', 'Sugarcane', 'Potato', 'Tomato', 'Onion'];

        default:
            return [];
    }
}


function getCropSuggestionsForOctober(location) {
    switch (location.toLowerCase()) {
        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Arecanut', 'Banana', 'Turmeric', 'Ginger', 'Black pepper', 'Betel vine', 'Cashew', 'Sweet potato'];

        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Bajra', 'Red gram', 'Black gram', 'Green gram', 'Sesame', 'Sunflower'];

        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millets', 'Wheat', 'Pulses', 'Mustard', 'Potato', 'Ginger', 'Turmeric', 'Oilseeds'];

        case 'assam':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Jute'];

        case 'bihar':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'chandigarh':
            return ['Wheat', 'Maize', 'Barley', 'Rice', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Mustard', 'Sugarcane'];

        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Wheat', 'Soybean', 'Sunflower', 'Mustard', 'Turmeric'];

        case 'dadra and nagar haveli and daman and diu':
            return ['Rice', 'Wheat', 'Pulses', 'Groundnut', 'Sugarcane', 'Maize', 'Banana', 'Mango', 'Guava', 'Coconut'];

        case 'delhi':
            return ['Wheat', 'Maize', 'Barley', 'Rice', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Mustard', 'Sugarcane'];

        case 'goa':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Coconut', 'Cashew', 'Banana', 'Mango', 'Black pepper'];

        case 'gujarat':
            return ['Cotton', 'Groundnut', 'Maize', 'Sesame', 'Sugarcane', 'Pulses', 'Mustard', 'Potato', 'Onion', 'Tomato'];

        case 'haryana':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Sugarcane', 'Cotton', 'Tomato', 'Mustard', 'Potato'];

        case 'himachal pradesh':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Apple', 'Plum'];

        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Apple', 'Plum', 'Cherry', 'Peach'];

        case 'jharkhand':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'karnataka':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Jowar', 'Ragi', 'Bajra', 'Turmeric', 'Coconut', 'Areca nut'];

        case 'kerala':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Coconut', 'Pepper', 'Tapioca', 'Banana', 'Rubber', 'Cardamom'];

        case 'ladakh':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Apple', 'Plum'];

        case 'lakshadweep':
            return ['Coconut', 'Arecanut', 'Rice', 'Banana', 'Turmeric', 'Ginger', 'Black pepper', 'Cashew', 'Sweet potato', 'Pulses'];

        case 'madhya pradesh':
            return ['Soybean', 'Wheat', 'Maize', 'Pulses', 'Barley', 'Mustard', 'Groundnut', 'Sugarcane', 'Cotton', 'Sesame'];

        case 'maharashtra':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Soybean', 'Cotton', 'Pulses', 'Wheat', 'Turmeric', 'Sunflower'];

        case 'manipur':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'meghalaya':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'mizoram':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'nagaland':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'odisha':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Pulses', 'Coconut', 'Turmeric', 'Ginger', 'Cashew', 'Banana'];

        case 'puducherry':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Turmeric', 'Ginger', 'Banana', 'Cashew', 'Black gram', 'Pulses'];

        case 'punjab':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Sugarcane', 'Cotton', 'Potato', 'Tomato', 'Mustard'];

        case 'rajasthan':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Sugarcane', 'Cotton', 'Mustard', 'Potato', 'Onion'];

        case 'sikkim':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Cabbage', 'Cauliflower', 'Carrot'];

        case 'tamil nadu':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Turmeric', 'Banana', 'Coconut', 'Tapioca', 'Black gram', 'Pulses'];

        case 'telangana':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Bajra', 'Red gram', 'Black gram', 'Green gram', 'Sesame', 'Sunflower'];

        case 'tripura':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'uttar pradesh':
            return ['Rice', 'Wheat', 'Maize', 'Pulses', 'Sugarcane', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage'];

        case 'uttarakhand':
            return ['Rice', 'Wheat', 'Maize', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Apple', 'Plum', 'Cherry'];

        case 'west bengal':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        default:
            return [];
    }
}


function getCropSuggestionsForNovember(location) {
    switch (location.toLowerCase()) {

        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Arecanut', 'Banana', 'Turmeric', 'Ginger', 'Black pepper', 'Betel vine', 'Cashew', 'Sweet potato'];

        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Bajra', 'Red gram', 'Black gram', 'Green gram', 'Sesame', 'Sunflower'];

        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millets', 'Wheat', 'Pulses', 'Mustard', 'Potato', 'Ginger', 'Turmeric', 'Oilseeds'];

        case 'assam':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Jute'];

        case 'bihar':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'chandigarh':
            return ['Wheat', 'Maize', 'Barley', 'Rice', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Mustard', 'Sugarcane'];

        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Wheat', 'Soybean', 'Sunflower', 'Mustard', 'Turmeric'];

        case 'dadra and nagar haveli and daman and diu':
            return ['Rice', 'Wheat', 'Pulses', 'Groundnut', 'Sugarcane', 'Maize', 'Banana', 'Mango', 'Guava', 'Coconut'];

        case 'delhi':
            return ['Wheat', 'Maize', 'Barley', 'Rice', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Mustard', 'Sugarcane'];

        case 'goa':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Coconut', 'Cashew', 'Banana', 'Mango', 'Black pepper'];

        case 'gujarat':
            return ['Cotton', 'Groundnut', 'Maize', 'Sesame', 'Sugarcane', 'Pulses', 'Mustard', 'Potato', 'Onion', 'Tomato'];

        case 'haryana':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Sugarcane', 'Cotton', 'Tomato', 'Mustard', 'Potato'];

        case 'himachal pradesh':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Apple', 'Plum'];

        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Apple', 'Plum', 'Cherry', 'Peach'];

        case 'jharkhand':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'karnataka':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Jowar', 'Ragi', 'Bajra', 'Turmeric', 'Coconut', 'Areca nut'];

        case 'kerala':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Coconut', 'Pepper', 'Tapioca', 'Banana', 'Rubber', 'Cardamom'];

        case 'ladakh':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Apple', 'Plum'];

        case 'lakshadweep':
            return ['Coconut', 'Arecanut', 'Rice', 'Banana', 'Turmeric', 'Ginger', 'Black pepper', 'Cashew', 'Sweet potato','Pumpkin', 'Cucumber'];

        case 'madhya pradesh':
            return ['Soybean', 'Wheat', 'Pulses', 'Maize', 'Groundnut', 'Mustard', 'Sugarcane', 'Sesame', 'Sunflower', 'Potato'];

        case 'maharashtra':
            return ['Rice', 'Jowar', 'Bajra', 'Maize', 'Wheat', 'Sugarcane', 'Cotton', 'Groundnut', 'Soybean', 'Turmeric'];

        case 'manipur':
            return ['Rice', 'Maize', 'Pulses', 'Potato', 'Sugarcane', 'Oilseeds', 'Turmeric', 'Ginger', 'Chillies', 'Tomato'];

        case 'meghalaya':
            return ['Rice', 'Maize', 'Potato', 'Pulses', 'Oilseeds', 'Sugarcane', 'Ginger', 'Turmeric', 'Cabbage', 'Cauliflower'];

        case 'mizoram':
            return ['Rice', 'Maize', 'Vegetables', 'Pulses', 'Sugarcane', 'Banana', 'Orange', 'Guava', 'Pineapple', 'Cashew'];

        case 'nagaland':
            return ['Rice', 'Maize', 'Millet', 'Pulses', 'Sugarcane', 'Potato', 'Oilseeds', 'Ginger', 'Turmeric', 'Chillies'];

        case 'odisha':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Pulses', 'Turmeric', 'Ginger', 'Cotton', 'Mustard', 'Tomato'];

        case 'puducherry':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Pulses', 'Turmeric', 'Banana', 'Coconut', 'Arecanut', 'Black gram'];

        case 'punjab':
            return ['Wheat', 'Rice', 'Maize', 'Pulses', 'Barley', 'Mustard', 'Potato', 'Sugarcane', 'Cotton', 'Sunflower'];

        case 'rajasthan':
            return ['Wheat', 'Barley', 'Millet', 'Maize', 'Pulses', 'Groundnut', 'Mustard', 'Sugarcane', 'Sesame', 'Onion'];

        case 'sikkim':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Ginger', 'Turmeric', 'Apple', 'Orange'];

        case 'tamil nadu':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Cotton', 'Millets', 'Pulses', 'Turmeric', 'Banana', 'Coconut'];

        case 'telangana':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Bajra', 'Red gram', 'Black gram', 'Green gram', 'Sesame', 'Sunflower'];

        case 'tripura':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Potato', 'Tomato', 'Onion', 'Chillies', 'Ginger', 'Turmeric'];

        case 'uttar pradesh':
            return ['Wheat', 'Rice', 'Maize', 'Pulses', 'Barley', 'Mustard', 'Potato', 'Sugarcane', 'Cotton', 'Sunflower'];

        case 'uttarakhand':
            return ['Rice', 'Wheat', 'Maize', 'Pulses', 'Barley', 'Potato', 'Tomato', 'Onion', 'Apple', 'Plum'];

        case 'west bengal':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        default:
            return [];
    }
}


function getCropSuggestionsForDecember(location) {
    switch (location.toLowerCase()) {

        case 'andaman and nicobar islands':
            return ['Rice', 'Coconut', 'Arecanut', 'Banana', 'Turmeric', 'Ginger', 'Black pepper', 'Betel vine', 'Cashew', 'Sweet potato'];

        case 'andhra pradesh':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Bajra', 'Red gram', 'Black gram', 'Green gram', 'Sesame', 'Sunflower'];

        case 'arunachal pradesh':
            return ['Rice', 'Maize', 'Millets', 'Wheat', 'Pulses', 'Mustard', 'Potato', 'Ginger', 'Turmeric', 'Oilseeds'];

        case 'assam':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Oilseeds', 'Potato', 'Ginger', 'Turmeric', 'Jute'];

        case 'bihar':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'chandigarh':
            return ['Wheat', 'Maize', 'Barley', 'Rice', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Mustard', 'Sugarcane'];

        case 'chhattisgarh':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Wheat', 'Soybean', 'Sunflower', 'Mustard', 'Turmeric'];

        case 'dadra and nagar haveli and daman and diu':
            return ['Rice', 'Wheat', 'Pulses', 'Groundnut', 'Sugarcane', 'Maize', 'Banana', 'Mango', 'Guava', 'Coconut'];

        case 'delhi':
            return ['Wheat', 'Maize', 'Barley', 'Rice', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Mustard', 'Sugarcane'];

        case 'goa':
            return ['Rice', 'Maize', 'Pulses', 'Groundnut', 'Sugarcane', 'Coconut', 'Cashew', 'Banana', 'Mango', 'Black pepper'];

        case 'gujarat':
            return ['Cotton', 'Groundnut', 'Maize', 'Sesame', 'Sugarcane', 'Pulses', 'Mustard', 'Potato', 'Onion', 'Tomato'];

        case 'haryana':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Sugarcane', 'Cotton', 'Tomato', 'Mustard', 'Potato'];

        case 'himachal pradesh':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Apple', 'Plum'];

        case 'jammu and kashmir':
            return ['Rice', 'Maize', 'Wheat', 'Barley', 'Pulses', 'Potato', 'Apple', 'Plum', 'Cherry', 'Peach'];

        case 'jharkhand':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'karnataka':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Jowar', 'Ragi', 'Bajra', 'Turmeric', 'Coconut', 'Areca nut'];

        case 'kerala':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Coconut', 'Pepper', 'Tapioca', 'Banana', 'Rubber', 'Cardamom'];

        case 'ladakh':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Apple', 'Plum'];

        case 'lakshadweep':
            return ['Coconut', 'Arecanut', 'Rice', 'Banana', 'Turmeric', 'Ginger', 'Black pepper', 'Betel vine', 'Sweet potato', 'Pulses'];

        case 'madhya pradesh':
            return ['Soybean', 'Wheat', 'Maize', 'Pulses', 'Sugarcane', 'Groundnut', 'Mustard', 'Potato', 'Onion', 'Tomato'];

        case 'maharashtra':
            return ['Rice', 'Jowar', 'Bajra', 'Maize', 'Wheat', 'Sugarcane', 'Groundnut', 'Soybean', 'Cotton', 'Tomato'];

        case 'manipur':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'meghalaya':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'mizoram':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'nagaland':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'odisha':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Jowar', 'Ragi', 'Bajra', 'Turmeric', 'Coconut', 'Areca nut'];

        case 'puducherry':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Coconut', 'Pepper', 'Tapioca', 'Banana', 'Rubber', 'Cardamom'];

        case 'punjab':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Cotton', 'Sugarcane', 'Potato', 'Tomato', 'Mustard'];

        case 'rajasthan':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Sugarcane', 'Cotton', 'Tomato', 'Mustard', 'Potato'];

        case 'sikkim':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'tamil nadu':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Jowar', 'Ragi', 'Bajra', 'Turmeric', 'Coconut', 'Areca nut'];

        case 'telangana':
            return ['Rice', 'Maize', 'Groundnut', 'Sugarcane', 'Bajra', 'Red gram', 'Black gram', 'Green gram', 'Sesame', 'Sunflower'];

        case 'tripura':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        case 'uttar pradesh':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Cotton', 'Sugarcane', 'Potato', 'Tomato', 'Mustard'];

        case 'uttarakhand':
            return ['Wheat', 'Barley', 'Rice', 'Maize', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Apple', 'Plum'];

        case 'west bengal':
            return ['Rice', 'Maize', 'Wheat', 'Pulses', 'Potato', 'Tomato', 'Onion', 'Brinjal', 'Cabbage', 'Cauliflower'];

        default:
            return [];
    }
}
