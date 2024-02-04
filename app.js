// Sample data (replace with your own data)
const experiments = [
  { name: 'Experiment 1', description: 'Description for Experiment 1', link: 'https://experiment1.com' },
  { name: 'Experiment 2', description: 'Description for Experiment 2', link: 'https://experiment2.com' },
  // Add more experiments as needed
];

// Initialize the map
const map = L.map('map').setView([0, 0], 2);

// Add a custom image overlay
const imageUrl = 'https://raw.githubusercontent.com/cajohare/AxionLimits/master/plots/Wavy_Map.png';
//L.tileLayer('https://raw.githubusercontent.com/cajohare/AxionLimits/master/plots/Wavy_Map.png').addTo(map);
const imageBounds = [[-90, -180], [90, 180]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Set the maximum bounds to restrict panning beyond the image boundaries
map.setMaxBounds(imageBounds);

// Fit the image to the map bounds
map.fitBounds(imageBounds);

// Add markers for each experiment
experiments.forEach(experiment => {
  const marker = L.marker(getRandomLatLng()).addTo(map);
  marker.bindPopup(`<b>${experiment.name}</b><br>${experiment.description}<br><a href="${experiment.link}" target="_blank">Experiment Page</a>`);
});

// Function to generate random coordinates for markers
function getRandomLatLng() {
  const lat = (Math.random() * 180) - 90;
  const lng = (Math.random() * 360) - 180;
  return [lat, lng];
}
