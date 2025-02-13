(function() {
  // Create an overlay container for user info
  var container = document.createElement('div');
  container.id = "user-info-overlay";
  Object.assign(container.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: "-3",
    fontFamily: "'Fira Code', monospace",
    fontSize: "0.8em",
    color: "rgba(0,255,255,0.1)",
    whiteSpace: "pre-wrap",
    overflow: "hidden",
    mixBlendMode: "overlay"
  });
  document.body.appendChild(container);

  // Gather static info from the navigator
  var infoText = "User-Agent: " + navigator.userAgent + "\n";
  infoText += "Browser: " + (navigator.appName || "unknown") + "\n";
  infoText += "O.S.: " + (navigator.platform || "unknown") + "\n";

  // Fetch the client IP using an external API
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      infoText += "Client IP: " + data.ip + "\n";
      // Fetch location info from another API
      return fetch('https://ipapi.co/json/');
    })
    .then(response => response.json())
    .then(location => {
      infoText += "Location: " + location.city + ", " + location.region + ", " + location.country_name;
      container.innerText = infoText;
    })
    .catch(err => {
      console.error(err);
      container.innerText = infoText;
    });
})();

