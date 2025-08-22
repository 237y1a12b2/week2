document.getElementById('eventRegistrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const eventChoice = document.getElementById('event').value;
  const messageDiv = document.getElementById('registrationMessage');

  // Simple client-side validation
  if (name.trim() === '' || email.trim() === '' || eventChoice === '') {
    messageDiv.textContent = 'Please fill in all required fields.';
    messageDiv.className = 'message error';
    return;
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    messageDiv.textContent = 'Please enter a valid email address.';
    messageDiv.className = 'message error';
    return;
  }

  // In a real application, you would send this data to a server
  // using Fetch API or XMLHttpRequest.
  console.log('Registration Data:', {
    name: name,
    email: email,
    phone: document.getElementById('phone').value,
    event: eventChoice,
    comments: document.getElementById('comments').value
  });

  messageDiv.textContent = 'Registration successful! Thank you.';
  messageDiv.className = 'message success';

  this.reset(); // Clear the form
});
