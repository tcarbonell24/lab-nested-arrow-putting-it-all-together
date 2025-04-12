let userInfo = {
  "username": "user1",
  "password": "password123"
}

function createLoginTracker(userInfo) {
  let attemptCount = 0;

  let passwordCheck = (passwordAttempt) => {
    
    
    if (attemptCount >= 3){
      return("Account locked due to too many failed login attempts");
    }

    if (passwordAttempt === userInfo.password) {
      return("Login successful");

    } else{
      attemptCount ++;
      return(`Attempt ${attemptCount}: Login failed`);
    }
  }

  return passwordCheck;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};