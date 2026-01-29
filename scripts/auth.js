// Login Form
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    try {
        // In a real app, you would send this to your backend
        // This is a mock implementation
        console.log('Login attempt with:', { email, password });
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // On successful login
        alert('Login successful!');
        document.getElementById('auth-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Update UI to show logged in state
        document.getElementById('auth-btn').textContent = 'My Account';
        document.getElementById('auth-btn').classList.remove('btn-outline');
        document.getElementById('auth-btn').classList.add('btn-primary');
        
        // Reset form
        e.target.reset();
    } catch (error) {
        alert('Login failed: ' + error.message);
    }
});

// Signup Form
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    try {
        // In a real app, you would send this to your backend
        // This is a mock implementation
        console.log('Signup attempt with:', { name, email, password });
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // On successful signup
        alert('Account created successfully! Please login.');
        
        // Switch to login tab
        document.getElementById('login-tab').click();
        
        // Pre-fill email
        document.getElementById('login-email').value = email;
        
        // Reset form
        e.target.reset();
    } catch (error) {
        alert('Signup failed: ' + error.message);
    }
});

// Social Login Buttons
document.querySelector('.social-btn.google').addEventListener('click', async () => {
    try {
        // In a real app, implement Google auth
        alert('Google login would be implemented here');
    } catch (error) {
        alert('Google login failed: ' + error.message);
    }
});

document.querySelector('.social-btn.facebook').addEventListener('click', async () => {
    try {
        // In a real app, implement Facebook auth
        alert('Facebook login would be implemented here');
    } catch (error) {
        alert('Facebook login failed: ' + error.message);
    }
});
