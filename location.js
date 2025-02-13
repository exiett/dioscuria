(function(){
  // Create overlay container
  const container = document.createElement('div');
  container.id = 'visitor-info-overlay';
  Object.assign(container.style, {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    color: 'rgba(0,255,255,0.8)', // Increased opacity for visibility
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.8em',
    whiteSpace: 'pre-wrap',
    pointerEvents: 'none',
    zIndex: '9999',
    padding: '10px'
  });
  document.body.appendChild(container);

  // Gather basic info
  let infoText = `User-Agent: ${navigator.userAgent}\n`;
  infoText += `Browser: ${navigator.appName}\n`;
  infoText += `O.S.: ${navigator.platform}\n`;

  // Fetch client IP and location data
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      infoText += `Client IP: ${data.ip}\n`;
      return fetch('https://ipapi.co/json/');
    })
    .then(response => response.json())
    .then(location => {
      infoText += `Location: ${location.city}, ${location.region}, ${location.country_name}`;
      container.textContent = infoText;
    })
    .catch(err => {
      console.error(err);
      container.textContent = infoText;
    });
})();