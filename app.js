// Sample data (replace with your own data)
const experiments = [
  {
    name: 'QUAX',
    description: 'The QUaerere AXions (QUAX) experiment is a direct search for galactic dark matter in the form of axion or axion like particles. Two detectors are being built at Legnaro and Frascati National Laboratories of INFN, and the collaboration includes members from the INFN sections of Padova, Salerno and Trento. Hybrid and dielectric microwave cavities operated in multi- Tesla magnetic fields, coupled to quantum - limited receivers will allow for probing axions with (35 - 45) microeV mass. Research activity is also focused on operation of a ferrimagnetic haloscope, based on the axion - electron interaction. These experiments might in the near future help to put new insights in the understanding of our still very unknown Universe.',
    link: 'https://www.pd.infn.it/eng/quax/',
    position: [-35, -70],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'FLASH',
    description: 'FLASH is an experiment proposed at the Laboratori Nazionali of Frascati of INFN. It is a classical Sikivie haloscope built by recycling a 3 m diameter and 2.2 m long superconducting magnet of 1.1 T, allowing the search of galactic axions through the gaγγ coupling in the mass range around 1 μeV <a href="https://arxiv.org/abs/2309.00351">[Phys.Dark Univ. 42 (2023) 101370]</a>.',
    link: 'https://coldlab.lnf.infn.it/experiments/klash/',
    position: [-57, -15],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'DarkSide',
    description: 'The DarkSide collaboration operated the DarkSide-50 detector, a dual-phase argon Time Projection Chamber, developed for use in a search for direct evidence of dark matter from 2013 to 2020. The experiment was hosted in Hall C of the Laboratori Nazionali del Gran Sasso. The Global Argon Dark Matter Collaboration was formed to unite the global community interested in dark- matter searches using liquid argon target.The collaboration is currently building inside the Gran Sasso National Laboratory Hall - C DarkSide - 20k, a two - phase liquid argon detector with a 50 tonnes active volume, 1000 times more than its predecessor DarkSide - 50. The experiment is expected to begin operation in 2026 and is designed to either detect WIMP dark matter or reach a 90 % CL exclusion sensitivity to WIMP - nucleon cross sections of 6.3e-48 cm ^ 2 at the mass of 1 TeV / c ^ 2.',
    link: 'https://darkside.lngs.infn.it',
    position: [-5, 40],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'XENON',
    description: 'Description',
    link: 'https://xenonexperiment.org',
    position: [15, 60],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'nEDM',
    description: 'Description',
    link: 'https://www.psi.ch/en/nedm',
    position: [40, 95],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'OSQAR',
    description: 'Description',
    link: 'http://osqar.web.cern.ch/index.html',
    position: [62, 100],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'CROWS',
    description: 'Description',
    link: 'link',
    position: [88, 110],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'CAST-CAPP',
    description: 'CAST-CAPP is an axion haloscope detector that operated at CERN in Geneva, Switzerland, inside the 9T CAST dipole magnet. It consists of four identical rectangular cavities that can be tuned in a wide range of about 660 MHz around 5 GHz, with a fast speed of ~10 MHz/min. CAST-CAPP employed for the first time the phase-matching technique to increase the effective volume and also its detection sensitivity. With 172 days of data, it was able to set world-class limits on the galactic DM axion-photon conversion and laid the foundations for a search for transient events by making use of the two newly developed techniques of fast scanning and phase-matching.',
    link: 'https://www.nature.com/articles/s41467-022-33913-6 ',
    position: [115, 130],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SuperDark',
    description: 'SuperDark is a planned experiment at the Institute for Quantum Optics and Quantum Information (IQOQI) in Vienna, Austria. It consists of a mechanical sensor which will be set up to be sensitive to vector B-L dark matter, as well as to dark photons and axion-like particles. The mechanical system involves a magnetically-levitated gram-scale superconductor. The motion of the superconductor will be highly isolated from noise sources, and it will be precisely read out using superconducting quantum circuits.',
    link: '',
    position: [115, 260],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'CAST',
    description: 'The CERN Axion Solar Telescope (CAST) located at CERN in Switzerland, was designed to detect solar axions. Operational from 2003 to 2021, CAST utilized a powerful 9.2-meter-long superconducting 9 T LHC test magnet to convert solar axions into X-rays. By tracking the Sun for approximately 1.5 hours at sunrise and sunset daily, CAST effectively functioned as a telescope, focusing the expected X-rays onto detectors at the one end of the dipole magnet. While the experiment did not yield an axion signal, it established world-leading constraints on the axion coupling to photons and electrons and pioneered the use of cutting-edge X-ray detector technologies, laying the groundwork for next-generation solar, dark matter, and other axion searches. https://www.nature.com/articles/nphys4109',
    link: 'https://home.cern/science/experiments/cast',
    position: [138, 210],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'BASE',
    description: 'Description',
    link: 'https://base.web.cern.ch/index.php/',
    position: [138, 140],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'RADES',
    description: 'RADES is short-hand for - Relic Axion Dark-Matter Exploratory Setup and has performed several physics searches for axions around 9-10GHz (https://arxiv.org/abs/2104.13798) On the long term we would like to run babyIAXO as a haloscope.',
    link: 'link',
    position: [160, 145],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'FUNK',
    description: 'Description',
    link: 'https://www.iap.kit.edu/funk/index.php',
    position: [185, 145],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'JEDI',
    description: 'Description',
    link: 'http://collaborations.fz-juelich.de/ikp/jedi/index.shtml',
    position: [205, 120],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'GEO600',
    description: 'Description',
    link: 'https://www.geo600.org',
    position: [230, 95],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'WISPDMX',
    description: 'Description',
    link: 'link',
    position: [250, 85],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'WISPLC',
    description: 'WISPLC is an experiment located at the University of Hamburg, Germany, and is a precision direct detection experiment for light dark matter candidates in the neV-scale. It is based on a lumped element approach using a pickup coil inside a 14T solenoid magnetic field and an LC resonator, enhancing the expected signal from the axion-induced oscillating current.',
    link: '',
    position: [270, 60],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SHIPS',
    description: 'Description',
    link: 'link',
    position: [295, 40],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'IAXO',
    description: 'The International Axion Observatory experiment is a next generation axion helioscope, designed to investigate the potential emission of axions and axion-like particles from the Sun. The baseline search aims to measure the coupling constant of axions to photons via the Primakoff mechanism, and the coupling of axions to electrons and nucleons, which involves non-Primakoff mechanisms. IAXO experiment will also have physics potential beyond this and will be able to explore other exotic physics in the realm of low-energy particle physics, such as hidden photons or chameleons, and the magnet design allows the integration of microwaves cavities or antennas, enabling the pursuit of relic axions.',
    link: 'https://iaxo.desy.de',
    position: [320, 25],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'WISPFI',
    description: 'WISPFI experiment is located at the University of Hamburg, Germany. It consists of a Mach-Zhender interferometer based on hollow-core photonic crystal fibers looking for an amplitude reduction following a resonant photon-to-axion conversion in the presence of an external magnetic field. The probed axion masses (28 meV–100 meV) can be tuned by regulating the gas pressure inside the fiber reaching the two-photon coupling expected for the QCD axion.',
    link: '',
    position: [350, -10],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'ALPS',
    description: 'Any Light Particle Search II is a light-shining through a wall experiment to search for WISPs. Light from strong laser is shone into a magnetic field. Laser photons can be converted into a WISPs in front of a light-blocking barrier (production region) and reconverted into photons behind that barrier (regeneration region).  The experiment exploits optical resonators for laser power build-up in a large-scale optical cavity to boost the available power for the WISP production as well as their reconversion probability to light.',
    link: 'https://alps.desy.de/our_activities/axion_wisp_experiments/alps_ii/',
    position: [320, -35],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'MADMAX',
    description: 'The MAgnetized Disk and Mirror Axion eXperiment MADMAX is a dielectric haloscope. It consists of several parallel dielectric disks, whose separations can be adjusted and which are placed in a strong magnetic dipole field. Dark matter axions would induced electromagnetic waves generated at discontinuities in the electrical constant. This new approach allows to search for radio frequencies in the 10-100 GHz domain, thus enabling searching for relatively heavy dark matter axions. World-leading limits have been published with small-scale prototypes in 2024 already.',
    link: 'https://madmax.mpp.mpg.de/news.html',
    position: [300, -110],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'BRASS',
    description: 'Description',
    link: 'https://www.physik.uni-hamburg.de/en/iexp/gruppe-horns/forschung/brass.html',
    position: [280, -125],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'LOFAR',
    description: 'Description',
    link: 'link',
    position: [258, -146],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'SUPAX',
    description: 'SUPAX is an experiment located at the university of Mainz and part of the RADES project. It uses superconducting RF resonators around 8 GHz within a 14T magnetic field to search for high frequency gravitational waves and axions.',
    link: '[web page to be created]',
    position: [235, -168],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'CASPEr',
    description: 'Description',
    link: 'https://budker.uni-mainz.de/?page_id=7',
    position: [213, -173],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'AION',
    description: 'Description',
    link: 'link',
    position: [190, -173],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'DAMNED',
    description: 'DAMNED is an experiment searching for scalar dark matter candidates, which ran at SYRTE, Observatoire de Paris. This experiment looks for variations of fundamental constants, which would modify the optical length and refractive index of objects. The idea is to compare the length of an ultrastable cavity with itself in the past, by means of an unequal Mach Zehnder interferometer.',
    link: 'https://link.aps.org/doi/10.1103/PhysRevLett.126.051301',
    position: [168, -182],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'SHUKET',
    description: 'SHUKET is an experiment located at CEA Saclay, built for the detection of dark photon dark matter coupling with electromagnetism. In this setup, a dish antenna with low curvature acts as an emitter for the electromagnetic field and a horn antenna is placed at its curvature center to detect the time averaged power.  https://journals.aps.org/prd/abstract/10.1103/PhysRevD.110.035001',
    link: 'https://link.aps.org/doi/10.1103/PhysRevLett.122.201801',
    position: [148, -179],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'NA64',
    description: 'NA64 is an experiment located at CERN SPS (Super Proton Synchrotron), active since 2016. It exploits  100-GeV electron and positron beams impinging on a thick, active target (an electromagnetic calorimeter) to detect, via a missing-energy signature, the invisible decays of dark photons with masses in the ~1 MeV - 100 MeV range, axion-like particles, and new Dark Sector states.',
    link: 'https://na64.web.cern.ch/',
    position: [128, -212],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'GrAHal',
    description: 'Description',
    link: 'link',
    position: [109, -179],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'DAMIC',
    description: 'Description',
    link: 'link',
    position: [85, -172],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'EDELWEISS',
    description: 'Description',
    link: 'link',
    position: [65, -203],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'CADEx',
    description: 'The Canfranc Axion Detection Experiment (CADEx) is a planned search for the Dark Matter axion in the mass range (330–460 μeV) within the W-band (80–110 GHz). CADEx combines a series of microwave resonant cavity haloscopes with a broadband incoherent detector system (based on kinetic inductance detectors, KIDs) to be installed in the dilution refrigerator in the Canfranc Underground Lab (LSC). CADEx is currently in the design and development phase.',
    link: 'https://arxiv.org/abs/2206.02980',
    position: [45, -140],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'AURIGA',
    description: 'Description',
    link: 'link',
    position: [21, -114],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'PVLAS',
    description: 'Description',
    link: 'link',
    position: [-13, -85],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'MAGIC',
    description: 'Description',
    link: 'link',
    position: [-50, -220],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'NASDUCK',
    description: 'Description',
    link: 'link',
    position: [20, 212],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'MuDHI',
    description: 'Description',
    link: 'link',
    position: [-70, 255],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'ARGO-YBJ',
    description: 'Description',
    link: 'link',
    position: [60, 325],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'PandaX',
    description: 'Description',
    link: 'link',
    position: [-15, 390],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'FAST',
    description: 'Description',
    link: 'link',
    position: [-38, 490],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'TASEH',
    description: 'Description',
    link: 'link',
    position: [-75, 530],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SAPPHIRE',
    description: 'Description',
    link: 'link',
    position: [32, 450],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'ChangE',
    description: 'Description',
    link: 'link',
    position: [75, 462],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'AMAILS',
    description: 'Description',
    link: 'link',
    position: [143, 550],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'CAPP',
    description: 'CAPP is currently running a number of high sensitivity axion haloscopes in the 1-8 GHz frequency range. The CAPP Main Axion eXperiment (CAPP-MAX) utilizes a 12 T solenoid magnet, made with Nb3Sn cable, with 320mm aperture, a 37 liter microwave cavity cooled to below 30 mK, and Josephson Parametric Amplifiers (JPA) bundled together with total system noise below 200mK. The experiment achieved 3 MHz/day in the 1-1.2 GHz range at DFSZ sensitivity. With the implementation of a high-temperature-superconducting (HTS) cavity the scanning rate of the next frequency target 1.2 - 1.5 GHz at DFSZ sensitivity is expected to be well over 10 MHz/day. A number of smaller experiments also plan to use HTS cavities and will improve their sensitivity from KSVZ to DFSZ in the next runs.',
    link: 'https://www.ibs.re.kr/capp/',
    position: [80, 655],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SAPPHIRES',
    description: 'Description',
    link: 'link',
    position: [-15, 630],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'DOSUE-RR',
    description: 'Description',
    link: 'link',
    position: [15, 720],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'DANCE',
    description: 'Description',
    link: 'link',
    position: [45, 760],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SUMICO',
    description: 'Description',
    link: 'link',
    position: [75, 760],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SKA',
    description: 'Description',
    link: 'link',
    position: [-225, 490],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'UPLOAD/DOWNLOAD',
    description: 'Description',
    link: 'link',
    position: [-275, 300],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'ORGAN',
    description: 'Description',
    link: 'link',
    position: [-300, 435],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'PPTA',
    description: 'Description',
    link: 'link',
    position: [-295, 785],
    color: 'rgba(0, 118, 186, 0.54)'
  },
  {
    name: 'SKA',
    description: 'Description',
    link: 'link',
    position: [-340, 155],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'H.E.S.S.',
    description: 'Description',
    link: 'link',
    position: [-260, -60],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'SPT',
    description: 'Description',
    link: 'link',
    position: [-370, -20],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'BICEP',
    description: 'Description',
    link: 'link',
    position: [-390, -30],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'VLT',
    description: 'Description',
    link: 'link',
    position: [-305, -322],
    color: 'rgba(29,177,0,0.54)'
  },
  // { name: 'MUSE/VIMOS', 
  // description: 'Description', 
  // link: 'link', 
  // position: [300, 300], 
  // color: 'rgba(29,177,0,1)' },
  {
    name: 'POLARBEAR',
    description: 'Description',
    link: 'link',
    position: [-240, -320],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'HAWC',
    description: 'Description',
    link: 'link',
    position: [-75, -610],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'LIGO',
    description: 'Description',
    link: 'link',
    position: [-20, -490],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'ALPHA',
    description: 'Description',
    link: 'link',
    position: [-10, -570],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'ADMX',
    description: 'ADMX is an axion haloscope, which uses a strong magnetic field to convert dark matter axions to detectable to microwave photons. The ADMX G2 experiment is one of the US Department of Energy&apos;s flagship dark matter searches, and the only one looking for axions.The experiment consists of a large magnet, a microwave cavity, and ultra-sensitive low-noise quantum electronics.',
    link: 'https://depts.washington.edu/admx/',
    position: [-15, -415],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'LAMPOST',
    description: 'Description',
    link: 'link',
    position: [30, -425],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'ABRACADABRA',
    description: 'Description',
    link: 'link',
    position: [55, -365],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'CASPEr',
    description: 'Description',
    link: 'link',
    position: [75, -355],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SHAFT',
    description: 'Description',
    link: 'link',
    position: [95, -342],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'HAYSTAC',
    description: 'Description',
    link: 'link',
    position: [118, -357],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SNO',
    description: 'Description',
    link: 'link',
    position: [138, -390],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SENSEI',
    description: 'Description',
    link: 'link',
    position: [165, -385],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'SuperCDMS',
    description: 'Description',
    link: 'link',
    position: [190, -425],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'ARIADNE',
    description: 'Description',
    link: 'link',
    position: [210, -500],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SQuAD',
    description: 'Description',
    link: 'link',
    position: [187, -523],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'BREAD',
    description: 'Description',
    link: 'link',
    position: [168, -555],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SQMS',
    description: 'Description',
    link: 'link',
    position: [148, -575],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'DarkSRF',
    description: 'Description',
    link: 'link',
    position: [115, -615],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'LZ',
    description: 'Description',
    link: 'link',
    position: [85, -590],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'SNIPE-Hunt',
    description: 'Description',
    link: ' https://arxiv.org/abs/2306.11575#',
    position: [220, -320],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'SNIPE-Hunt',
    description: 'Description',
    link: ' https://arxiv.org/abs/2306.11575#',
    position: [40, -590],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'E&ouml;t-Wash',
    description: 'Description',
    link: 'link',
    position: [200, -650],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'ADMX',
    description: 'ADMX is an axion haloscope, which uses a strong magnetic field to convert dark matter axions to detectable to microwave photons. The ADMX G2 experiment is one of the US Department of Energy&apos;s flagship dark matter searches, and the only one looking for axions.The experiment consists of a large magnet, a microwave cavity, and ultra-sensitive low-noise quantum electronics.',
    link: 'https://depts.washington.edu/admx/',
    position: [187, -720],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'ORPHEUS',
    description: 'Description',
    link: 'link',
    position: [160, -785],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'LIGO',
    description: 'Description',
    link: 'link',
    position: [125, -770],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'MAGIS',
    description: 'Description',
    link: 'link',
    position: [102, -765],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'DM-Radio',
    description: 'Description',
    link: 'link',
    position: [78, -785],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'QUALIPHIDE',
    description: 'Description',
    link: 'link',
    position: [45, -815],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'Dark E-field Radio',
    description: 'Description',
    link: 'link',
    position: [18, -835],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'BACON',
    description: 'Description',
    link: 'link',
    position: [-20, -675],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'SuperMAG',
    description: 'Description',
    link: 'link',
    position: [290, 472],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'GNOME',
    description: 'Description',
    link: ' https://budker.uni-mainz.de/gnome/',
    position: [250, 490],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'Chandra',
    description: 'Description',
    link: 'link',
    position: [370, 655],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'NuSTAR',
    description: 'Description',
    link: 'link',
    position: [370, 760],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'Fermi',
    description: 'Description',
    link: 'link',
    position: [345, 680],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'Planck',
    description: 'Description',
    link: 'link',
    position: [345, 750],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'INTEGRAL',
    description: 'Description',
    link: 'link',
    position: [320, 700],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'XMM-Newton',
    description: 'Description',
    link: 'link',
    position: [295, 690],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'eROSITA',
    description: 'Description',
    link: 'link',
    position: [270, 670],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'COBE',
    description: 'Description',
    link: 'link',
    position: [270, 780],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'HINODE',
    description: 'Description',
    link: 'link',
    position: [245, 680],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'LISA',
    description: 'Description',
    link: 'link',
    position: [245, 780],
    color: 'rgba(0, 118, 186, 0.54)'
  },
  {
    name: 'MICROSCOPE',
    description: 'Description',
    link: 'link',
    position: [220, 680],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'RadioAxion',
    description: 'The RadioAxion-&alpha; experiment aims to detect axion dark matter by observing time-modulated changes in radioisotope decay rates deep underground. Focusing on the &alpha;-decay of heavy isotopes, particularly Americium-241, this experiment, installed at the Gran Sasso Laboratory, investigates potential time variations in &alpha;-radioactivity induced by an oscillating axion background. RadioAxion-&alpha; is designed to explore a wide range of oscillation periods, from microseconds to a year, enabling sensitive constraints on the axion decay constant across a vast axion mass range—from 10<sup>-9</sup> eV to 10<sup>-22</sup> eV — with anticipated limits to be obtained already after few months of data collection. ',
    link: 'https://www.sciencedirect.com/science/article/pii/S0370269324003940?via%3Dihub',
    position: [-40, 60],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'PADME',
    description: "The PADME experiment (Positron Annihilation into Dark Matter Experiment) at INFN's Frascati National Laboratory aims to search for a Dark Photon through positron-on-target collisions at the DAΦNE Beam Test Facility. PADME investigates new physics with minimal model dependence by studying electron-positron interactions in a fixed-target setup, probing the invariant mass range from a few MeV up to about 24 MeV. The experiment conducted two data acquisition campaigns between 2018 and 2020, focusing on the search for an A' (Dark Photon) with a mass near 20 MeV and studying Standard Model processes, such as electron-positron annihilation into γγ pairs [https://journals.aps.org/prd/abstract/10.1103/PhysRevD.107.012008]. Recently, the collaboration has concentrated on examining the Bhabha scattering process to explore the potential existence of the X17 boson, a candidate for explaining the anomaly observed in the nuclear transition of 8Be.",
    link: 'https://padme.lnf.infn.it/',
    position: [-87, -15],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'NA62',
    description: 'The  experiment was built to measure precisely the branching ratio ${\cal B}(K^+\to\pi^+\nu\bar\nu$), and has recently measured this decay with a 5 sigma significance (https://home.cern/news/press-release/physics/na62-experiment-cern-observes-ultra-rare-particle-decay). Thanks to its high intensity beam and detector performance(redundant particle- identification capability, extremely  efficient  veto  system  and  high  resolution  measurements  of  momentum, time, and energy), NA62 has also achieved sensitivities to long-lived light mediators in a variety of new-physics scenarios.',
    link: 'https://na48.web.cern.ch/Welcome/papers/Overview.html ',
    position: [158, -250],
    color: 'rgba(238,34,13,1)'
  },
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
  const marker = L.marker(markerPosition, { opacity: 1.0, icon: coloredTextMarker }).addTo(map);
  marker.bindPopup(`<b>${experiment.name}</b><br>${experiment.description}<br><a href="${experiment.link}" target="_blank">Experiment Page</a>`);
});

// Add a grid overlay
// addGridOverlay(map);

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
// function addGridOverlay(map) {
// Define the grid lines
// const gridLines = [];

// Vertical lines
// for (let x = -900; x <= 900; x += 50) {
//   const line = [[-500, x], [500, x]];
//   gridLines.push(line);
// }

// Horizontal lines
// for (let y = -500; y <= 500; y += 50) {
//   const line = [[y, -900], [y, 900]];
//   gridLines.push(line);
// }

// Add the grid to the map
//   gridLines.forEach(line => {
//     L.polyline(line, { color: 'gray', weight: 1 }).addTo(map);
//   });
// }

// Function to show experiment details
function showExperimentDetails(index) {
  const experiment = experiments[index];
  alert(`Experiment Name: ${experiment.name}\nDescription: ${experiment.description}\nLink: ${experiment.link}`);
}
