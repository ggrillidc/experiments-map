// Sample data (replace with your own data)
const experiments = [
  { name: 'QUAX', description: 'Description for Experiment 1', link: 'https://experiment1.com', position: [-2, -90], color: 'green'},
  { name: 'DarkSide', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [-5, 40], color: 'red' },
  { name: 'XENON', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [15, 60], color: 'red' },
  { name: 'nEDM', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [40, 95], color: 'green' },
  { name: 'OSQAR', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [62, 100], color: 'green' },
  { name: 'CROWS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [88, 110], color: 'green' },
  { name: 'CAST', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [115, 130], color: 'green' },
  { name: 'BASE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [138, 140], color: 'green' },
  { name: 'RADES', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [160, 145], color: 'green' },
  { name: 'FUNK', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [185, 145], color: 'red' },
  { name: 'JEDI', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [205, 120], color: 'green' },
  { name: 'GEO600', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [230, 95], color: 'blue' },
  { name: 'WISPDMX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [250, 85], color: 'red' },
  { name: 'WISPLC', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [270, 60], color: 'green' },
  { name: 'SHIPS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [295, 40], color: 'red' },
  { name: 'IAXO', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [320, 25], color: 'green' },
  { name: 'ALPS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [320, 0], color: 'green' },
  { name: 'MADMAX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [285, -110], color: 'green' },
  { name: 'BRASS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'LOFAR', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SUPAX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'CASPEr', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'AION', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
  { name: 'DAMNED', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
  { name: 'SHUKET', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'GrAHal', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'DAMIC', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'EDELWEISS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'CADEx', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'AURIGA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
  { name: 'PVLAS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'FLASH', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'MAGIC', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'NASDUCK', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'MuDHI', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ARGO-YBJ', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'PandaX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'FAST', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'TASEH', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'SAPPHIRE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
  { name: 'ChangE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'AMAILS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'CAPP', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'SAPPHIRES', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'DOSUE-RR', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'DANCE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'SUMICO', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'SKA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'UPLOAD/DOWNLOAD', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'ORGAN', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'PPTA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
  { name: 'SKA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'H.E.S.S.', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'SPT', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'BICEP', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'VLT', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'MUSE/VIMOS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'POLARBEAR', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'HAWC', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'LIGO', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
  { name: 'ALPHA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'ADMX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'LAMPOST', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ABRACADABRA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'CASPEr', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'SHAFT', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'HAYSTAC', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'SNO', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'SENSEI', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
  { name: 'SuperCDMS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
  { name: 'ARIADNE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'SQuAD', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'BREAD', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'SQMS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'DarkSRF', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'LZ', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SNIPE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'Eot-Wash', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
  { name: 'ADMX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'ORPHEUS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'LIGO', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
  { name: 'MAGIS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
  { name: 'DM-Radio', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'QUALIPHIDE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'Dark E-field Radio', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'BACON', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'blue' },
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

// const imageUrl = 'https://raw.githubusercontent.com/cajohare/AxionLimits/master/plots/Wavy_Map.png';
const imageUrl = 'Wavy_Map.png';
const imageBounds = [[-500, -900], [500, 900]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Add custom markers for each experiment
experiments.forEach((experiment, index) => {
  const markerPosition = experiment.position;//getRandomLatLng()
  const coloredTextMarker = createColoredTextMarker(experiment.name, experiment.color);

  // Create a marker with a custom HTML element as its content
  const marker = L.marker(markerPosition, { opacity: 0.7, icon: coloredTextMarker }).addTo(map);
  marker.bindPopup(`<b>${experiment.name}</b><br>${experiment.description}<br><a href="${experiment.link}" target="_blank">Experiment Page</a>`);
  // const marker = createColoredTextMarker(experiment.position, experiment.color, experiment.name);
  // marker.addTo(map);
  // marker.bindPopup(`<b>${experiment.name}</b><br>${experiment.description}<br><a href="${experiment.link}" target="_blank">Experiment Page</a>`);
});

// Add a grid overlay
addGridOverlay(map);

console.log('Markers added...');

// Function to generate random coordinates for markers
function getRandomLatLng() {
  const lat = (Math.random() * 1080) - 540;
  const lng = (Math.random() * 1920) - 960;
  return [lat, lng];
}

// Function to create a bold, colored text marker with fixed font size and type
function createColoredTextMarker(text, color) {
  const iconStyle = `color: ${color}; font-size: 20px; font-family: Graphik-Bold;`;
  return L.divIcon({ html: `<div style="${iconStyle}">${text}</div>`, className: 'colored-text-marker' });
  // const coloredTextDiv = document.createElement('div');
  // coloredTextDiv.innerHTML = `<div style="color: ${color}; font-size: 14px; font-family: Arial, sans-serif; font-weight: bold;">${text}</div>`;
  // return L.divIcon({ html: coloredTextDiv.outerHTML, className: 'colored-text-marker' });
}

// Function to add a grid overlay
function addGridOverlay(map) {
  // Define the grid lines
  const gridLines = [];

  // Vertical lines
  for (let x = -900; x <= 900; x += 50) {
    const line = [[-500, x], [500, x]];
    gridLines.push(line);
  }

  // Horizontal lines
  for (let y = -500; y <= 500; y += 50) {
    const line = [[y, -900], [y, 900]];
    gridLines.push(line);
  }

  // Add the grid to the map
  gridLines.forEach(line => {
    L.polyline(line, { color: 'gray', weight: 1 }).addTo(map);
  });
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
