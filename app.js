// Sample data (replace with your own data)
const experiments = [
  { name: 'QUAX', description: 'Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description', link: 'https://experiment1.com', position: [-2, -90], color: 'green'},
  { name: 'FLASH', description: 'Description', link: 'https://experiment2.com', position: [-19, -29], color: 'green' },
  { name: 'DarkSide', description: 'Description', link: 'https://experiment2.com', position: [-5, 40], color: 'red' },
  { name: 'XENON', description: 'Description', link: 'https://experiment2.com', position: [15, 60], color: 'red' },
  { name: 'nEDM', description: 'Description', link: 'https://experiment2.com', position: [40, 95], color: 'green' },
  { name: 'OSQAR', description: 'Description', link: 'https://experiment2.com', position: [62, 100], color: 'green' },
  { name: 'CROWS', description: 'Description', link: 'https://experiment2.com', position: [88, 110], color: 'green' },
  { name: 'CAST', description: 'Description', link: 'https://experiment2.com', position: [115, 130], color: 'green' },
  { name: 'BASE', description: 'Description', link: 'https://experiment2.com', position: [138, 140], color: 'green' },
  { name: 'RADES', description: 'Description', link: 'https://experiment2.com', position: [160, 145], color: 'green' },
  { name: 'FUNK', description: 'Description', link: 'https://experiment2.com', position: [185, 145], color: 'red' },
  { name: 'JEDI', description: 'Description', link: 'https://experiment2.com', position: [205, 120], color: 'green' },
  { name: 'GEO600', description: 'Description', link: 'https://experiment2.com', position: [230, 95], color: 'blue' },
  { name: 'WISPDMX', description: 'Description', link: 'https://experiment2.com', position: [250, 85], color: 'red' },
  { name: 'WISPLC', description: 'Description', link: 'https://experiment2.com', position: [270, 60], color: 'green' },
  { name: 'SHIPS', description: 'Description', link: 'https://experiment2.com', position: [295, 40], color: 'red' },
  { name: 'IAXO', description: 'Description', link: 'https://experiment2.com', position: [320, 25], color: 'green' },
  { name: 'ALPS', description: 'Description', link: 'https://experiment2.com', position: [320, -35], color: 'green' },
  { name: 'MADMAX', description: 'Description', link: 'https://experiment2.com', position: [300, -110], color: 'green' },
  { name: 'BRASS', description: 'Description', link: 'https://experiment2.com', position: [280, -125], color: 'red' },
  { name: 'LOFAR', description: 'Description', link: 'https://experiment2.com', position: [258, -146], color: 'red' },
  { name: 'SUPAX', description: 'Description', link: 'https://experiment2.com', position: [235, -168], color: 'red' },
  { name: 'CASPEr', description: 'Description', link: 'https://experiment2.com', position: [213, -173], color: 'green' },
  { name: 'AION', description: 'Description', link: 'https://experiment2.com', position: [190, -173], color: 'blue' },
  { name: 'DAMNED', description: 'Description', link: 'https://experiment2.com', position: [168, -182], color: 'blue' },
  { name: 'SHUKET', description: 'Description', link: 'https://experiment2.com', position: [148, -179], color: 'red' },
  { name: 'GrAHal', description: 'Description', link: 'https://experiment2.com', position: [128, -179], color: 'green' },
  { name: 'DAMIC', description: 'Description', link: 'https://experiment2.com', position: [109, -172], color: 'red' },
  { name: 'EDELWEISS', description: 'Description', link: 'https://experiment2.com', position: [85, -205], color: 'red' },
  { name: 'CADEx', description: 'Description', link: 'https://experiment2.com', position: [65, -150], color: 'green' },
  { name: 'AURIGA', description: 'Description', link: 'https://experiment2.com', position: [45, -140], color: 'blue' },
  { name: 'PVLAS', description: 'Description', link: 'https://experiment2.com', position: [23, -114], color: 'green' },
  { name: 'MAGIC', description: 'Description', link: 'https://experiment2.com', position: [-50, -220], color: 'green' },
  { name: 'NASDUCK', description: 'Description', link: 'https://experiment2.com', position: [20, 212], color: 'green' },
  { name: 'MuDHI', description: 'Description', link: 'https://experiment2.com', position: [-70, 255], color: 'red' },
  { name: 'ARGO-YBJ', description: 'Description', link: 'https://experiment2.com', position: [60, 325], color: 'green' },
  { name: 'PandaX', description: 'Description', link: 'https://experiment2.com', position: [-15, 390], color: 'red' },
  { name: 'FAST', description: 'Description', link: 'https://experiment2.com', position: [-38, 490], color: 'red' },
  { name: 'TASEH', description: 'Description', link: 'https://experiment2.com', position: [-75, 530], color: 'green' },
  { name: 'SAPPHIRE', description: 'Description', link: 'https://experiment2.com', position: [32, 450], color: 'blue' },
  { name: 'ChangE', description: 'Description', link: 'https://experiment2.com', position: [75, 462], color: 'green' },
  { name: 'AMAILS', description: 'Description', link: 'https://experiment2.com', position: [143, 550], color: 'red' },
  { name: 'CAPP', description: 'Description', link: 'https://experiment2.com', position: [80, 655], color: 'green' },
  { name: 'SAPPHIRES', description: 'Description', link: 'https://experiment2.com', position: [-15, 630], color: 'green' },
  { name: 'DOSUE-RR', description: 'Description', link: 'https://experiment2.com', position: [15, 720], color: 'red' },
  { name: 'DANCE', description: 'Description', link: 'https://experiment2.com', position: [45, 760], color: 'green' },
  { name: 'SUMICO', description: 'Description', link: 'https://experiment2.com', position: [75, 760], color: 'green' },
  { name: 'SKA', description: 'Description', link: 'https://experiment2.com', position: [-225, 490], color: 'green' },
  { name: 'UPLOAD/DOWNLOAD', description: 'Description', link: 'https://experiment2.com', position: [-275, 300], color: 'green' },
  { name: 'ORGAN', description: 'Description', link: 'https://experiment2.com', position: [-300, 435], color: 'green' },
  { name: 'PPTA', description: 'Description', link: 'https://experiment2.com', position: [-295,785], color: 'blue' },
  { name: 'SKA', description: 'Description', link: 'https://experiment2.com', position: [-340, 155], color: 'green' },
  { name: 'H.E.S.S.', description: 'Description', link: 'https://experiment2.com', position: [-260, -60], color: 'green' },
  { name: 'SPT', description: 'Description', link: 'https://experiment2.com', position: [-370, -20], color: 'green' },
  { name: 'BICEP', description: 'Description', link: 'https://experiment2.com', position: [-390, -30], color: 'green' },
  { name: 'VLT', description: 'Description', link: 'https://experiment2.com', position: [-305, -322], color: 'green' },
  // { name: 'MUSE/VIMOS', description: 'Description', link: 'https://experiment2.com', position: [300, 300], color: 'green' },
  { name: 'POLARBEAR', description: 'Description', link: 'https://experiment2.com', position: [-240, -320], color: 'green' },
  { name: 'HAWC', description: 'Description', link: 'https://experiment2.com', position: [-75, -610], color: 'green' },
  { name: 'LIGO', description: 'Description', link: 'https://experiment2.com', position: [-30, -500], color: 'blue' },
  { name: 'ALPHA', description: 'Description', link: 'https://experiment2.com', position: [-15, -550], color: 'green' },
  { name: 'ADMX', description: 'Description', link: 'https://experiment2.com', position: [-15, -415], color: 'green' },
  { name: 'LAMPOST', description: 'Description', link: 'https://experiment2.com', position: [30, -425], color: 'red' },
  { name: 'ABRACADABRA', description: 'Description', link: 'https://experiment2.com', position: [55, -365], color: 'green' },
  { name: 'CASPEr', description: 'Description', link: 'https://experiment2.com', position: [75, -355], color: 'green' },
  { name: 'SHAFT', description: 'Description', link: 'https://experiment2.com', position: [95, -342], color: 'green' },
  { name: 'HAYSTAC', description: 'Description', link: 'https://experiment2.com', position: [118, -357], color: 'green' },
  { name: 'SNO', description: 'Description', link: 'https://experiment2.com', position: [138, -390], color: 'green' },
  { name: 'SENSEI', description: 'Description', link: 'https://experiment2.com', position: [165, -385], color: 'blue' },
  { name: 'SuperCDMS', description: 'Description', link: 'https://experiment2.com', position: [190, -425], color: 'blue' },
  { name: 'ARIADNE', description: 'Description', link: 'https://experiment2.com', position: [210, -500], color: 'green' },
  { name: 'SQuAD', description: 'Description', link: 'https://experiment2.com', position: [187, -523], color: 'red' },
  { name: 'BREAD', description: 'Description', link: 'https://experiment2.com', position: [168, -555], color: 'green' },
  { name: 'SQMS', description: 'Description', link: 'https://experiment2.com', position: [148, -575], color: 'red' },
  { name: 'DarkSRF', description: 'Description', link: 'https://experiment2.com', position: [115, -615], color: 'red' },
  { name: 'LZ', description: 'Description', link: 'https://experiment2.com', position: [85, -590], color: 'red' },
  { name: 'SNIPE', description: 'Description', link: 'https://experiment2.com', position: [60, -565], color: 'red' },
  { name: 'Eot-Wash', description: 'Description', link: 'https://experiment2.com', position: [200, -650], color: 'blue' },
  { name: 'ADMX', description: 'Description', link: 'https://experiment2.com', position: [187, -720], color: 'green' },
  { name: 'ORPHEUS', description: 'Description', link: 'https://experiment2.com', position: [160, -785], color: 'red' },
  { name: 'LIGO', description: 'Description', link: 'https://experiment2.com', position: [125, -770], color: 'blue' },
  { name: 'MAGIS', description: 'Description', link: 'https://experiment2.com', position: [102, -765], color: 'blue' },
  { name: 'DM-Radio', description: 'Description', link: 'https://experiment2.com', position: [78, -785], color: 'red' },
  { name: 'QUALIPHIDE', description: 'Description', link: 'https://experiment2.com', position: [45, -815], color: 'red' },
  { name: 'Dark E-field Radio', description: 'Description', link: 'https://experiment2.com', position: [18, -835], color: 'red' },
  { name: 'BACON', description: 'Description', link: 'https://experiment2.com', position: [-20, -675], color: 'blue' },
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
  zoomControl: false
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
  const iconStyle = `color: ${color}; font-size: 20px; font-family: Graphik-Bold, sans-serif; white-space: nowrap`;
  return L.divIcon({ html: `<span style="${iconStyle}">${text}</span>`, className: 'colored-text-marker' });
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

// Function to show experiment details
function showExperimentDetails(index) {
  const experiment = experiments[index];
  alert(`Experiment Name: ${experiment.name}\nDescription: ${experiment.description}\nLink: ${experiment.link}`);
}
