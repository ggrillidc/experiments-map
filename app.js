// Sample data (replace with your own data)
const experiments = [
  { name: 'QUAX', description: 'Description for Experiment 1', link: 'https://experiment1.com', position: [-10, 0], color: 'green'},
  { name: 'DarkSide', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'XENON', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'nEDM', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'OSQAR', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'CROWS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'CAST', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'BASE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'RADES', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'FUNK', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'JEDI', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'GEO600', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'WISPDMX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'WISPLC', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SHIPS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'IAXO', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ALPS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'MADMAX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'BRASS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'LOFAR', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SUPAX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'CASPEr', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'AION', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'DAMNED', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SHUKET', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'GrAHal', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'DAMIC', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'EDELWEISS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'CADEx', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'AURIGA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'PVLAS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'FLASH', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'MAGIC', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'NASDUCK', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'MuDHI', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ARGO-YBJ', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'PandaX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'FAST', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'TASEH', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SAPPHIRE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ChangE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'AMAILS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'CAPP', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SAPPHIRES', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'DOSUE-RR', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'DANCE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SUMICO', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SUPAX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SKA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'UPLOAD/DOWNLOAD', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ORGAN', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'PPTA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SKA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'H.E.S.S.', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SPT', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'BICEP', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'VLT', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'MUSE/VIMOS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'POLARBEAR', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'HAWC', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'LIGO', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ALPHA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ADMX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'LAMPOST', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ABRACADABRA', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'CASPEr', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SHAFT', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'HAYSTAC', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SNO', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SENSEI', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SuperCDMS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ARIADNE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SQuAD', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'BREAD', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SQMS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'DarkSRF', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'LZ', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'SNIPE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'Eot-Wash', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ADMX', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'ORPHEUS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'LIGO', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'MAGIS', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'DM-Radio', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'QUALIPHIDE', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'Dark E-field Radio', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
  { name: 'BACON', description: 'Description for Experiment 2', link: 'https://experiment2.com', position: [300, 300], color: 'red' },
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
