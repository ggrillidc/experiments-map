// Sample data (replace with your own data)
//const experiments = [
//  { name: 'Experiment 1', description: 'Description for Experiment 1', link: 'https://experiment1.com' },
//  { name: 'Experiment 2', description: 'Description for Experiment 2', link: 'https://experiment2.com' },
  // Add more experiments as needed
//];

// Initialize the map
const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//L.tileLayer('https://raw.githubusercontent.com/cajohare/AxionLimits/master/plots/Wavy_Map.png').addTo(map);

//map.eachLayer(layer => {
//  if (layer instanceof L.Marker) {
//    layer.remove();
//  }
//});

// Add markers for each experiment
//experiments.forEach(experiment => {
//  const marker = L.marker(getRandomLatLng()).addTo(map);
//  marker.bindPopup(`<b>${experiment.name}</b><br>${experiment.description}<br><a href="${experiment.link}" target="_blank">Experiment Page</a>`);
//});

// Function to generate random coordinates for markers
//function getRandomLatLng() {
//  const lat = (Math.random() * 180) - 90;
//  const lng = (Math.random() * 360) - 180;
//  return [lat, lng];
//}
