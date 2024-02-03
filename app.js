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

