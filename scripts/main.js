// DOM Elements
const authBtn = document.getElementById('auth-btn');
const authModal = document.getElementById('auth-modal');
const closeBtn = document.querySelector('.close-btn');
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const searchBar = document.querySelector('.search-bar');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
// Premium modal elements// Add these to the top with other DOM elements
const premiumCtaBtn = document.getElementById('premium-cta-btn');
const premiumTourBtn = document.getElementById('premium-tour-btn');
const planTabs = document.querySelectorAll('.plan-tab');
const planSelectBtns = document.querySelectorAll('.plan-select');
const premiumSuccessModal = document.getElementById('premium-success');
const premiumSuccessBtn = document.getElementById('premium-success-btn');

// Premium interactive features
premiumCtaBtn.addEventListener('click', (e) => {
  e.preventDefault();
  premiumModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

premiumTourBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // Show an interactive tour of premium features
  alert('🚀 Welcome to the Premium Tour! Here are some exclusive benefits you\'ll get:\n\n- 4K Ultra HD Streaming\n- Download Movies & Shows\n- Ad-Free Experience\n- Watch on 4 Devices\n- Early Access to New Releases\n\nClick the "Upgrade Now" button to get started!');
});

// Monthly/Yearly plan switch
planTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    planTabs.forEach(t => t.classList.remove('active'));
    // Add active class to clicked tab
    tab.classList.add('active');
    
    const period = tab.dataset.period;
    // Update all price displays
    document.querySelectorAll('.price').forEach(priceElement => {
      const monthlyPrice = priceElement.dataset.monthly;
      const yearlyPrice = priceElement.dataset.yearly;
      priceElement.textContent = period === 'monthly' ? monthlyPrice : yearlyPrice;
      priceElement.innerHTML += '<span>/month</span>'; // Re-add the span
      
      if (period === 'yearly') {
        // Add a small "billed annually" text for yearly plans
        if (!priceElement.nextElementSibling || 
            !priceElement.nextElementSibling.classList.contains('billed-text')) {
          const billedText = document.createElement('div');
          billedText.className = 'billed-text';
          billedText.textContent = 'billed annually';
          priceElement.parentNode.insertBefore(billedText, priceElement.nextSibling);
        }
      } else {
        // Remove the "billed annually" text
        const billedText = priceElement.nextElementSibling;
        if (billedText && billedText.classList.contains('billed-text')) {
          billedText.remove();
        }
      }
    });
  });
});

// Plan selection logic
planSelectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const planCard = btn.closest('.plan-card');
    const planName = planCard.querySelector('h3').textContent;
    
    // Show loading state
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    
    // Simulate payment processing
    setTimeout(() => {
      // Hide the plans and show success message
      document.querySelector('.plans-container').style.display = 'none';
      document.querySelector('.payment-methods').style.display = 'none';
      premiumSuccessModal.classList.remove('hidden');
      
      // In a real app, you would actually process payment here
      console.log(`Selected plan: ${planName}`);
    }, 1500);
  });
});

// Premium success modal close
premiumSuccessBtn.addEventListener('click', () => {
  premiumModal.style.display = 'none';
  premiumSuccessModal.classList.add('hidden');
  document.querySelector('.plans-container').style.display = 'flex';
  document.querySelector('.payment-methods').style.display = 'block';
  document.body.style.overflow = 'auto';
  
  // Reset the plan select buttons
  planSelectBtns.forEach(btn => {
    btn.innerHTML = 'Select Plan';
  });
  
  // Show a welcome message with premium features
  alert(`🎉 Welcome to CineStream Premium! Your account has been upgraded. Enjoy these new features:\n\n- Unlimited 4K Streaming\n- Download up to 10 titles\n- No advertisements\n- Early access to new releases\n- Exclusive premium content`);
});

// Add an event listener for the premium section link
document.querySelector('a[href="#premium"]').addEventListener('click', (e) => {
  e.preventDefault();
  premiumModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  // Scroll the modal to the top for better UX
  document.querySelector('.premium-plans').scrollTop = 0;
});

const premiumModal = document.getElementById('premium-modal');
const premiumLinks = document.querySelectorAll('a[href="#premium"], .btn-primary:not(.mobile-menu-btn)');
const premiumClose = document.querySelector('.premium-close');

// Premium modal functionality
premiumLinks.forEach(link => {
link.addEventListener('click', (e) => {
if (e.target.getAttribute('href') === '#premium' || e.target.classList.contains('btn-primary')) {
e.preventDefault();
premiumModal.style.display = 'flex';
document.body.style.overflow = 'hidden';
}
});
});

premiumClose.addEventListener('click', () => {
premiumModal.style.display = 'none';
document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
if (e.target === premiumModal) {
premiumModal.style.display = 'none';
document.body.style.overflow = 'auto';
}
});


// Modal functionality
authBtn.addEventListener('click', () => {
authModal.style.display = 'flex';
document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
authModal.style.display = 'none';
document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
if (e.target === authModal) {
authModal.style.display = 'none';
document.body.style.overflow = 'auto';
}
});

// Search functionality
searchForm.addEventListener('submit', (e) => {
e.preventDefault();
performSearch();
});

// Also allow pressing Enter to submit
searchInput.addEventListener('keydown', (e) => {
if (e.key === 'Enter') {
e.preventDefault();
performSearch();
}
});

// Tab switching
loginTab.addEventListener('click', () => {
loginTab.classList.add('active');
signupTab.classList.remove('active');
loginForm.classList.remove('hidden');
signupForm.classList.add('hidden');
});

signupTab.addEventListener('click', () => {
signupTab.classList.add('active');
loginTab.classList.remove('active');
signupForm.classList.remove('hidden');
loginForm.classList.add('hidden');
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
navLinks.classList.toggle('active');
searchBar.classList.toggle('active');
});
// Add this code to your main.js file, preferably near the other event listeners

// Get the home link
const homeLink = document.querySelector('a[href="#home"]');

// Add click event for home link
homeLink.addEventListener('click', (e) => {
e.preventDefault();

// Remove any existing all movies section
const allMoviesSection = document.getElementById('all-movies-section');
if (allMoviesSection) {
allMoviesSection.remove();
}

// Show all sections that might be hidden
document.querySelector('.hero').style.display = 'block';
document.querySelectorAll('.content-section').forEach(section => {
section.style.display = 'block';
});

// Scroll to top of page
window.scrollTo(0, 0);
});


// Hero slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
slides.forEach((slide, i) => {
slide.classList.toggle('active', i === index);
});
}

function nextSlide() {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// Scroll effect for header
window.addEventListener('scroll', () => {
const header = document.querySelector('.main-header');
if (window.scrollY > 50) {
header.style.backgroundColor = 'rgba(15, 15, 26, 0.9)';
header.style.backdropFilter = 'blur(10px)';
header.style.padding = '0.5rem 5%';
} else {
header.style.backgroundColor = 'transparent';
header.style.backdropFilter = 'none';
header.style.padding = '1rem 5%';
}
});


// Load movie data
document.addEventListener('DOMContentLoaded', () => {
fetchPopularMovies();
fetchTrendingMovies();
loadContinueWatching();
});

// Sample movie data (in a real app, this would come from an API)
const popularMovies = [
{
id: 1,
title: "Guardians of the Galaxy Vol. 3",
poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
year: "2023",
rating: "8.2/10",
genre: "Action, Adventure"
},
{
id: 2,
title: "Spider-Man: Across the Spider-Verse",
poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
year: "2023",
rating: "8.6/10",
genre: "Animation, Action"
},
{
id: 3,
title: "The Super Mario Bros. Movie",
poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
year: "2023",
rating: "7.8/10",
genre: "Animation, Adventure"
},
{
id: 4,
title: "John Wick: Chapter 4",
poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
year: "2023",
rating: "7.8/10",
genre: "Action, Crime"
},
{
id: 5,
title: "Oppenheimer",
poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
year: "2023",
rating: "8.5/10",
genre: "Biography, Drama"
},
{
id: 6,
title: "Barbie",
poster: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
year: "2023",
rating: "7.5/10",
genre: "Comedy, Adventure"
},
{
id: 16,
title: "Avatar: The Way of Water",
poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
year: "2022",
rating: "7.7/10",
genre: "Sci-Fi, Adventure"
},
{
id: 17,
title: "Black Panther: Wakanda Forever",
poster: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
year: "2022",
rating: "7.3/10",
genre: "Action, Adventure"
},
{
id: 18,
title: "Top Gun: Maverick",
poster: "https://image.tmdb.org/t/p/w500/jeGvNOVMs5QIU1VaoGvnd3gSv0G.jpg",
year: "2022",
rating: "8.3/10",
genre: "Action, Drama"
},
{
id: 24,
title: "Everything Everywhere All at Once",
poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
year: "2022",
rating: "8.3/10",
genre: "Sci-Fi, Comedy"
},
{
id: 25,
title: "The Batman",
poster: "https://image.tmdb.org/t/p/w500/seyWFgGInaLqW7nOZvu0ZC95rtx.jpg",
year: "2022",
rating: "7.7/10",
genre: "Action, Crime"
},
{
id: 26,
title: "Doctor Strange in the Multiverse of Madness",
poster: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
year: "2022",
rating: "7.3/10",
genre: "Action, Fantasy"
},
{
id: 27,
title: "Jurassic World Dominion",
poster: "https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
year: "2022",
rating: "6.0/10",
genre: "Action, Adventure"
},

{
id: 29,
title: "Thor: Love and Thunder",
poster: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
year: "2022",
rating: "6.2/10",
genre: "Action, Adventure"
}
];

const trendingMovies = [
{
id: 7,
title: "Extraction 2",
poster: "https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
year: "2023",
rating: "7.5/10",
genre: "Action, Thriller"
},
{
id: 8,
title: "Mission: Impossible - Dead Reckoning Part One",
poster: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
year: "2023",
rating: "8.0/10",
genre: "Action, Adventure"
},
{
id: 9,
title: "Elemental",
poster: "https://image.tmdb.org/t/p/w500/6oH378KUfCEitzJkm07r97L0RsZ.jpg",
year: "2023",
rating: "7.2/10",
genre: "Animation, Comedy"
},
{
id: 10,
title: "Fast X",
poster: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
year: "2023",
rating: "7.3/10",
genre: "Action, Adventure"
},
{
id: 11,
title: "The Little Mermaid",
poster: "https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
year: "2023",
rating: "6.8/10",
genre: "Adventure, Family"
},
{
id: 12,
title: "Transformers: Rise of the Beasts",
poster: "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
year: "2023",
rating: "7.4/10",
genre: "Action, Adventure"
},
{
id: 20,
title: "Dune",
poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
year: "2021",
rating: "8.0/10",
genre: "Sci-Fi, Adventure"
},
{
id: 21,
title: "No Time to Die",
poster: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
year: "2021",
rating: "7.3/10",
genre: "Action, Adventure"
},
{
id: 22,
title: "Shang-Chi and the Legend of the Ten Rings",
poster: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
year: "2021",
rating: "7.4/10",
genre: "Action, Adventure"
},
{
id: 23,
title: "Eternals",
poster: "https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg",
year: "2021",
rating: "6.3/10",
genre: "Action, Adventure"
},
{
id: 30,
title: "The Flash",
poster: "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
year: "2023",
rating: "6.8/10",
genre: "Action, Adventure"
},
{
id: 31,
title: "Indiana Jones and the Dial of Destiny",
poster: "https://image.tmdb.org/t/p/w500/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
year: "2023",
rating: "6.7/10",
genre: "Action, Adventure"
},
{
id: 32,
title: "Ant-Man and the Wasp: Quantumania",
poster: "https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
year: "2023",
rating: "6.1/10",
genre: "Action, Adventure"
},
{
id: 33,
title: "Creed III",
poster: "https://image.tmdb.org/t/p/w500/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
year: "2023",
rating: "7.1/10",
genre: "Drama, Sport"
},

{
id: 36,
title: "Killers of the Flower Moon",
poster: "https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
year: "2023",
rating: "8.0/10",
genre: "Crime, Drama"
}
];



const continueWatching = [
{
id: 13,
title: "Stranger Things",
episode: "S4 E3: The Monster and the Superhero",
poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
progress: 65,
timeLeft: "32 min"
},
{
id: 14,
title: "The Mandalorian",
episode: "S3 E5: The Pirate",
poster: "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
progress: 40,
timeLeft: "24 min"
},
{
id: 15,
title: "The Last of Us",
episode: "S1 E2: Infected",
poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
progress: 80,
timeLeft: "12 min"
}
];
const tvShows = [
{
id: 101,
title: "Stranger Things",
poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
year: "2016-Present",
rating: "8.7/10",
genre: "Sci-Fi, Horror",
seasons: 4
},
{
id: 102,
title: "The Mandalorian",
poster: "https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
year: "2019-Present",
rating: "8.5/10",
genre: "Sci-Fi, Western",
seasons: 3
},
{
id: 103,
title: "The Last of Us",
poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
year: "2023-Present",
rating: "8.8/10",
genre: "Drama, Action",
seasons: 1
},
{
id: 104,
title: "House of the Dragon",
poster: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
year: "2022-Present",
rating: "8.5/10",
genre: "Fantasy, Drama",
seasons: 1
},
{
id: 105,
title: "The Witcher",
poster: "https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg",
year: "2019-Present",
rating: "8.0/10",
genre: "Fantasy, Adventure",
seasons: 3
},
{
id: 106,
title: "Succession",
poster: "https://image.tmdb.org/t/p/w500/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
year: "2018-2023",
rating: "8.8/10",
genre: "Drama",
seasons: 4
},
{
id: 107,
title: "Wednesday",
poster: "https://image.tmdb.org/t/p/w500/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg",
year: "2022-Present",
rating: "8.6/10",
genre: "Comedy, Horror",
seasons: 1
},
{
id: 111,
title: "Yellowstone",
poster: "https://image.tmdb.org/t/p/w500/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg",
year: "2018-Present",
rating: "8.7/10",
genre: "Drama, Western",
seasons: 5
},

{
id: 113,
title: "Better Call Saul",
poster: "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg",
year: "2015-2022",
rating: "8.9/10",
genre: "Crime, Drama",
seasons: 6
},
{
id: 114,
title: "The Boys",
poster: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
year: "2019-Present",
rating: "8.7/10",
genre: "Action, Sci-Fi",
seasons: 3
},
{
id: 115,
title: "Rick and Morty",
poster: "https://image.tmdb.org/t/p/w500/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg",
year: "2013-Present",
rating: "9.1/10",
genre: "Animation, Comedy",
seasons: 6
},
{
id: 116,
title: "Breaking Bad",
poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
year: "2008-2013",
rating: "9.5/10",
genre: "Crime, Drama",
seasons: 5
},
{
id: 117,
title: "Game of Thrones",
poster: "https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg",
year: "2011-2019",
rating: "9.3/10",
genre: "Fantasy, Drama",
seasons: 8
},
{
id: 118,
title: "Friends",
poster: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
year: "1994-2004",
rating: "9.0/10",
genre: "Comedy",
seasons: 10
},
{
id: 119,
title: "The Office (US)",
poster: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
year: "2005-2013",
rating: "9.0/10",
genre: "Comedy",
seasons: 9
},
{
id: 120,
title: "Peaky Blinders",
poster: "https://image.tmdb.org/t/p/w500/6PX0r5TRRU5y0jZ70y1OtbLYmoD.jpg",
year: "2013-2022",
rating: "8.8/10",
genre: "Crime, Drama",
seasons: 6
},
{
id: 121,
title: "Daredevil",
poster: "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
year: "2015-2018",
rating: "8.6/10",
genre: "Action, Crime",
seasons: 3
},
{
id: 124,
title: "The Umbrella Academy",
poster: "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",
year: "2019-Present",
rating: "8.0/10",
genre: "Action, Adventure",
seasons: 3
},
{
id: 126,
title: "Andor",
poster: "https://image.tmdb.org/t/p/w500/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg",
year: "2022-Present",
rating: "8.4/10",
genre: "Sci-Fi, Action",
seasons: 1
},
{
id: 129,
title: "Squid Game",
poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
year: "2021-Present",
rating: "8.0/10",
genre: "Drama, Thriller",
seasons: 1
}
];


// Add this to the main.js file after the movie data and before the functions

// Get the movies link
const moviesLink = document.getElementById('movies-link');
let allMovies = [...popularMovies, ...trendingMovies];

// Add click event for movies link
moviesLink.addEventListener('click', (e) => {
e.preventDefault();

// Create a section for all movies
const allMoviesSection = document.createElement('section');
allMoviesSection.className = 'content-section';
allMoviesSection.id = 'all-movies-section';

// Create section header
const sectionHeader = document.createElement('div');
sectionHeader.className = 'section-header';
sectionHeader.innerHTML = `
<h2 class="section-title">All Movies</h2>
<button class="see-all back-to-home">Back to Home</button>
`;

// Create movie container (using grid instead of carousel)
const movieContainer = document.createElement('div');
movieContainer.className = 'movie-grid'; // We'll need to add this CSS class

// Render all movies
movieContainer.innerHTML = allMovies.map(movie => `
<div class="movie-card">
<img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
<div class="movie-info">
<h3 class="movie-title">${movie.title}</h3>
<div class="movie-meta">
<span>${movie.year}</span>
<span>${movie.rating}</span>
<span>${movie.genre}</span>
</div>
</div>
<button class="play-btn"><i class="fas fa-play"></i></button>
</div>
`).join('');

// Build the section
allMoviesSection.appendChild(sectionHeader);
allMoviesSection.appendChild(movieContainer);

// Hide main content and show all movies section
const main = document.querySelector('main');
const hero = document.querySelector('.hero');
const existingAllMovies = document.getElementById('all-movies-section');

if (existingAllMovies) {
existingAllMovies.remove();
hero.style.display = 'block';
document.querySelectorAll('.content-section').forEach(section => {
section.style.display = 'block';
});
} else {
hero.style.display = 'none';
document.querySelectorAll('.content-section').forEach(section => {
section.style.display = 'none';
});
main.appendChild(allMoviesSection);
}

// Add event listener for back button
const backButton = document.querySelector('.back-to-home');
if (backButton) {
backButton.addEventListener('click', (e) => {
e.preventDefault();
allMoviesSection.remove();
hero.style.display = 'block';
document.querySelectorAll('.content-section').forEach(section => {
section.style.display = 'block';
});
});
}

// Scroll to top
window.scrollTo(0, 0);
});
const tvShowsLink = document.querySelector('a[href="#tv-shows"]');

tvShowsLink.addEventListener('click', (e) => {
e.preventDefault();

// Create a section for all TV shows
const allTvShowsSection = document.createElement('section');
allTvShowsSection.className = 'content-section';
allTvShowsSection.id = 'all-tvshows-section';

// Create section header
const sectionHeader = document.createElement('div');
sectionHeader.className = 'section-header';
sectionHeader.innerHTML = `
<h2 class="section-title">All TV Shows</h2>
<button class="see-all back-to-home">Back to Home</button>
`;

// Create TV shows container (using grid)
const tvShowContainer = document.createElement('div');
tvShowContainer.className = 'movie-grid';

// Render all TV shows
tvShowContainer.innerHTML = tvShows.map(show => `
<div class="movie-card">
<img src="${show.poster}" alt="${show.title}" class="movie-poster">
<div class="movie-info">
<h3 class="movie-title">${show.title}</h3>
<div class="movie-meta">
<span>${show.year}</span>
<span>${show.rating}</span>
<span>${show.genre}</span>
<span>${show.seasons} Season${show.seasons > 1 ? 's' : ''}</span>
</div>
</div>
<button class="play-btn"><i class="fas fa-play"></i></button>
</div>
`).join('');

function showExclusivePremiumContent() {
  const exclusiveContent = [
    {
      id: 201,
      title: "Exclusive: The Director's Cut",
      description: "Special extended edition with never-before-seen scenes",
      poster: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
      badge: "PREMIUM EXCLUSIVE"
    },
    {
      id: 202,
      title: "Early Access: New Releases",
      description: "Watch new movies 1 week before everyone else",
      poster: "https://image.tmdb.org/t/p/w500/kSf9svfL2WrKeuK8W08xeR5lTn8.jpg",
      badge: "EARLY ACCESS"
    },
    {
      id: 203,
      title: "Premium Original Series",
      description: "Exclusive shows only for premium members",
      poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4c8y0Zrm2vqajuQYvmx.jpg",
      badge: "ORIGINAL"
    }
  ];

  // Create a premium content section
  const premiumContentSection = document.createElement('section');
  premiumContentSection.className = 'content-section premium-exclusive';
  premiumContentSection.id = 'premium-exclusive-content';

  premiumContentSection.innerHTML = `
    <div class="section-header">
      <h2 class="section-title"><i class="fas fa-crown"></i> Premium Exclusive Content</h2>
      <p class="section-subtitle">Available only with CineStream Premium</p>
    </div>
    <div class="premium-content-grid">
      ${exclusiveContent.map(item => `
        <div class="premium-content-card">
          <div class="premium-badge">${item.badge}</div>
          <img src="${item.poster}" alt="${item.title}" class="premium-poster">
          <div class="premium-content-info">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <button class="btn-premium">
              <i class="fas fa-play"></i> Watch Now
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // In a real app, you would check if user has premium before showing this
  // For demo, we'll add it when user clicks on premium link
  document.querySelector('main').appendChild(premiumContentSection);
}

// Build the section
allTvShowsSection.appendChild(sectionHeader);
allTvShowsSection.appendChild(tvShowContainer);

// Hide main content and show all TV shows section
const main = document.querySelector('main');
const hero = document.querySelector('.hero');
const existingAllTvShows = document.getElementById('all-tvshows-section');

if (existingAllTvShows) {
existingAllTvShows.remove();
hero.style.display = 'block';
document.querySelectorAll('.content-section').forEach(section => {
section.style.display = 'block';
});
} else {
hero.style.display = 'none';
document.querySelectorAll('.content-section').forEach(section => {
section.style.display = 'none';
});
main.appendChild(allTvShowsSection);
}

// Add event listener for back button
const backButton = allTvShowsSection.querySelector('.back-to-home');
if (backButton) {
backButton.addEventListener('click', (e) => {
e.preventDefault();
allTvShowsSection.remove();
hero.style.display = 'block';
document.querySelectorAll('.content-section').forEach(section => {
section.style.display = 'block';
});
});
}

// Scroll to top
window.scrollTo(0, 0);
});



function performSearch() {
const searchTerm = searchInput.value.trim();

if (searchTerm === '') {
alert('Please enter a search term');
return;
}

// In a real app, you would call an API here with the search term
console.log(`Searching for: ${searchTerm}`);

// For this demo, we'll just show an alert and filter the movies
const filteredMovies = allMovies.filter(movie =>
movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);

if (filteredMovies.length === 0) {
alert(`No results found for "${searchTerm}"`);
return;
}

// Create a section for search results similar to the all movies section
const searchResultsSection = document.createElement('section');
searchResultsSection.className = 'content-section';
searchResultsSection.id = 'search-results-section';

// Create section header
const sectionHeader = document.createElement('div');
sectionHeader.className = 'section-header';
sectionHeader.innerHTML = `
<h2 class="section-title">Search Results for "${searchTerm}"</h2>
<button class="see-all back-to-home">Back to Home</button>
`;

// Create movie container
const movieContainer = document.createElement('div');
movieContainer.className = 'movie-grid';

// Render filtered movies
movieContainer.innerHTML = filteredMovies.map(movie => `
<div class="movie-card">
<img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
<div class="movie-info">
<h3 class="movie-title">${movie.title}</h3>
<div class="movie-meta">
<span>${movie.year}</span>
<span>${movie.rating}</span>
<span>${movie.genre}</span>
</div>
</div>
<button class="play-btn"><i class="fas fa-play"></i></button>
</div>
`).join('');

// Clear any previous search results
const existingResults = document.getElementById('search-results-section');
if (existingResults) {
existingResults.remove();
}

// Hide other content and show search results
const main = document.querySelector('main');
const hero = document.querySelector('.hero');
const allMoviesSection = document.getElementById('all-movies-section');
const contentSections = document.querySelectorAll('.content-section');

hero.style.display = 'none';
if (allMoviesSection) allMoviesSection.style.display = 'none';
contentSections.forEach(section => section.style.display = 'none');

// Build and add the search results section
searchResultsSection.appendChild(sectionHeader);
searchResultsSection.appendChild(movieContainer);
main.appendChild(searchResultsSection);

// Add event listener for back button
const backButton = searchResultsSection.querySelector('.back-to-home');
backButton.addEventListener('click', (e) => {
e.preventDefault();
searchInput.value = '';
searchResultsSection.remove();
hero.style.display = 'block';
if (allMoviesSection) allMoviesSection.style.display = 'block';
contentSections.forEach(section => section.style.display = 'block');
});

// Scroll to search results
window.scrollTo(0, 0);
}

function fetchPopularMovies() {
const container = document.getElementById('popular-movies');
renderMovieCarousel(container, popularMovies);
}

function fetchTrendingMovies() {
const container = document.getElementById('trending-movies');
renderMovieCarousel(container, trendingMovies);
}

function loadContinueWatching() {
const container = document.getElementById('continue-watching');
renderContinueWatching(container, continueWatching);
}

function renderMovieCarousel(container, movies) {
container.innerHTML = movies.map(movie => `
<div class="movie-card">
<img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
<div class="movie-info">
<h3 class="movie-title">${movie.title}</h3>
<div class="movie-meta">
<span>${movie.year}</span>
<span>${movie.rating}</span>
</div>
</div>
<button class="play-btn"><i class="fas fa-play"></i></button>
</div>
`).join('');
}

function renderContinueWatching(container, items) {
container.innerHTML = items.map(item => `
<div class="continue-item">
<img src="${item.poster}" alt="${item.title}" class="continue-poster">
<div class="continue-content">
<h3>${item.title}</h3>
<p>${item.episode}</p>
<div class="progress-bar">
<div class="progress" style="width: ${item.progress}%"></div>
</div>
<p>${item.timeLeft} left</p>
</div>
</div>
`).join('');
}
// Add this function to load TV shows
function fetchPopularTVShows() {
const container = document.getElementById('popular-tvshows');
renderTVShowCarousel(container, tvShows);
}

// Add this new rendering function specifically for TV shows
function renderTVShowCarousel(container, shows) {
container.innerHTML = shows.map(show => `
<div class="movie-card">
<img src="${show.poster}" alt="${show.title}" class="movie-poster">
<div class="movie-info">
<h3 class="movie-title">${show.title}</h3>
<div class="movie-meta">
<span>${show.year}</span>
<span>${show.rating}</span>
<span>${show.seasons} Season${show.seasons > 1 ? 's' : ''}</span>
</div>
</div>
<button class="play-btn"><i class="fas fa-play"></i></button>
</div>
`).join('');
}

// Add click handlers for movie cards
document.addEventListener('click', (e) => {
if (e.target.closest('.movie-card') || e.target.closest('.continue-item')) {
const movieId = e.target.closest('[data-id]')?.getAttribute('data-id');
if (movieId) {
alert(`Playing movie/show with ID: ${movieId}`);
// In a real app, you would open a player or detail view
}
}

if (e.target.closest('.play-btn')) {
const card = e.target.closest('.movie-card');
alert(`Playing ${card.querySelector('.movie-title').textContent}`);
}
});
document.addEventListener('DOMContentLoaded', () => {
fetchPopularMovies();
fetchTrendingMovies();
fetchPopularTVShows(); // Add this line
loadContinueWatching();
});