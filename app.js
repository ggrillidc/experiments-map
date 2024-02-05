// Sample data (replace with your own data)
const experiments = [
  { name: 'QUAX', description: 'Description for Experiment 1', link: 'https://experiment1.com', position: [0,0], color: 'red'},
  { name: 'DarkSide', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  // Add more experiments as needed
];

// Ensure Leaflet is loaded
console.log('Leaflet version:', L.version);

// Initialize the map with a custom image overlay
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -5,
  maxZoom: 5,
  zoomSnap: 0.1,
  zoomDelta: 0.1,
}).setView([0, 0], 0);

console.log('Map initialized...');

const imageUrl = 'https://raw.githubusercontent.com/cajohare/AxionLimits/master/plots/Wavy_Map.png';
const imageBounds = [[-600, -1000], [600, 1000]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Add custom markers for each experiment
experiments.forEach((experiment, index) => {
  const markerPosition = experiment.position;//getRandomLatLng()
  const coloredTextMarker = createColoredTextMarker(experiment.name, 'red');

  // Create a marker with a custom HTML element as its content
  const marker = L.marker(markerPosition, { opacity: 0.7, icon: coloredTextMarker }).addTo(map);
  marker.bindPopup(`<b>${experiment.name}</b><br>${experiment.description}<br><a href="${experiment.link}" target="_blank">Experiment Page</a>`);
  // const marker = createColoredTextMarker(experiment.position, experiment.color, experiment.name);
  // marker.addTo(map);
  // marker.bindPopup(`<b>${experiment.name}</b><br>${experiment.description}<br><a href="${experiment.link}" target="_blank">Experiment Page</a>`);
});

console.log('Markers added...');

// Function to generate random coordinates for markers
function getRandomLatLng() {
  const lat = (Math.random() * 1080) - 540;
  const lng = (Math.random() * 1920) - 960;
  return [lat, lng];
}

// Function to create a bold, colored text marker with fixed font size and type
function createColoredTextMarker(text, color) {
  const iconStyle = `color: ${color}; font-size: 16px; font-family: Graphik-Bold;`;
  return L.divIcon({ html: `<div style="${iconStyle}">${text}</div>`, className: 'colored-text-marker' });
  // const coloredTextDiv = document.createElement('div');
  // coloredTextDiv.innerHTML = `<div style="color: ${color}; font-size: 14px; font-family: Arial, sans-serif; font-weight: bold;">${text}</div>`;
  // return L.divIcon({ html: coloredTextDiv.outerHTML, className: 'colored-text-marker' });
}

// Function to create a colored text marker
// function createColoredTextMarker(position, color, text) {
//   const markerOptions = {
//     opacity: 0.7,
//     color: color,  // Specify the color for each marker
//   };
//   const marker = L.circleMarker(position, markerOptions).addTo(map);
//   const iconStyle = `color: ${color}; font-size: 16px; font-family: Graphik-Bold;`;
//   // Create a div icon with the specified text
//   const divIcon = L.divIcon({
//     className: 'custom-div-icon',
//     // html: `<div style="color: ${color};">${text}</div>`,
//     html: `<div style="${iconStyle}">${text}</div>`,
//     iconSize: [12, 12],
//   });

//   // Add the div icon to the marker
//   marker.setIcon(divIcon);

//   return marker;
// }

// Function to show experiment details
function showExperimentDetails(index) {
  const experiment = experiments[index];
  alert(`Experiment Name: ${experiment.name}\nDescription: ${experiment.description}\nLink: ${experiment.link}`);
}
