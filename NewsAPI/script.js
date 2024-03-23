const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();

const apiKey = 'df1dcb436b034d1a9c2f9081fe7f7968';
const query = 'farming agriculture India';
const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-02-22&sortBy=publishedAt&apiKey=${apiKey}`;

// Function to fetch farming and agriculture-specific news data from India
async function fetchFarmingAndAgricultureNews() {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching farming and agriculture news data:', error.message);
        return null;
    }
}

// Call the function to fetch farming and agriculture-specific news data and log the result
fetchFarmingAndAgricultureNews()
    .then(newsData => {
        if (newsData) {
            console.log('Farming and agriculture news data:', newsData);
            // Process and display the news data on your website here
        } else {
            console.log('Failed to fetch farming and agriculture news data.');
        }
    });
