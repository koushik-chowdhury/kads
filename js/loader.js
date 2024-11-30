  // Show loader initially
  const loader = document.getElementById('loader');
  // Simulate a loading process
  setTimeout(() => {
    // Hide the loader
    loader.style.display = 'none';
    // Show the main content
    body.style.display = 'block';
  }, 500); // Adjust time in milliseconds (3000 = 3 seconds)