// Sample data (replace with your own data)
const experiments = [
  { name: 'Experiment 1', description: 'Description for Experiment 1', link: 'https://experiment1.com' },
  { name: 'Experiment 2', description: 'Description for Experiment 2', link: 'https://experiment2.com' },
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
const imageBounds = [[-1080, -1920], [1080, 1920]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Add custom markers for each experiment
experiments.forEach((experiment, index) => {
  const markerPosition = getRandomLatLng();
  const coloredTextMarker = createColoredTextMarker(experiment.name, 'red');

  // Create a marker with a custom HTML element as its content
  const marker = L.marker(markerPosition, { opacity: 0.7, icon: coloredTextMarker }).addTo(map);
  marker.bindPopup(`<b>${experiment.name}</b><br>${experiment.description}<br><a href="${experiment.link}" target="_blank">Experiment Page</a>`);
});

console.log('Markers added...');

// Function to generate random coordinates for markers
function getRandomLatLng() {
  const lat = (Math.random() * 2160) - 1080;
  const lng = (Math.random() * 3840) - 1920;
  return [lat, lng];
}

// Function to create a bold, colored text marker with fixed font size and type
function createColoredTextMarker(text, color) {
  const iconStyle = `color: ${color}; font-size: 14px; font-family: Graphik bold; font-weight: bold;`;
  return L.divIcon({ html: `<div style="${iconStyle}">${text}</div>`, className: 'colored-text-marker' });
  // const coloredTextDiv = document.createElement('div');
  // coloredTextDiv.innerHTML = `<div style="color: ${color}; font-size: 14px; font-family: Arial, sans-serif; font-weight: bold;">${text}</div>`;
  // return L.divIcon({ html: coloredTextDiv.outerHTML, className: 'colored-text-marker' });
}

// Function to show experiment details
function showExperimentDetails(index) {
  const experiment = experiments[index];
  alert(`Experiment Name: ${experiment.name}\nDescription: ${experiment.description}\nLink: ${experiment.link}`);
}
