export const authService = 
{
    getCurrentUser
};

function getCurrentUser()
{
    // Getting user object from session
    return JSON.parse(localStorage.getItem('user'));    
}