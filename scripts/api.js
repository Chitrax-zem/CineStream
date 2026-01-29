// API Configuration
const API_BASE_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f794130c';
const API_KEY = 'f794130c'; // In a real app, this should be secure

// In a real implementation, you would have functions like:

async function fetchMovies(endpoint, params = {}) {
    try {
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(`${API_BASE_URL}/${endpoint}?api_key=${API_KEY}&${queryString}`);
        
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
}

async function getPopularMovies() {
    return fetchMovies('movie/popular');
}

async function getTrendingMovies() {
    return fetchMovies('trending/movie/week');
}

async function searchMovies(query) {
    return fetchMovies('search/movie', { query });
}

async function getMovieDetails(movieId) {
    return fetchMovies(`movie/${movieId}`);
}

// Streaming functions
async function getStreamURL(contentId) {
    try {
        // In a real app, this would get the streaming URL from your backend
        // This is a mock implementation
        const response = await fetch(`${API_BASE_URL}/stream/${contentId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getUserToken()}`, // Assume we have a function to get user token
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Failed to get stream URL: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error getting stream URL:', error);
        throw error;
    }
}

// User management
async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        if (!response.ok) {
            throw new Error(`Login failed: ${response.status}`);
        }
        
        const data = await response.json();
        localStorage.setItem('authToken', data.token); // Store token
        localStorage.setItem('user', JSON.stringify(data.user)); // Store user data
        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

async function registerUser(userData) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            throw new Error(`Registration failed: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

// Helper functions
function getUserToken() {
    return localStorage.getItem('authToken');
}

function isAuthenticated() {
    return !!getUserToken();
}

// Expose functions to window for testing (in a real app, you'd use modules)
window.cineStreamAPI = {
    fetchMovies,
    getPopularMovies,
    getTrendingMovies,
    searchMovies,
    getMovieDetails,
    getStreamURL,
    loginUser,
    registerUser,
    isAuthenticated
};
