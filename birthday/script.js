document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('login-section');
    const surpriseSection = document.getElementById('surprise-section');
    const loginBtn = document.getElementById('login-btn');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    // The password to access the surprise
    const correctPassword = "divina";
    
    // Create audio element for background music
    const bgMusic = new Audio('Ikaw at Ako - Moira & Jason (heartwarming fingerstyle guitar cover).mp3');
    bgMusic.loop = true;
    
    // Login functionality
    loginBtn.addEventListener('click', function() {
        checkPassword();
    });
    
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    function checkPassword() {
        const enteredPassword = passwordInput.value.trim().toLowerCase();
        
        if (enteredPassword === correctPassword) {
            loginSection.style.display = 'none';
            surpriseSection.style.display = 'block';
            createHearts();
            createFlowers();
            // Play background music
            bgMusic.play().catch(e => console.log("Audio couldn't autoplay: ", e));
        } else {
            errorMessage.textContent = "Incorrect password. Please try again.";
            errorMessage.style.display = 'block';
            passwordInput.value = '';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
    }
    
    // Create floating hearts
    function createHearts() {
        const heartsContainer = document.querySelector('.hearts-container');
        const numberOfHearts = 30;
        
        for (let i = 0; i < numberOfHearts; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            // Random position
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 20 + 15;
            
            // Random animation duration
            const animationDuration = Math.random() * 3 + 2;
            
            // Random delay
            const animationDelay = Math.random() * 5;
            
            heart.style.left = `${left}%`;
            heart.style.top = `${top}%`;
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            heart.style.animation = `floatHeart ${animationDuration}s ease-in-out ${animationDelay}s infinite`;
            
            // Set the before and after elements to match the heart size
            heart.style.setProperty('--heart-size', `${size}px`);
            
            heartsContainer.appendChild(heart);
        }
    }
    
    // Create floating flowers
    function createFlowers() {
        const flowersContainer = document.querySelector('.flowers-container');
        const numberOfFlowers = 20;
        const flowerTypes = [
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmY2YjkzIiBkPSJNMjU2IDEyOGMwIDM1LjM0NyAyOC42NTMgNjQgNjQgNjRzNjQtMjguNjUzIDY0LTY0LTI4LjY1My02NC02NC02NC02NCAyOC42NTMtNjQgNjR6bTY0LTMyYzAgMTcuNjczLTE0LjMyNyAzMi0zMiAzMnMtMzItMTQuMzI3LTMyLTMyIDE0LjMyNy0zMiAzMi0zMiAzMiAxNC4zMjcgMzIgMzJ6Ii8+PHBhdGggZmlsbD0iI2ZmNmI5MyIgZD0iTTI1NiAxMjhjMCAzNS4zNDctMjguNjUzIDY0LTY0IDY0cy02NC0yOC42NTMtNjQtNjQgMjguNjUzLTY0IDY0LTY0IDY0IDI4LjY1MyA2NCA2NHptLTY0LTMyYzAgMTcuNjczLTE0LjMyNyAzMi0zMiAzMnMtMzItMTQuMzI3LTMyLTMyIDE0LjMyNy0zMiAzMi0zMiAzMiAxNC4zMjcgMzIgMzJ6Ii8+PHBhdGggZmlsbD0iI2ZmNmI5MyIgZD0iTTI1NiAzODRjMC0zNS4zNDcgMjguNjUzLTY0IDY0LTY0czY0IDI4LjY1MyA2NCA2NC0yOC42NTMgNjQtNjQgNjQtNjQtMjguNjUzLTY0LTY0em02NCAzMmMwLTE3LjY3MyAxNC4zMjctMzIgMzItMzJzMzIgMTQuMzI3IDMyIDMyLTE0LjMyNyAzMi0zMiAzMi0zMi0xNC4zMjctMzItMzJ6Ii8+PHBhdGggZmlsbD0iI2ZmNmI5MyIgZD0iTTI1NiAzODRjMC0zNS4zNDctMjguNjUzLTY0LTY0LTY0cy02NCAyOC42NTMtNjQgNjQgMjguNjUzIDY0IDY0IDY0IDY0LTI4LjY1MyA2NC02NHptLTY0IDMyYzAtMTcuNjczLTE0LjMyNy0zMi0zMi0zMnMtMzIgMTQuMzI3LTMyIDMyIDE0LjMyNyAzMiAzMiAzMiAzMi0xNC4zMjcgMzItMzJ6Ii8+PHBhdGggZmlsbD0iI2ZmY2IwMCIgZD0iTTI1NiAyNTZjMC0xNy42NzMgMTQuMzI3LTMyIDMyLTMyIDE3LjY3MyAwIDMyIDE0LjMyNyAzMiAzMnMtMTQuMzI3IDMyLTMyIDMyYy0xNy42NzMgMC0zMi0xNC4zMjctMzItMzJ6Ii8+PC9zdmc+',
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmY2YjkzIiBkPSJNMjU2IDEyOGMwIDM1LjM0NyAyOC42NTMgNjQgNjQgNjRzNjQtMjguNjUzIDY0LTY0LTI4LjY1My02NC02NC02NC02NCAyOC42NTMtNjQgNjR6Ii8+PHBhdGggZmlsbD0iI2ZmNmI5MyIgZD0iTTI1NiAxMjhjMCAzNS4zNDctMjguNjUzIDY0LTY0IDY0cy02NC0yOC42NTMtNjQtNjQgMjguNjUzLTY0IDY0LTY0IDY0IDI4LjY1MyA2NCA2NHoiLz48cGF0aCBmaWxsPSIjZmY2YjkzIiBkPSJNMjU2IDM4NGMwLTM1LjM0NyAyOC42NTMtNjQgNjQtNjRzNjQgMjguNjUzIDY0IDY0LTI4LjY1MyA2NC02NCA2NC02NC0yOC42NTMtNjQtNjR6Ii8+PHBhdGggZmlsbD0iI2ZmNmI5MyIgZD0iTTI1NiAzODRjMC0zNS4zNDctMjguNjUzLTY0LTY0LTY0cy02NCAyOC42NTMtNjQgNjQgMjguNjUzIDY0IDY0IDY0IDY0LTI4LjY1MyA2NC02NHoiLz48cGF0aCBmaWxsPSIjZmZjYjAwIiBkPSJNMjU2IDI1NmMwLTE3LjY3MyAxNC4zMjctMzIgMzItMzIgMTcuNjczIDAgMzIgMTQuMzI3IDMyIDMycy0xNC4zMjcgMzItMzIgMzJjLTE3LjY3MyAwLTMyLTE0LjMyNy0zMi0zMnoiLz48L3N2Zz4='
        ];
        
        for (let i = 0; i < numberOfFlowers; i++) {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            
            const flowerImg = document.createElement('img');
            flowerImg.src = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
            flower.appendChild(flowerImg);
            
            // Random position
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            
            // Random size
            const size = Math.random() * 30 + 20;
            
            // Random animation duration
            const animationDuration = Math.random() * 4 + 3;
            
            // Random delay
            const animationDelay = Math.random() * 5;
            
            flower.style.left = `${left}%`;
            flower.style.top = `${top}%`;
            flowerImg.style.width = `${size}px`;
            flowerImg.style.height = `${size}px`;
            flower.style.animation = `floatFlower ${animationDuration}s ease-in-out ${animationDelay}s infinite`;
            
            flowersContainer.appendChild(flower);
        }
    }
});

// Photo gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    // Make sure these event listeners are only added after DOM is loaded
    const showPhotosBtn = document.getElementById('show-photos-btn');
    const closeGalleryBtn = document.getElementById('close-gallery-btn');
    
    if (showPhotosBtn) {
        showPhotosBtn.addEventListener('click', function() {
            document.getElementById('photo-gallery').style.display = 'flex';
            animateGalleryImages();
        });
    }
    
    if (closeGalleryBtn) {
        closeGalleryBtn.addEventListener('click', function() {
            document.getElementById('photo-gallery').style.display = 'none';
        });
    }
    
    // Add animation to gallery images
    function animateGalleryImages() {
        const images = document.querySelectorAll('.gallery-img');
        images.forEach((img, index) => {
            img.style.animationDelay = `${index * 0.2}s`;
        });
    }
});

// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Create logout message element
    const logoutMessage = document.createElement('div');
    logoutMessage.className = 'logout-message';
    logoutMessage.innerHTML = `
        <h2>I Love You So Much</h2>
        <p>Love love ❤️❤️❤️</p>
        <button id="close-logout-message">Close</button>
    `;
    document.body.appendChild(logoutMessage);
    
    // Get the logout button
    const logoutBtn = document.getElementById('logout-btn');
    
    // Add event listener to logout button
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Show logout message
            logoutMessage.style.display = 'block';
            
            // Pause the background music if it's playing
            const bgMusic = document.querySelector('audio');
            if (bgMusic) {
                bgMusic.pause();
            }
            
            // Hide the message and return to login after 3 seconds
            setTimeout(() => {
                logoutMessage.style.display = 'none';
                
                // Reset the password field
                document.getElementById('password').value = '';
                
                // Hide the surprise section
                document.getElementById('surprise-section').style.display = 'none';
                
                // Show the login section
                document.getElementById('login-section').style.display = 'block';
            }, 3000);
        });
    }
    
    // Close button for logout message
    document.getElementById('close-logout-message').addEventListener('click', function() {
        logoutMessage.style.display = 'none';
        
        // Reset the password field
        document.getElementById('password').value = '';
        
        // Hide the surprise section
        document.getElementById('surprise-section').style.display = 'none';
        
        // Show the login section
        document.getElementById('login-section').style.display = 'block';
    });
});