// Sample data (replace with your own data)
const experiments = [
  { name: 'Experiment 1', description: 'Description for Experiment 1', link: 'https://experiment1.com' },
  { name: 'Experiment 2', description: 'Description for Experiment 2', link: 'https://experiment2.com' },
  // Add more experiments as needed
];

// Initialize the map with a custom image overlay
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -5, // Adjust as needed
  maxZoom: 5, // Adjust as needed
  zoomSnap: 0.1,
  zoomDelta: 0.1,
}).setView([0, 0], 0);

const imageUrl = 'https://raw.githubusercontent.com/cajohare/AxionLimits/master/plots/Wavy_Map.png';
const imageBounds = [[-1080, -1920], [1080, 1920]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Add markers for each experiment
experiments.forEach((experiment, index) => {
  const marker = L.marker(getRandomLatLng(), { opacity: 0.7 }).addTo(map);
  marker.bindPopup(`<b>${experiment.name}</b><br>${experiment.description}<br><a href="${experiment.link}" target="_blank">Experiment Page</a>`);
});

// Function to generate random coordinates for markers
function getRandomLatLng() {
  const lat = (Math.random() * 2160) - 1080;
  const lng = (Math.random() * 3840) - 1920;
  return [lat, lng];
}

// Function to show experiment details
function showExperimentDetails(index) {
  const experiment = experiments[index];
  alert(`Experiment Name: ${experiment.name}\nDescription: ${experiment.description}\nLink: ${experiment.link}`);
}
