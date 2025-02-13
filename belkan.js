(function() {
    // Create a new div element
    const msg = document.createElement('div');
    msg.innerText = "Hello from JS on BearBlog!";
    
    // Style it so it's easy to see
    Object.assign(msg.style, {
      position: 'fixed',
      top: '10px',
      left: '10px',
      padding: '10px 15px',
      backgroundColor: 'rgba(255, 0, 255, 0.8)', // bright neon magenta
      color: '#000',
      fontFamily: "'Fira Code', monospace",
      fontSize: '16px',
      zIndex: '10000'
    });
    
    // Append the element to the body
    document.body.appendChild(msg);
  })();
  