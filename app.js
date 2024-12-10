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
    description: 'The DarkSide collaboration operated the DarkSide-50 detector, a dual-phase argon Time Projection Chamber, developed for use in a search for direct evidence of dark matter from 2013 to 2020. The experiment was hosted in Hall C of the Laboratori Nazionali del Gran Sasso. The Global Argon Dark Matter Collaboration was formed to unite the global community interested in dark- matter searches using liquid argon target.The collaboration is currently building inside the Gran Sasso National Laboratory Hall - C DarkSide - 20k, a two - phase liquid argon detector with a 50 tonnes active volume, 1000 times more than its predecessor DarkSide - 50. The experiment is expected to begin operation in 2026 and is designed to either detect WIMP dark matter or reach a 90 % CL exclusion sensitivity to WIMP - nucleon cross sections of 6.3x10<sup>-48</sup> cm<sup>2</sup> at the mass of 1 TeV / c<sup>2</sup>.',
    link: 'https://darkside.lngs.infn.it',
    position: [-5, 40],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'XENON',
    description: 'The XENON project, based at the Gran Sasso Laboratory in Italy, conducts a series of experiments aimed at detecting dark matter particles, particularly weakly interacting massive particles (WIMPs), by observing rare nuclear recoil interactions in liquid xenon. Its latest and most advanced detector, XENONnT, features a dual-phase time projection chamber (TPC) containing 5.9 tonnes of xenon and 494 photomultiplier tubes to capture interaction signals. Enhancements such as gadolinium-loaded water for improved neutron vetoing and advanced xenon purification systems have boosted its sensitivity. XENONnT began data collection in 2020, continuing a legacy of increasingly advanced detectors since the project started in 2002.',
    link: 'https://xenonexperiment.org',
    position: [15, 60],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'nEDM',
    description: 'The nEDM project conducts precision low-energy particle physics experiments to investigate fundamental symmetries and interactions involving neutrons. Its flagship initiative, the n2EDM experiment at the Paul Scherrer Institute, aims to measure the neutron electric dipole moment with tenfold greater sensitivity than previous studies. This could uncover new sources of CP-violation and reveal physics beyond the Standard Model.',
    link: 'https://www.psi.ch/en/nedm',
    position: [40, 95],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'OSQAR',
    description: 'The OSQAR (Optical Search for QED Vacuum Bifringence, Axions and Photon Regeneration) experiment at CERN searches for axions, hypothetical particles that could explain dark matter and the matter-antimatter imbalance in the universe. Located in CERN`s magnet- testing facility, OSQAR uses two powerful superconducting magnets to expose a laser beam to a 9 Tesla magnetic field, potentially converting photons into axions.These axions could pass through a barrier and convert back into photons, a phenomenon known as `light shining through a wall`. OSQAR also investigates vacuum properties in electromagnetic fields, advancing research into vacuum - based phenomena.',
    link: 'http://osqar.web.cern.ch/index.html',
    position: [62, 100],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'CROWS',
    description: 'The CERN Resonant WISP Search (CROWS) experiment explores Weakly Interacting Sub-eV Particles (WISPs), such as axions and hidden-sector photons, using the "light shining through a wall" technique with microwaves. By employing low-loss microwave cavities and electromagnetic shielding, CROWS detects weak microwave signals indicative of WISP-photon interactions. Its microwave-based approach enhances sensitivity to low-mass particles but limits the maximum detectable particle mass. CROWS has set a lower bound on the coupling constant g=4.5x10<sup>−8</sup> GeV<sup>−1</sup> for axion-like particles with a mass of 7.2 μeV and a coupling constant χ = 4.1x10<sup>−9</sup> for hidden-sector photons at a dark photon mass of 10.8 μeV.',
    link: 'https://journals.aps.org/prd/abstract/10.1103/PhysRevD.88.075014',
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
    description: 'The CERN Axion Solar Telescope (CAST) located at CERN in Switzerland, was designed to detect solar axions. Operational from 2003 to 2021, CAST utilized a powerful 9.2-meter-long superconducting 9 T LHC test magnet to convert solar axions into X-rays. By tracking the Sun for approximately 1.5 hours at sunrise and sunset daily, CAST effectively functioned as a telescope, focusing the expected X-rays onto detectors at the one end of the dipole magnet. While the experiment did not yield an axion signal, it established world-leading constraints on the axion coupling to photons and electrons and pioneered the use of cutting-edge X-ray detector technologies, laying the groundwork for next-generation solar, dark matter, and other axion searches. <a href="https://www.nature.com/articles/nphys4109">[Nature Physics volume 13, pages 584–590 (2017)]</a>',
    link: 'https://home.cern/science/experiments/cast',
    position: [138, 210],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'BASE',
    description: 'The Baryon Antibaryon Symmetry Experiment (BASE) at CERN studies matter-antimatter asymmetry by precisely comparing the magnetic moments and charge-to-mass ratios of protons and antiprotons <a href="https://link.springer.com/article/10.1140/epjst/e2015-02607-4">[link]</a>. Its setup includes four Penning traps, achieving parts-per-billion measurement precision to test CPT symmetry, which posits that particles and antiparticles should exhibit mirrored properties. BASE has achieved unprecedented accuracy in measuring antiproton magnetic moments and charge-to-mass ratios, performing one of the most stringent CPT symmetry tests for baryons. Its technology also sets stringent limits on axion-photon conversions.',
    link: 'https://base.web.cern.ch/index.php/',
    position: [138, 140],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'RADES-CAST',
    description: 'RADES is short-hand for - Relic Axion Dark-Matter Exploratory Setup and has performed several physics searches for axions around 9-10GHz (<a href="https://arxiv.org/abs/2104.13798">[2104.13798]</a>) On the long term we would like to run babyIAXO as a haloscope.',
    link: 'link',
    position: [160, 145],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'FUNK',
    description: 'The FUNK experiment at the Karlsruhe Institute of Technology (KIT) seeks to detect ultralight dark matter particles known as hidden photons using a large spherical mirror as an electromagnetic antenna. This setup enables FUNK to establish new limits on hidden photons—a potential dark matter candidate—by focusing faint electromagnetic waves emitted when hidden photons interact with the mirror. The experiment`s unique `dish-antenna` method facilitates a broad search across various hidden- photon masses.Detection would be confirmed by observing small shifts as Earth moves through the dark - matter field < a href = "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.102.042001" > [Phys.Rev.D 102 042001]</a >.',
    link: 'https://www.iap.kit.edu/funk/index.php',
    position: [185, 145],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'JEDI',
    description: 'The JEDI (Jülich Electric Dipole moment Investigations) collaboration, established in 2011, is dedicated to measuring the electric dipole moments (EDMs) of charged particles in a storage ring. This research is vital for understanding matter-antimatter asymmetry, exploring CP-violation, and testing theories beyond the Standard Model. The team performs high-precision measurements at the COSY storage ring in Jülich, laying the groundwork for a dedicated EDM storage ring in the future.',
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
    description: 'The WISPDMX (WISP Dark Matter eXperiment) experiment at the University of Hamburg searches for dark photon dark matter (DPDM) using a resonant cavity setup based on Sikivie’s haloscope concept. WISPDMX scans multiple resonant modes and off-resonant frequencies using a broadband receiver, enhancing its sensitivity to a wide range of DPDM parameters. Its setup includes a large HERA resonant cavity, loop antenna, and an amplifier chain, with data captured via high-speed digital acquisition for real-time spectral analysis. During its first science run, WISPDMX scanned frequencies from 100 MHz to 500 MHz, setting exclusion limits on the DPDM coupling constant, with one candidate signal later identified as radio-frequency interference (RFI).',
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
    description: 'The SHIPS (Solar Hidden Photon Search) experiment, conducted at the Hamburg Observatory, searched for hidden photons produced in the Sun. The experiment employed a specially designed telescope mounted on the Oskar Lühning Telescope. Its innovative design ensured shielding from external light and utilized advanced detectors, such as Fresnel lenses and electron-multiplying CCDs. SHIPS was a collaboration between the Hamburg Observatory, DESY, and the Max Planck Institute.',
    link: 'https://iopscience.iop.org/article/10.1088/1475-7516/2015/08/011',
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
    name: 'RADES-BabyIAXO',
    description: 'RADES-BabyIAXO is a low-frequency axion haloscope setup suitable for operation inside the future BabyIAXO magnet, at DESY. This proposal has a potential sensitivity to the axion-photon coupling down to values corresponding to the KSVZ model, in the currently unexplored mass range between 1 and 2 ueV, after a total effective exposure of 440 days. This mass range is covered by the use of four differently dimensioned 5-meter-long cavities, equipped with a tuning mechanism based on inner turning plates. The setup includes a cryostat and cooling system to cool down the BabyIAXO bore down to about 5 K, as well as appropriate low-noise signal amplification and detection chain.',
    link: 'https://arxiv.org/abs/2306.17243',
    position: [370, -10],
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
    description: 'The BRASS (Broadband Radiometric Axion/ALPs Searches Setup) experiment aims to detect dark photons and axion-like particles, both potential candidates for dark matter. Its design features a shielded chamber with a flat conducting conversion surface where electromagnetic signals from dark photons or axion/ALPs are generated. A parabolic mirror focuses these signals onto a detector. Results from the BRASS-p prototype were presented in Reference <a href="https://iopscience.iop.org/article/10.1088/1475-7516/2023/08/077">[1]</a>.',
    link: 'https://www.physik.uni-hamburg.de/en/iexp/gruppe-horns/forschung/brass.html',
    position: [280, -125],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'LOFAR',
    description: 'LOFAR (LOw Frequency ARray) is the largest radio telescope operating at Earth’s lowest observable frequencies (~10–240 MHz). It features an advanced network and computing system capable of managing vast data volumes. LOFAR`s mission is to map the universe with unprecedented sensitivity and resolution, surpassing earlier surveys like those by the VLA and GMRT. It remains the most sensitive observatory at these frequencies until the Square Kilometre Array (SKA) becomes operational in the late 2020s. LOFAR`s large- scale interferometric design also enables highly sensitive searches for dark photon dark matter across frequencies ranging from 10 MHz to 10 GHz.',
    link: 'https://www.astron.nl/telescopes/lofar/',
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
    description: 'The Cosmic Axion Spin Precession Experiment (CASPEr) uses nuclear magnetic resonance techniques to search for ultralight dark matter. CASPEr is divided into two main research directions. CASPEr-Gradient, located at Helmholtz Institute Mainz (Mainz, Germany), searches for spin precession induced by the coupling between axionlike particles and the nuclear spins. The coupling of axions to the gluon field is explored by CASPEr-Electric located at Boston University (Boston, USA), soon to be relocated to Johns Hopkins University (Baltimore, USA). ',
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
    description: 'SHUKET is an experiment located at CEA Saclay, built for the detection of dark photon dark matter coupling with electromagnetism. In this setup, a dish antenna with low curvature acts as an emitter for the electromagnetic field and a horn antenna is placed at its curvature center to detect the time averaged power.  <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.110.035001">[Phys. Rev. D 110 035001]</a>',
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
    description: 'The GrAHal (Grenoble Axion Haloscopes) project leverages the LNCMI-Grenoble`s 43 T hybrid magnet platform to search for axions in the mass range of 1–120 μeV (0.2–30 GHz).Its three parallel approaches include BabyGrAHal(targeting 4–7 GHz using haloscopes with superconducting magnets), GrAHal - CAPP(focusing on 300–600 MHz in collaboration with Korea`s CAPP), and GrAHal-HF-43T (exploring higher frequencies around 12.78 GHz using RF cavities). Innovations such as high-temperature superconducting components and advanced cryogenic systems push the sensitivity limits of axion detection.',
    link: 'https://grahal.neel.cnrs.fr',
    position: [109, -179],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'DAMIC',
    description: 'The DAMIC (DArk Matter In CCDs) experiment employs advanced charge-coupled devices (CCDs) to search for dark matter particles, leveraging their exceptional sensitivity and spatial resolution. These unusually thick CCDs, capable of detecting faint signals of just a few electrons, are designed to capture rare interactions of dark matter with nuclei or electrons while minimizing background noise. A prototype is currently operational at SNOLAB in Canada, and the upcoming DAMIC-M experiment in France will feature the largest CCDs ever built, equipped with groundbreaking signal readout technology enabling single-electron detection. This innovation positions DAMIC-M to significantly advance the search for dark matter.',
    link: 'https://damic.uchicago.edu',
    position: [85, -172],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'EDELWEISS',
    description: 'The EDELWEISS (Expérience pour DEtecter Les WIMPs En Site Souterrain) experiment, located at the Modane Underground Laboratory in France, searches for dark matter by detecting interactions between Weakly Interacting Massive Particles (WIMPs) and germanium crystals. It uses cryogenic ionization-heat bolometers operating at 20 mK, measuring both temperature changes and ionization signals to distinguish WIMP-induced nuclear recoils from background events with over 99.98% efficiency. Shielding and a deep underground location minimize radioactivity interference. EDELWEISS directly tests the WIMP hypothesis by capturing rare, low-energy events consistent with dark matter interactions.',
    link: 'http://edelweiss.in2p3.fr/Presentation/index.php',
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
    name: 'RADES-LSC',
    description: 'RADES-LSC proposal combines single-photon detection by means of 3D transmon, magnetic tuning and the use of high temperature superconductors to enhance the sensitivity of the axion dark matter detection in the 30 - 70 ueV mass range. The experiment will be developed as part of the ERC Synergy DarkQuantum project and is planned to be located at the Canfranc Underground Laboratory (LSC).',
    link: 'https://cordis.europa.eu/project/id/101118911',
    position: [23, -260],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'AURIGA',
    description: 'AURIGA (Antenna Ultracriogenica Risonante per l`Indagine Gravitazionale Astronomica) was an ultracryogenic resonant- bar gravitational wave detector at the INFN National Laboratory of Legnaro in Italy.Operating since 2004, it featured a 2.2 - ton, 3 - meter aluminum alloy bar cooled to liquid helium temperatures, achieving exceptional sensitivity to gravitational waves at a resonance frequency of approximately 900 Hz.Advanced technologies, including a capacitive transducer and low - noise SQUID amplifier, converted mechanical vibrations into detectable electrical signals.The experiment has completed its activities.',
    link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.118.021302',
    position: [21, -114],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'PVLAS',
    description: 'PVLAS (Polarizzazione del Vuoto con Laser, "polarization of the vacuum with laser") investigates the properties of the quantum vacuum, specifically looking for nonlinear optical behavior in magnetic fields. The experiment uses a high-sensitivity polarimeter and a magnetic field to measure changes in light polarization as it passes through the vacuum, seeking evidence of hypothetical particles such as Dark Matter or axion-like particles.',
    link: 'https://web.archive.org/web/20131213220905/http://pvlas.ts.infn.it/',
    position: [-13, -85],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'MAGIC',
    description: 'MAGIC (Major Atmospheric Gamma-ray Imaging Cherenkov) telescope is a ground-based system of two telescopes of 17 m diameter of the Imaging Atmospheric Cherenkov Telescope (IACT) class. They are located in the Observatorio Roque de Los Muchachos (ORM), La Palma, Spain. They detect cosmic gamma rays from 30 GeV to 50 TeV via the Cherenkov light emitted in the atmosphere during the development of Extended Atmospheric Showers (EAS) of particles after the primary gamma ray interaction. ALPs signatures are found in gamma-ray spectra as ‘wiggles’ or ‘spectral hardening’ when TeV photons emitted from astrophysical sources mix with ALPs in external magnetic fields, as those present around those targets. The critical energy for TeV photons for such mixing is reached for ALP masses around the neV-mueV. Astrophysical target of interests are active galactic nuclei (especially if at the center of galaxy clusters).',
    link: 'https://magic.mpp.mpg.de/',
    position: [-50, -220],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'LST',
    description: 'LST (Large Sized Telescope) is an array of four 23m diameter telescope of the IACT class, sensitive between 10 GeV and few TeV. At the moment one of four telescope is operating, the others are under construction. Similarly to MAGIC, they are located at ORM and they detect ALP imprint on gamma-ray spectra from astrophysical sources. LSTs are part of the future Cherenkov Telescope Array Observatory (<a href="https://www.cta-observatory.org">[CTA-observatory]</a>).',    
    link: 'https://www.lst1.iac.es/site.html',
    position: [-68, -220],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'NASDUCK',
    description: 'The NASDUCK (Noble and Alkali Spin Detectors for Ultralight Coherent Dark Matter) collaboration uses quantum magnetometers to detect ultralight dark matter, particularly axion-like particles (ALPs). ALPs can induce small oscillations in magnetic fields, which NASDUCK measures using a combination of potassium vapor and helium gas in a spin-exchange optical-pumping process. This technique enables some of the most stringent terrestrial constraints on ultralight axions.',
    link: 'https://arxiv.org/pdf/2209.13588',
    position: [20, 212],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'MuDHI',
    description: 'MuDHI (Multilayer Dielectric Haloscope Investigation) is a dielectric haloscope designed to search for axions in the mass range of 40–400 μeV/c² and dark photons in the 0.1–10 eV/c² mass range. The experiment uses a stack of 23 bilayers of SiO₂ and Si₃N₄, coupled with an aspherical lens and a single-photon avalanche diode for detection. Conducted at the New York University Abu Dhabi, it is the first dark matter experiment operated in the Middle East. The study places constraints on the kinetic mixing coupling constant between dark photons and ordinary photons, with no excess observed in the data.',
    link: 'https://journals.aps.org/prd/abstract/10.1103/PhysRevD.105.052010',
    position: [-70, 255],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'ARGO-YBJ',
    description: 'ARGO-YBJ (Astrophysical Radiation with Ground-based Observatory at YangBaJing) studies cosmic rays and gamma-ray astronomy at an energy threshold of ~100 GeV. The methodology involves a large array of resistive plate chambers at high altitude in Tibet, detecting extensive air showers caused by cosmic rays and gamma rays to explore their origins and propagation.',
    link: 'https://argo.na.infn.it',
    position: [60, 325],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'PandaX',
    description: 'PandaX (Particle and Astrophysical Xenon Experiments) is a series of experiments aimed at detecting dark matter and studying neutrinos using liquid xenon detectors. Its dual-phase time projection chamber (TPC) is designed to detect interactions between dark matter particles, particularly WIMPs, and xenon nuclei. PandaX has evolved through multiple stages, culminating in the advanced PandaX-4T experiment, which enhances detection sensitivity and explores other areas of particle physics, such as neutrino research and double beta decay. Plans for larger detectors are underway to further improve sensitivity and precision.',
    link: 'https://pandax.sjtu.edu.cn',
    position: [-15, 390],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'FAST',
    description: 'FAST (Five-hundred-meter Aperture Spherical Telescope) is a radio telescope focused in the frequency ranges from 70 MHz to 3.0 GHz. The methodology includes using a vast, single-dish antenna in a natural karst depression in China, providing unparalleled sensitivity and resolution for deep-space radio observations.',
    link: 'https://fast.bao.ac.cn',
    position: [-38, 490],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'TASEH',
    description: "The TASEH (Taiwan Axion Search Experiment with Haloscope) is an axion dark matter search experiment in Taiwan, targeting the 10–25 μeV mass range, equivalent to the 2.5–6 GHz frequency band. It utilizes a linear amplifier detector, with future plans to incorporate a quantum-limited Josephson parametric amplifier and develop a tunable large-volume cavity detector to enhance sensitivity. In its first detection run, CD102, conducted in October-November 2021, TASEH excluded axion-photon coupling constants down to 8.1 × 10<sup>-14</sup> GeV<sup>-1</sup> in the 19.4687–19.8436 μeV mass range at 95% confidence level, allowing to probe the KSVZ model's predictions.",
    link: 'https://arxiv.org/pdf/2205.01477',
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
    description: 'The ChangE (Coupled Hot Atom eNsembles to search for liGht dark mattEr) experiment uses Coupled Hot Atom Ensembles to search for new physics. It employs a hybrid spin-resonance regime that significantly broadens the bandwidth of the ²¹Ne nuclear spin while retaining high sensitivity, enabling a comprehensive broadband search for axion-like particles across a frequency range of 0.01–1000 Hz. The experiment sets new constraints on axion-neutron and axion-proton couplings, achieving the strongest laboratory constraints in certain frequency ranges and surpassing astrophysical limits <a href="https://arxiv.org/pdf/2306.08039">[2306.08039]</a>. The ChangE-NMR setup incorporates an ultrasensitive atomic magnetometer based on hybrid alkali-noble-gas spin ensembles operating near the Spin-Exchange Relaxation-Free regime. This approach leverages the low gyromagnetic ratio of ²¹Ne spins, offering superior noise suppression compared to conventional magnetometers. Unlike standard comagnetometers, which are limited in sensitivity or frequency range, ChangE uses a ferrite magnetic shield to achieve sub-fT magnetic noise, enhancing its ability to explore physics beyond the Standard Model <a href="https://www.nature.com/articles/s42005-024-01713-7">[Nature]</a>).',
    link: 'https://www.nature.com/articles/s42005-024-01713-7',
    position: [75, 462],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'AMAILS',
    description: 'The AMAILS (Atomic Magnetometer Arrays in Large Shields) experiment demonstrates the first search for dark photons using 15 atomic magnetometers. Located in shielded rooms in Harbin and Suzhou, China, 1700 km apart, these magnetometers are synchronized via GPS and have femtotesla-level sensitivity. By correlating readouts from the network, AMAILS forms the first long-baseline network of quantum sensors to search for dark photon dark matter signals over distances exceeding 1000 km. The experiment constrains the kinetic mixing of dark photons in the mass range of 4.1 feV to 2.1 peV, surpassing current terrestrial searches.',
    link: 'https://www.nature.com/articles/s41467-024-47566-0',
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
    description: 'The SAPPHIRES collaboration investigates sub-eV axion-like particles (ALPs) using stimulated resonant photon-photon collisions, where two laser beams interact to create and decay ALP states in a vacuum. This process, involving energy-momentum conservation, generates a distinct signal photon and is described as vacuum four-wave mixing. The Collaboration has refined techniques to suppress background noise from residual gas and optical elements, crucial for isolating ALP signals. In the SAPPHIRES00 search, sub-mJ-level pulse lasers were used, while SAPPHIRES01 increased laser energies by an order of magnitude, revealing new background sources from optical elements.',
    link: 'https://spphrs.hiroshima-u.ac.jp/',
    position: [-15, 630],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'DOSUE-RR',
    description: 'The DOSUE-RR (Dark-matter Observing System for Un-Explored Radio-Range) experiment aims to detect conversion photons from dark-photon cold dark matter in the radio-wave range. Targeting a mass range of 10 μeV/c² to meV/c², the first experiment utilized a cryogenic millimeter-wave receiver operating between 18.0―26.5 GHz, corresponding to a dark photon mass range of 74―110 μeV/c². Conducted over two weeks in 2021, the experiment improved sensitivity but did not detect significant dark-photon signals, setting the most stringent constraints to date on the coupling constant between dark photons and ordinary photons. Future plans include expanding the frequency range up to a few 100 GHz.',
    link: 'https://arxiv.org/pdf/2205.03679',
    position: [15, 720],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'DANCE',
    description: 'The DANCE (Dark matter Axion search with riNg Cavity Experiment) proposal aims to detect axion dark matter using a double-pass bow-tie cavity without requiring a strong magnetic field. This setup minimizes sensitivity to cavity length fluctuations and targets the axion mass range m < 10⁻¹⁰ eV. The prototype experiment, DANCE Act-1, features a cavity with a 1-meter round-trip length and is designed to achieve sensitivity to the axion-photon coupling constant beyond current bounds by several orders of magnitude. ',
    link: 'https://arxiv.org/pdf/1911.05196',
    position: [45, 760],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SUMICO',
    description: 'The Tokyo Axion Helioscope experiment, also known as Sumico, aims to detect axions produced in the solar core. It employs a strong magnetic field to convert axions into X-ray photons and uses a precise solar-tracking mount. The photons are detected by an X-ray detector composed of 16 PIN-photodiodes. Additionally, a gas container and regulation system enhance the coherence between axions and photons in the conversion region, enabling sensitivity to axions with masses up to 2 eV.',
    link: 'https://arxiv.org/pdf/1201.4622',
    position: [75, 760],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SKA',
    description: 'The SKA-survey array is a compact array of 12–15 meter diameter parabolic dishes designed for the medium-frequency range. Each dish is equipped with a multi-beam, phased array feed providing a large field of view and multiple receiving systems that cover frequencies from 350 MHz to 4 GHz. This array is part of the broader SKA (Square Kilometre Array) project, an international effort to build the world`s largest and most sensitive radio observatory, spanning several continents to enable high- resolution imaging and deep - space exploration.',
    link: 'https://www.skao.int/en',
    position: [-225, 490],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'UPLOAD/DOWNLOAD',
    description: 'The UPLOAD (UPconversion Loop Oscillator Axion Detection) experiment utilizes a resonant cavity with two spatially overlapping microwave modes driven by free-running loop oscillators. The chosen geometry enhances sensitivity to upconversion (photon difference) while reducing sensitivity to downconversion (photon sum). The experiment, UPLOAD-CMC, uses a cylindrical microwave cavity and searches for frequency deviations in the oscillators` carrier frequencies. This setup allows the experiment to explore a large portion of the unexplored low-mass axion space covering frequencies from DC to 240 MHz (<1 μeV).',
    link: 'https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.126.081803',
    position: [-275, 300],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'ORGAN',
    description: 'The ORGAN (Oscillating Resonant Group AxioN) experiment, located in Perth, Western Australia, is a microwave cavity axion haloscope designed to probe high-mass axions, motivated by various theoretical models. The first stage of the experiment focuses on 26.6 GHz to directly test a hypothesis suggesting axions at a mass of 110 μeV, while later stages will scan a broader range of 15-50 GHz (60–210 μeV). The initial pathfinding run sets a limit on the axion-photon coupling constant 2.02×10<sup>-12</sup> eV<sup>-1</sup> at 26.531 GHz (110 μeV) with 90% confidence. Future plans involve expanding the scan range to improve sensitivity to well-known axion models.',
    link: 'https://arxiv.org/pdf/1706.00209',
    position: [-300, 435],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'PPTA',
    description: 'PPTA (Parkes Pulsar Timing Array) aims to detect gravitational waves through pulsar timing. The methodology includes using the Parkes radio telescope to observe millisecond pulsars, measuring their timing variations with high precision to identify gravitational wave signatures from supermassive black hole mergers.',
    link: 'https://www.atnf.csiro.au/research/pulsar/ppta/',
    position: [-295, 785],
    color: 'rgba(0, 118, 186, 0.54)'
  },
  {
    name: 'SKA',
    description: 'The SKA-survey array is a compact array of 12–15 meter diameter parabolic dishes designed for the medium-frequency range. Each dish is equipped with a multi-beam, phased array feed providing a large field of view and multiple receiving systems that cover frequencies from 350 MHz to 4 GHz. This array is part of the broader SKA (Square Kilometre Array) project, an international effort to build the world`s largest and most sensitive radio observatory, spanning several continents to enable high- resolution imaging and deep - space exploration.',
    link: 'https://www.skao.int/en',
    position: [-340, 155],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'H.E.S.S.',
    description: 'H.E.S.S. (High Energy Stereoscopic System) is a system of imaging atmospheric Cherenkov telescopes for gamma-ray astronomy in Namibia. The methodology involves detecting Cherenkov radiation produced by gamma rays interacting with the Earth`s atmosphere in the energy range of 0.03 to 100 TeV, allowing the study of high-energy astrophysical sources.',
    link: 'https://www.mpi-hd.mpg.de/HESS/',
    position: [-260, -60],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'SPT',
    description: 'The South Pole Telescope (SPT) is a 10-meter diameter microwave, millimeter, and sub-millimeter wavelength telescope located at the NSF Amundsen-Scott South Pole Station, offering the ideal conditions for mm-wave survey observations due to its stable, dry atmosphere. It is equipped with the advanced SPT-3G camera, a 16,000-detector, three-band (90, 150, 220 GHz), polarization-sensitive instrument. SPT aims to address fundamental scientific questions, including the origin, composition, and fate of the Universe, dark energy, neutrino masses, and the validity of General Relativity.',
    link: 'https://pole.uchicago.edu',
    position: [-370, -20],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'BICEP',
    description: 'BICEP (Background Imaging of Cosmic Extragalactic Polarization) is an experiment designed to measure the polarization of the cosmic microwave background (CMB) with unprecedented precision, aiming to answer key questions about the early Universe. It operates at frequencies of 100 GHz and 150 GHz, with angular resolutions of 1.0 and 0.7 degrees, respectively. The experiment uses an array of 98 JPL polarization-sensitive detectors to map a large region of the sky around the South Celestial Pole. BICEP conducted observations from 2006 to 2008, significantly contributing to our understanding of the CMB`s polarization patterns.',
    link: 'http://bicepkeck.org',
    position: [-390, -30],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'VLT',
    description: 'The European Space Observatory (ESO)`s Very Large Telescope (VLT) is a flagship facility for European ground-based astronomy and one of the world`s most advanced optical telescopes. It consists of four 8.2-meter diameter Unit Telescopes and four 1.8-meter diameter Auxiliary Telescopes, which can work together as an interferometer (the ESO Very Large Telescope Interferometer) to achieve higher resolution and finer details than either the Unit or Auxiliary Telescopes alone. The VLT covers a frequency range of 300 nm to 20 μm. Each 8.2-meter Unit Telescope can also operate individually, capturing images of celestial objects as faint as magnitude 30 in a one-hour exposure, revealing objects four billion times fainter than those visible to the naked eye.',
    link: 'https://www.eso.org/public/teles-instr/paranal-observatory/vlt/',
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
    description: 'The ABRACADABRA experiment (A Broadband/Resonant Approach to Cosmic Axion Detection with an Amplifying B-field Ring Apparatus) searches for axion dark matter by measuring the tiny magnetic fields axions induce in a superconducting toroidal magnet. The experiment uses a superconducting pickup loop housed in a cryogenic environment to minimize noise and enhance sensitivity. The latest iteration, ABRACADABRA-10 cm, operates at ultra-low temperatures, employing advanced readout techniques such as a superconducting quantum interference device (SQUID).',
    link: 'https://abracadabra.mit.edu',
    position: [55, -365],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'CASPEr',
    description: 'The Cosmic Axion Spin Precession Experiment (CASPEr) uses nuclear magnetic resonance techniques to search for ultralight dark matter. CASPEr is divided into two main research directions. CASPEr-Gradient, located at Helmholtz Institute Mainz (Mainz, Germany), searches for spin precession induced by the coupling between axionlike particles and the nuclear spins. The coupling of axions to the gluon field is explored by CASPEr-Electric located at Boston University (Boston, USA), soon to be relocated to Johns Hopkins University (Baltimore, USA). ',
    link: 'https://www.sushkov.com/',
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
    description: 'The SENSEI (Sub-Electron-Noise Skipper-CCD Experimental Instrument) experiment is a cutting-edge dark matter detection project focused on searching for ultralight dark matter particles interacting with electrons. It utilizes advanced skipper CCD (Charge-Coupled Device) technology capable of detecting single electron events with unparalleled precision. By leveraging these low-threshold detectors, SENSEI aims to explore previously inaccessible regions of parameter space for dark matter-electron interactions.',
    link: 'https://sensei-skipper.github.io/#',
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
    description: `
      Global network of optical magnetometers for exotic physics searches (GNOME) investigates transient signals from axion-like particles' domain walls, dark matter, and exotic particles generated by cosmic events. 

      <b>Active stations (from last Science Run):</b>
      <ul>
        <li><b>Berkeley (USA):</b> Dmitry Budker, Johannes Gutenberg University and Helmholtz Institute of Mainz, and University of California at Berkeley.</li>
        <li><b>Krakow (Poland):</b> Szymon Pustelny, Jagiellonian University.</li>
        <li><b>Hayward (USA):</b> Derek Jackson Kimball, California State University – East Bay.</li>
        <li><b>Mainz (Germany):</b> Arne Wickenbrock, Johannes Gutenberg University and Helmholtz Institute of Mainz.</li>
        <li><b>Daejeon (Korea):</b> YunJung Shin, KAIST.</li>
        <li><b>Hefei (China):</b> Dong Sheng, University of Science and Technology of China.</li>
        <li><b>Beijing (China):</b> Hong Guo, Peking University.</li>
        <li><b>Garching (Germany):</b> Peter Fierlinger, Technische Universität München.</li>
        <li><b>Be'er Sheva (Israel):</b> Ron Folman, Ben-Gurion University.</li>
        <li><b>Los Angeles (USA):</b> Paul Hamilton, University of California at Los Angeles.</li>
        <li><b>Oberlin (USA):</b> Jason Stalnaker, Oberlin College.</li>
        <li><b>Bucknell (USA):</b> Ibrahim Sulai, Bucknell University.</li>
        <li><b>Canberra (Australia):</b> Ben Buchler, Australian National University.</li>
        <li><b>Moxa - Jena (Germany):</b> Theo Scholtes, Leibniz Institute of Photonic Technology.</li>
        <li><b>Belgrade (Serbia):</b> Zoran Grujic, Institute of Physics Belgrade.</li>
      </ul>

      <b>Future stations (planned):</b>
      <ul>
        <li><b>Stuttgart (Germany):</b> Ilja Gerhardt, Max Planck Institute in Stuttgart.</li>
        <li><b>Berlin (Germany):</b> Tilmann Sander-Thömes, Physikalisch-Technische Bundesanstalt (PTB).</li>
        <li><b>IIT Tirupati (India):</b> Arijit Sharma.</li>
        <li><b>Hefei 2 (China):</b> Xinhua Peng, University of Science and Technology of China.</li>
        <li><b>Glasgow (Scotland, UK):</b> Stuart Ingleby, University of Strathclyde.</li>
        <li><b>Singapore:</b> Tao Wang, A*STAR.</li>
      </ul>
    `,
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
    description: 'The PADME experiment (Positron Annihilation into Dark Matter Experiment) at INFN`s Frascati National Laboratory aims to search for a Dark Photon through positron-on-target collisions at the DAΦNE Beam Test Facility. PADME investigates new physics with minimal model dependence by studying electron-positron interactions in a fixed-target setup, probing the invariant mass range from a few MeV up to about 24 MeV. The experiment conducted two data acquisition campaigns between 2018 and 2020, focusing on the search for an A` (Dark Photon) with a mass near 20 MeV and studying Standard Model processes, such as electron-positron annihilation into γγ pairs <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.107.012008">[Phys. Rev. D 107 012008]</a>. Recently, the collaboration has concentrated on examining the Bhabha scattering process to explore the potential existence of the X17 boson, a candidate for explaining the anomaly observed in the nuclear transition of <sup>8</sup>Be.',
    link: 'https://padme.lnf.infn.it/',
    position: [-87, -15],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'NA62',
    description: 'The  experiment was built to measure precisely the branching ratio B(K<sup>+</sup> → &pi<sup>+</sup> &nu;&nu;&#x0304), and has recently measured this decay with a 5 sigma significance (<a href="https://home.cern/news/press-release/physics/na62-experiment-cern-observes-ultra-rare-particle-decay">[NA62]</a>). Thanks to its high intensity beam and detector performance(redundant particle- identification capability, extremely  efficient  veto  system  and  high  resolution  measurements  of  momentum, time, and energy), NA62 has also achieved sensitivities to long-lived light mediators in a variety of new-physics scenarios.',
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

  // Add MathJax LaTeX formula to the popup description
  // const popupContent = `
  //   <b>${experiment.name}</b><br>
  //   ${experiment.description}<br>
  //   <a href="${experiment.link}" target="_blank">Experiment Page</a>
  // `;

  // // Bind the popup and trigger MathJax rendering
  // marker.bindPopup(popupContent).on('popupopen', () => {
  //   MathJax.typeset(); // Render LaTeX when the popup opens
  // });
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
