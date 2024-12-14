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
    description: 'GEO600 is a ground-based interferometric gravitational wave detector located near Hannover, Germany.  Together with LIGO (USA), VIRGO (Italy) and KAGRA (Japan), GEO600 is part of an international network of gravitational waves observatories. GEO600 features a dual-recycled Michelson interferometer with mirrors suspended as triple pendula; the arms of the Michelson are folded once in the vertical plane, to yield an effective arm length of 1200 m.  The experiment, operating since 2001, stood apart from its contemporary first-generation gravitational-waves detector counterparts, given the incorporation of more innovative but also riskier technologies. After 2009 the GEO600 group initiated a comprehensive upgrade program, under the label GEO-HF. This  program, currently ongoing, targets mainly a sensitivity improvement at high frequencies.',
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
    description: 'AION (Atom Interferometer Observatory and Network) is a proposed experimental program using cold strontium atoms to search for ultra-light dark matter, to explore gravitational waves in the mid-frequency range and to probe other frontiers in fundamental physics. The concept of the experiment is based on two atom interferometers, placed one above the other, in a vacuum system over 10 m tall, with a laser beam running vertically through both.  The laser pulses forces transitions between the ground and excited states of the atoms of clouds prepared at different heights along the vacuum system. The laser pulses act as beam splitters and mirrors for the atomic de Broglie waves, generating a quantum superposition of two paths and then recombining them. In this picture, perturbations induced by gravitational waves and  ultra-light dark matter would appear as slight modifications of the differential phase between two atom interferometers. A first prototype detector, using a 10-meter vertical vacuum tube, is currently under construction at the University of Oxford. Full scale detectors, spanning first 100 m and ultimately 1 km underground, are part of the planned program. ',
    link: 'https://www.imperial.ac.uk/high-energy-physics/research/experiments/aion/',
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
    description: 'POLARBEAR is a cosmic microwave background (CMB) experiment situated on the 3.5-meter diameter Huan Tran Telescope at the James Ax Observatory located at Cerro Toco in the Atacama Desert in Northern Chile. It is designed to make measurements of the CMB polarization on small angular scales in order to detect the B-mode polarization and put limits on inflation. Additionally, a second objective is to reconstruct the lensing potential of the CMB with hopes of providing limits on the neutrino mass. The first POLARBEAR receiver was deployed to the Huan Tran Telescope in 2012.',
    link: 'https://lambda.gsfc.nasa.gov/product/polarbear/index.html',
    position: [-240, -320],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'HAWC',
    description: 'The High Altitude Water Cherenkov Experiment (HAWC) is a gamma-ray and cosmic ray observatory located on the flanks of the Sierra Negra volcano in the Mexican state of Puebla at an altitude of 4100 meters. The experiment exploits Cherenkov radiation to detect showers induced by primary cosmic rays with energies between 100 GeV and 100 TeV. The observatory is a second-generation facility, based on the experience collected by the  Milagro gamma-ray observatory in New Mexico, its predecessor. HAWC consists of large metal tanks, 7.3 m wide by 5 m high, containing a light-tight bladder holding 188,000 liters of water. The Cherenkov light readout is performed via 3-8" and 1-10" high QE photomultiplier tubes. ',
    link: 'https://www.hawc-observatory.org/',
    position: [-75, -610],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'LIGO',
    description: 'The Laser Interferometer Gravitational-Wave Observatory (LIGO) is a large-scale physics experiment and observatory designed to detect cosmic gravitational waves and to develop gravitational-wave observations as an astronomical tool. The LIGO collaboration operates two laboratories in the United States, separated by  3002 kilometers: the LIGO Livingston Observatory, in Livingston, Louisiana, and the LIGO Hanford Observatory, on the DOE Hanford Site, located near Richland, Washington. Both observatories exploit laser interferometers housed in an L-shaped, ultra high-vacuum system, measuring 4 kilometers on each side. LIGO operations began in 2002; on 11 February 2016 the LIGO collaboration announced - together with the VIRGO collaboration - the first observation of gravitational waves, matching the predictions of general relativity. The observations demonstrated the existence of binary stellar-mass black hole systems and the first observation of a binary black hole merger. ',
    link: 'https://www.ligo.caltech.edu/',
    position: [-20, -490],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'ALPHA',
    description: 'The Axion Longitudinal Plasma HAloscope (ALPHA) Consortium is a new experimental collaboration aimed at building a plasma haloscope to search for axions and dark photons. In a plasma halosocope a tuneable wire metamaterial is placed inside a strong solenoidal magnet, tuning into different potential axion frequencies and using ultra-low noise electronics to read out any resulting signals. Such technology would allow one to push the limits of traditional cavity haloscopes, generally limited in volume by the Compton wavelength of the dark matter. Two data-taking phases are foreseen for ALPHA: a first stage operating with commercially available technology (ALPHA Stage I) and the second using an upgraded detector design (ALPHA Stage II). Such program would probe the QCD axion in the 2x10<sup>-5</sup> - 2x10<sup>-4</sup> eV mass range. ',
    link: 'https://axion-dm.yale.edu/alpha-experiment',
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
    description: 'LAMPOST (Light A′ Multilayer Periodic Optical SNSPD Target), is a proof-of-concept experiment searching for dark photon dark matter in the eV mass range, via coherent absorption in a multi-layer dielectric haloscope. In the LAMPOST concept, the cosmogenic dark photons convert to Standard Model photons in a layered dielectric target. These photons are focused by a lens onto a small, low-noise superconducting nanowire single-photon detector (SNSPD). With this technology an efficient photon detection with a dark count rate as low as ∼6x10<sup>−6</sup> counts/s can be achieved. The LAMPOST collaboration set competitive constraints in the dark photon parameter space, finding no evidence for dark photon dark matter with mass ∼ 0.7-0.8 eV and kinetic mixing greater than 10<sup>−12</sup>. Further improvements are foreseen after the upgrade of the SNSPDs,  allowing one to probe significant new parameter space for dark photon and axion dark matter in the meV to 10 eV mass range.',
    link: 'https://arxiv.org/pdf/2110.01582',
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
    description: 'SHAFT (Search for Halo Axions with Ferromagnetic Toroids) is an experiment searching for the electromagnetic interaction of axion-like dark matter in the three-decades mass range from 12 peV to 12 neV. The detection scheme is based on the modification of Maxwell’s equations in the presence of axion-like dark matter,  which mixes with a strong, static magnetic field, resulting in an oscillation of the latter. The SHAFT detector makes use of a a toroidally-shaped permeable material to enhance the magnitude of the static magnetic field B of a factor ~25, thus improving the sensitivity to axion-like dark matter.  SQUID magnetic flux sensors are used to detect signals, achieving a magnetic sensitivity of 150 aT/sqrt(HZ). With a 41-hours data-taking SHAFT improved the best limits on the magnitude of the axion-like dark matter electromagnetic coupling constant over part of the targeted mass range, reaching 4x10<sup>−11</sup> GeV<sup>−1</sup> at 20 peV.',
    link: 'https://arxiv.org/pdf/2003.03348',
    position: [95, -342],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'HAYSTAC',
    description: 'The Haloscope At Yale Sensitive To Axion CDM (HAYSTAC) Experiment is a tunable microwave cavity search for cold dark matter (CDM) axions, with masses above 20 μeV.  Located at Yale’s Wright Laboratory in New Haven, HAYSTAC explores axion dark matter (ADM) in the galactic halo by searching for a resonant photon signal produced by axion conversion in a magnetic field. It uses dilution refrigeration and cutting-edge parametric amplification techniques to maximize the signal-to-noise ratio and dramatically reduce scan times, advancing the search for ADM to new regions of the parameter space. Conceived as a high-frequency offshoot of the earlier ADMX experiment,  HAYSTAC has been able to probe mass ranges above 23 μeV in the cosmologically sensitive region of the axion parameter space.',
    link: 'https://haystac.yale.edu/',
    position: [118, -357],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SNO',
    description: 'The Sudbury Neutrino Observatory (SNO) was a neutrino observatory located 2100 m underground in Vale`s Creighton Mine in Sudbury, Ontario, Canada.The main target of the experiment was the study of solar neutrino oscillations, whose observation was confirmed by the SNO collaboration in 2001. The SNO detector target consisted of 1,000 tonnes of heavy water contained in a 6-m - radius acrylic vessel; the detection strategy was based on the Cherenkov light emission following the neutrino interaction  with deuterons.The Cherenkov light collection was performed via approximately 9, 600 photomultiplier tubes.Other than the outstanding results in neutrino physics, leading to the  Nobel Prize co- award to the director of the experiment Art McDonald in 2015, the re - analysis of SNO data provided strong constraints on the solar axion - nucleon couplings.The construction of the SNO successor, the SNO+ experiment, has been under development since 2016 <a href="https://snoplus.phy.queensu.ca/">[SNO+]</a>.',
    link: 'https://sno.phy.queensu.ca/',
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
    description: 'SuperCDMS at SNOLAB is the successor of the previous generation of CDMS (Cryogenic Dark Matter Search). These experiments, designed to directly detect particle dark matter, use arrays of semiconductor detectors operated at millikelvin temperatures.  SuperCDMS at SNOLAB, in particular, uses germanium and silicon crystals. Dedicated sensors, aimed at detecting the phonons and the ionization charges generated  by the elastic collisions between the target nuclei and dark matter particles, are deposited on the crystals. The phonon sensors consist of arrays of tiny superconducting transition edge sensors, composed of microscopic strips of tungsten coupled to aluminum "fins", collecting phonon energy from the crystal.  The SuperCDMS detector, currently under commissioning, feature 4 Ge/Si towers, for a total of 30 kg of active material. This results in an unprecedented projected sensitivity for dark matter candidates with masses below 1 GeV.',
    link: 'https://supercdms.slac.stanford.edu/',
    position: [190, -425],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'ARIADNE',
    description: 'ARIADNE (Axion Resonant InterAction DetectioN Experiment) is a table-top experiment searching for QCD axions by using techniques based on nuclear magnetic resonance (NMR).  The experiment aims to detect spin-dependent, axion-mediated interactions between a laser-polarized helium-3 gas and an unpolarized rotating tungsten mass source, resulting in a fictitious `magnetic field`. The signal is sensed with a superconducting quantum interference device (SQUID).  In order to screen the 3He sample from ordinary magnetic noise the experiment relies on a superconducting magnetic shielding. ARIADNE has the potential to probe the theoretically interesting QCD axion mass range of 0.1-10 meV, independently of cosmological assumptions. The detector hardware is currently being developed and tested.',
    link: 'https://npl.illinois.edu/research/ARIADNE',
    position: [210, -500],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SQuAD',
    description: 'Superconducting Qubit Advantage for Dark Matter (SQuAD) is a microwave cavity effort searching for axions and hidden photons, in a frequency region around 6.011 GHz (24.86 μeV).  The search at such high frequency is particularly challenging, requiring a limited cavity volume to maintain the resonance, which results in low signal photon rate. Thus, sub-SQL (standard quantum limited) detection techniques are required for this search. SQuAD exploits a novel microwave photon counting technique: the experiment operates a superconducting qubit to make repeated quantum non-demolition measurements of cavity photons and applies a hidden Markov model analysis to reduce the noise to 15.7 dB below the quantum limit. The overall detector performance is limited by a residual background of real photons.  With such a device, the collaboration performed a hidden photon search constraining the kinetic mixing angle to ϵ ≤ 1.68x10<sup>−15</sup> in the targeted band. This unprecedented sensitivity motivates the realization of  future cavity-based searches for axions and hidden photons in the 3–30 GHz range.',
    link: 'https://arxiv.org/abs/2008.12231',
    position: [187, -523],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'BREAD',
    description: 'The Broadband Reflector Experiment for Axion Detection (BREAD) is a planned haloscope experiment searching for bosonic dark matter across the [10<sup>−3</sup>, 1] eV ([0.24, 240] THz) mass range.  The proposed technique exploits a cylindrical metal barrel immersed in an external magnetic field to convert dark matter into photons. The emitted photons are then focused via a novel-design coaxial parabolic reflector towards a photon sensor. Such layout enhances the signal-to-noise ratio and ensures that the emitting surface and magnetic field are parallel. First results with this technique have been obtained using a room-temperature dish antenna setup called GigaBREAD, with a cylindrical metallic emission surface of 0.5 m<sup>2</sup>. A first 24-days-long data taking did not show evidence for dark photon dark matter in the 44-52 μeV mass range, excluding dark photon mixing parameters χ ≳ 10<sup>−12</sup> at 90% confidence level. This result surpassed existing constraints by a factor of 100 in the mass range below 49 μeV.',
    link: 'https://journals.aps.org/prl/pdf/10.1103/PhysRevLett.132.131004',
    position: [168, -555],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'SQMS',
    description: 'The Superconducting Quantum Materials and Systems (SQMS) Center, led by Fermilab, is a collaborative hub aiming to advance quantum science and technology.  Its core mission spans on quantum information science, material science, applied and theoretical superconductivity, computational science, particle and condensed matter physics, cryogenics, microwave devices, industry applications and more.  Among the other efforts, the SQMS Center is exploring the use of high-quality-factor superconducting radio-frequency (SRF) cavities for the search of dark matter. This includes a family of SRF haloscope experiments known as SERAPH (SupERconducting Axion and Paraphoton Haloscope), whose first phase consists in a proof-of-principle dark photon search using existing accelerator SRF cavities.  A first exploratory measurement was performed with a TESLA-shaped single-cell niobium cavity with resonant frequency f0 ≈ 1.3 GHz (quality factor Q ≈ 4.7e9) and a HEMT (high electron mobility transistor) amplifier. Such a preliminary measurement excluded dark photon dark matter with kinetic mixing strength of χ > 1.5x10<sup>−16</sup> for a dark photon mass of mA′ = 5.35 μeV, achieving the deepest exclusion limit by almost an order of magnitude and proving the outstanding potential of the adopted experimental technique.',
    link: 'https://sqmscenter.fnal.gov/',
    position: [148, -575],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'DarkSRF',
    description: 'DARKSRF is an experiment at Fermilab exploiting superconducting radio-frequency (SRF) cavities to perform a “light-shining-through-wall” (LSW) search with a novel approach. The experimental setup features two 1.3 GHz high-quality factor SRF cavities,  made out of bulk niobium. The cavities, selected to have resonant frequencies of the fundamental TM010 modes as close to each other as possible, are mounted 60 cm apart (center to center), oriented along a common axis, and cooled in a bath of liquid helium to around 2 K . In this setup, one cavity, storing SM photons, is operated as an "emitter", and the other one as a "receiver". The use of SRF cavities to perform the search provides a multiple-orders-of-magnitude enhancement both in the number of stored photons in the emitter and in the detection sensitivity of the receiver, with respect to "traditional" resonant cavities. Thanks to this enhancement DARKSRF established, with a proof-of-principle run, a new exclusion limit for dark photon kinetic mixing as small as ϵ = 1.6x10<sup>−9</sup>, providing the most stringent constraints  in the 2.1x10<sup>−7</sup> – 5.7x10<sup>−6</sup> eV mass range. ',
    link: 'https://journals.aps.org/prl/pdf/10.1103/PhysRevLett.130.261801',
    position: [115, -615],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'LZ',
    description: 'LUX-ZEPLIN is a dark matter experiment operating nearly a mile underground at the Sanford Underground Research Facility in Lead, South Dakota, USA.  Its primary goal is to detect weakly interacting massive particles (WIMPs). The detector consists in a dual-phase time projection chamber (TPC) composed of a 7 tonnes liquid xenon target and a small region of gaseous xenon above. The TPC is enclosed in a cryostat, keeping the xenon temperature at about 178 K, and surrounded by several layers of active and passive shielding to reduce backgrounds. These include a thin region containing about 2 tonnes of liquid xenon, the "skin detector".  A further set of acrylic tanks holding gadolinium-loaded liquid scintillator, for more efficient neutron capture and rejection, surrounds the assembly. Recent results, based on 280 days (4.2 tonne-years) of data with no WIMPs observation, allowed the LUX-ZEPLIN collaboration to set unprecedented constraints on the WIMP parameter space. ',
    link: 'http://lz.ac.uk/',
    position: [85, -590],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'SNIPE-Hunt',
    description: 'The Search for Non-Interacting Particles Experimental Hunt (SNIPE Hunt) is an experimental effort aiming to detect dark-matter-induced magnetic-field patterns by performing correlated measurements with a network of magnetometers, placed in "quiet" magnetic environments. The experiment exploits the whole Earth acting as a transducer to convert ultralight bosonic dark matter into an oscillating magnetic field with a characteristic pattern, resulting in a clear signature for both ultralight hidden photons and axion dark matter particles. The first coordinated SNIPE-Hunt science run was performed in July 2022: the experimental setup consisted in battery-operated Vector Magnetoresistive (VMR) magnetometers located at three sites chosen for the low magnetic interference from anthropic sources. From the analysis of this first science run, consisting in ~48h of detector operation, no signal evidence was observed. The null result constrained the hidden-photon and axion dark matter parameter space for Compton frequencies in the 0.5-5.0 Hz range. ',
    link: ' https://arxiv.org/abs/2306.11575#',
    position: [220, -320],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'SNIPE-Hunt',
    description: 'The Search for Non-Interacting Particles Experimental Hunt (SNIPE Hunt) is an experimental effort aiming to detect dark-matter-induced magnetic-field patterns by performing correlated measurements with a network of magnetometers, placed in "quiet" magnetic environments. The experiment exploits the whole Earth acting as a transducer to convert ultralight bosonic dark matter into an oscillating magnetic field with a characteristic pattern, resulting in a clear signature for both ultralight hidden photons and axion dark matter particles. The first coordinated SNIPE-Hunt science run was performed in July 2022: the experimental setup consisted in battery-operated Vector Magnetoresistive (VMR) magnetometers located at three sites chosen for the low magnetic interference from anthropic sources. From the analysis of this first science run, consisting in ~48h of detector operation, no signal evidence was observed. The null result constrained the hidden-photon and axion dark matter parameter space for Compton frequencies in the 0.5-5.0 Hz range. ',
    link: ' https://arxiv.org/abs/2306.11575#',
    position: [40, -590],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'E&ouml;t-Wash',
    description: 'The Eöt-Wash group at the University of Washington, is a collaboration focusing on laboratory tests of gravitational and sub-gravitational physics. The collaboration is involved in several parallel efforts, from the realization of table-top experiments to test weak-field gravity and search for new interactions weaker than gravity, to the development of precision instrumentation for the LIGO experiment.  The conducted researches include tests of  the Einstein equivalence principle, searching for deviations that could hint at new physics, such as dark matter or additional forces. Recent advancements include precise measurements of the weak equivalence principle (WEP) using torsion balances, with the latest results showing no violations of the WEP at small scales.  Analogous results have been obtained in the search for violations in the Newtonian inverse-square law. In the context of the LIGO experiment, the collaboration focused on the realization on sophisticated beam rotation sensors and seismic tiltmeters. ',
    link: 'https://www.npl.washington.edu/eotwash/node/1',
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
    description: 'Orpheus is a dielectrically loaded Fabry-Perot open cavity, presenting a periodic dielectric structure. It is designed to search for axions and dark photons around 16 GHz with over 1 GHz of tuning range. The cavity tunes by changing its length, and the dielectric plate positions are adjusted appropriately. It has set limits on dark photons with mass between 65.5 µeV and 69.3 µeV. With small changes and several experimental iterations, the same apparatus may be used to probe dark photon masses from 45 µeV to 80 µeV. A 1.5 T magnet is going to be included in the setup in order to allow Orpheus to probe also axions. ',
    link: 'https://arxiv.org/pdf/2204.03818',
    position: [160, -785],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'LIGO',
    description: 'The Laser Interferometer Gravitational-Wave Observatory (LIGO) is a large-scale physics experiment and observatory designed to detect cosmic gravitational waves and to develop gravitational-wave observations as an astronomical tool. The LIGO collaboration operates two laboratories in the United States, separated by  3002 kilometers: the LIGO Livingston Observatory, in Livingston, Louisiana, and the LIGO Hanford Observatory, on the DOE Hanford Site, located near Richland, Washington. Both observatories exploit laser interferometers housed in an L-shaped, ultra high-vacuum system, measuring 4 kilometers on each side. LIGO operations began in 2002; on 11 February 2016 the LIGO collaboration announced - together with the VIRGO collaboration - the first observation of gravitational waves, matching the predictions of general relativity. The observations demonstrated the existence of binary stellar-mass black hole systems and the first observation of a binary black hole merger. ',
    link: 'https://www.ligo.caltech.edu/',
    position: [125, -770],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'MAGIS',
    description: 'The Matter-wave Atomic Gradiometer Interferometric Sensor (MAGIS-100) is a quantum sensor under construction at Fermilab, aiming to explore fundamental physics with a 100-meter-long atom interferometer. It will test quantum mechanics in new regimes and search for ultralight dark matter and gravitational waves. In particular, MAGIS-100 will be sensitive to dark matter in the mass range 10<sup>-22</sup> eV - 10<sup>-15</sup> eV, which may exert accelerations on test masses (e.g., vector bosons coupled to B-L), cause spin precession (e.g., axions) and change the value of fundamental constants (e.g., scalar fields interacting with electrons). The sensitivity of MAGIS-100 can be improved by follow-on experiments, such as MAGIS-km (a km-scale terrestrial detector) and MAGIS-Space (a satellite-based detector).',
    link: 'https://magis.fnal.gov/',
    position: [102, -765],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'DM-Radio',
    description: 'DMRadio utilizes the axion-photon interaction to search for dark matter axions. Using high Q LC resonators, the experiment resonantly enhances the effective axion current which is then picked up with a flux-to-voltage amplifier like a dc SQUID. DMRadio-50L is designed to search for axions in the 5 kHz to 5 MHz (20 peV to 20 neV) regime. DMRadio-m<sup>3</sup> has sensitivity to DFSZ axions in the 30 MHz to 200 MHz (120-820 neV) regime.  Future advancements in quantum devices and magnet technology will allow DMRadio-GUT to search for DFSZ axions in the 100 kHz to 30 MHz (0.4-120 neV) range.',
    link: 'https://www.dmradio.org',
    position: [78, -785],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'QUALIPHIDE',
    description: 'QUALIPHIDE (QUAntum LImited PHotons In the Dark Experiment) is an experiment carried out at the Jet Propulsion Laboratory, California Institute of Technology, constraining hidden photons dark matter, using a cryogenic emitter-receiver-amplifier spectroscopy setup. In particular, a dish haloscope setup is placed into a 20 mK environment and the output is coupled to a quantum-limited travelling-wave kinetic inductance parametric amplifier (TW-KIPA), providing for near quantum-limited noise performance.',
    link: 'https://arxiv.org/pdf/2209.03419',
    position: [45, -815],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'Dark E-field Radio',
    description: 'The Dark E-Field Radio experiment is a Fast-Fourier-Transform-based radio-frequency spectrum analyzer, searching for a small power excess on the wide band thermal noise spectrum received from an antenna in a cavity. The goal of the experiment is to measure weak, coherent, electric fields embedded in a wide-bandwidth background. Searches in the 50-300 MHz range have been performed, setting limits on the dark photon kinetic mixing for masses between 0.2 and 1.2 µeV. Using new antennas and microwave electronics, the same technique can be applied at higher frequencies, up to the sub-THz band.',
    link: 'https://arxiv.org/abs/2101.02805',
    position: [18, -835],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'BACON',
    description: 'BACON (Boulder Atomic Clock Optical Network) is a network of three optical clocks based on optical transitions in 27Al+ , 171Yb and 87Sr. The network is located at the National Institute of Standards and Technology (NIST) and JILA in Boulder, Colorado. The frequency ratios of these three clocks have been measured with fractional uncertainties below 10<sup>-17</sup>. The precision of such a measurement has been used to constrain ultralight bosonic dark matter coupled to standard model fields.',
    link: 'https://www.nature.com/articles/s41586-021-03253-4',
    position: [-20, -675],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'SuperMAG',
    description: 'SuperMAG is a worldwide collaboration of organizations and national agencies that, over the last 6 decades, has operated and maintained nearly 600 ground based magnetometers. It has been measuring the geomagnetic activity since the early 1970s, through 3D vector measurements of the magnetic field obtained from ground based magnetometers. SuperMAG is focused on the variations caused by electric currents flowing in the ionosphere and magnetosphere and hence subtracts the dominant and slowly varying Earth main field. SuperMAG service includes data with two different temporal resolutions, 1-min and 1-sec. The latter is a subset of the former as not all stations provide 1-sec data. SuperMAG data have been used to set constraints on ultralight axion dark matter interacting with photons in <a href="https://journals.aps.org/prd/abstract/10.1103/PhysRevD.105.095007">[Phys.Rev.D 105 (2022) 9, 095007]</a> .',
    link: 'https://supermag.jhuapl.edu/',
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
    position: [230, 485],
    color: 'rgba(29,177,0,1)'
  },
  {
    name: 'Chandra',
    description: 'The Chandra X-ray Observatory is a space telescope launched in 1999 by NASA. It is an Earth satellite in a 64-hour orbit. Due to its high angular resolution of 0.5 arcseconds, it is sensitive to X-ray sources (in the 0.1 - 10 keV range) 100 times fainter than any previous X-ray telescope.',
    link: 'https://chandra.harvard.edu/',
    position: [370, 655],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'NuSTAR',
    description: 'The NuSTAR (Nuclear Spectroscopic Telescope Array) is a high-energy X-ray telescope launched in 2012, with a peak efficiency in the 3 - 79 keV region of the electromagnetic spectrum. The NuSTAR instrument consists of two co-aligned grazing incidence telescopes with specially coated optics and newly developed detectors that extend sensitivity to higher energies as compared to previous missions.  Its temporal resolution (< 0.1ms) allows it to observe very fast transient emissions. Additionally, NuSTAR offers moderate angular resolution (∼ 58′′ half-power diameter) and energy resolution of ∼ 400 eV at 10 keV, making it ideal for studying hard X-ray sources, flaring phenomena, and even diffuse emission in galaxy clusters.',
    link: 'https://www.nustar.caltech.edu/',
    position: [370, 760],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'Fermi',
    description: 'The Fermi Gamma-ray Space Telescope is an international and multi-agency space mission launched in 2008 and used to perform gamma-ray astronomy observations from low Earth orbit. It includes two instruments: the Large Area Telescope (LAT) and the Gamma-ray Burst Monitor (GBM). The LAT is an imaging gamma-ray detector sensitive to photons in the 20 MeV - 300 GeV range, with a field of view of about 20% of the sky, angular resolution of 3.5 degree at 100 MeV and 0.15 degree at 10 GeV, as well as an energy resolution of 10%. The GBM is made of 14 scintillation detectors and can detect gamma ray-bursts in the 8 keV - 30 MeV range across all the sky not occluded by Earth, with an energy resolution better than 10%.',
    link: 'https://fermi.gsfc.nasa.gov/',
    position: [345, 720],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'Planck',
    description: 'Planck was a space observatory operated by the European Space Agency from 2009 to 2013, aiming to map the anisotropies of the CMB at microwave and infrared frequencies, with high sensitivity and angular resolution. In particular, its primary goal was to measure CMB anisotropies at all angular scales larger than 10 arcminutes over the entire sky with a precision of ~2 parts per million. It carried two scientific instruments: the High Frequency Instrument (HFI) and the Low Frequency Instrument (LFI). Both instruments could detect both the total intensity and polarization of photons, and together covered the frequency range from 30 GHz to 857 GHz.',
    link: 'https://www.esa.int/Science_Exploration/Space_Science/Planck',
    position: [345, 790],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'INTEGRAL',
    description: 'The INTErnational Gamma-Ray Astrophysics Laboratory (INTEGRAL) is a space telescope observing gamma rays up to 10 MeV, launched into Earth orbit in 2002 by the European Space Agency, and it is the most sensitive telescope in the MeV range. The spacecraft body is a copy of the XMM-Newton body. INTEGRAL aims to provide imaging and spectroscopy of cosmic sources, through the imager IBIS (Imager on-Board the INTEGRAL Satellite) and the spectrometer SPI (SPectrometer of INTEGRAL). The IBIS is sensitive to photons in the 15 keV - 10 MeV range, with an angular resolution of 12 arcmin. The SPI observes radiation from 20 keV to 8 MeV and the high energy resolution of 2 keV at 1 MeV is able to resolve all candidate gamma-ray lines. These two detectors are supported by two monitor instruments: an X-ray monitor and an optical camera. All the four instruments have large fields-of-view and are co-aligned, which is particularly useful to detect gamma-ray emission from transient sources since they continuously monitor large parts of the sky.',
    link: 'https://sci.esa.int/web/integral/',
    position: [320, 750],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'XMM-Newton',
    description: 'XMM-Newton is an X-ray space observatory launched by the European Space Agency in 1999. It aims to investigate interstellar X-ray sources, performing narrow and broad-range spectroscopy, as well as the first simultaneous imaging of objects in both X-ray and optical wavelengths. The spacecraft can aim at a target with an accuracy of 0.25 to 1 arcseconds. It includes three European Photon Imaging Cameras (EPIC), two Reflection Grating Spectrometers (RGS) and an Optical Monitor (OM). The three EPIC are the primary instruments aboard XMM-Newton, with a total field of view (FOV) of 30 arcminutes and an energy sensitivity between 0.15 keV to 15 keV, and can be used to reconstruct light curves, to develop a visible image of the target and to determine the physical processes occurring at the target. The RGS system, sensitive in the 0.35 keV - 2.5 keV range, is used to build X-ray spectral data and can determine the elements present in the target. The OM is designed to provide simultaneous observations alongside the spacecraft’s X-ray instruments, with an energy sensitivity between 1.9 eV and 7.3 eV and a 17 x 17 arcminute square FOV co-aligned with the center of the X-ray telescope’s FOV.',
    link: 'https://sci.esa.int/web/xmm-newton/',
    position: [295, 730],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'eROSITA',
    description: 'e-ROSITA is the primary instrument on-board the Russian-German ``Spectrum-Roentgen-Gamma’’ (SRG) mission, built by the Max Planck Institute in Germany and launched into Earth orbit in 2019. Originally planned to image the entire sky in the X–ray band for seven years, the instrument stopped collecting data on February 26, 2022, after the Russian invasion of Ukraine. It is sensitive to photons in the energy range 0.3 - 10 keV, with an angular resolution of 15 seconds. It is expected to detect galaxy clusters, active galactic nuclei and stars in the Milky Way and its primary science goal is to measure dark energy through the structure and history of the Universe traced by galaxy clusters.',
    link: 'https://www.mpe.mpg.de/eROSITA',
    position: [270, 670],
    color: 'rgba(29,177,0,0.54)'
  },
  {
    name: 'COBE',
    description: 'The Cosmic Background Explorer (COBE) was a NASA satellite dedicated to cosmology, which operated from 1989 to 1993 in order to investigate the cosmic microwave background (CMB) radiation of the universe and provide measurements to understand the cosmo. It included three instruments: the Diffuse Infrared Background Experiment (DIRBE) to search for the cosmic infrared background (CIB) radiation, the Differential Microwave Radiometer (DMR), to map anisotropies in the CMB radiation, and the Far Infrared Absolute Spectrophotometer (FIRAS), to compare the spectrum of the CMB with a precise blackbody. The DIRBE was a cryogenically cooled multiband radiometer used to map dust emission and investigate diffuse infrared radiation from 1 to 300 micrometers, leading to the detection of the CIB. The DMR investigation used three differential radiometers to map the sky at 31.4, 53 and 90 GHz and found that the CMB has intrinsic anisotropy at a level of a part in 100,000. The FIRAS was a cryogenically cooled polarizing Michelson interferometer used as a Fourier transform spectrometer and it observed that the CMB spectrum is that of a nearly perfect blackbody with a temperature of 2.725 +/- 0.002 K.',
    link: 'https://lambda.gsfc.nasa.gov/product/cobe/',
    position: [270, 780],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'HINODE',
    description: 'Hinode is an international mission exploring the magnetic fields of the Sun in order to improve our understanding of what powers the solar atmosphere and drives solar eruptions. By combining observations through the Hinode’s Solar Optical Telescope, the EUV imaging spectrometer (EIS) and the X-Ray/EUV telescope (XRT), the mission aims to understand the causes of eruptions in the solar atmosphere and relate them to the heating of the corona and the mechanism driving the solar wind. Data from the XRT have been used to constrain dark photons in <a href="https://arxiv.org/pdf/2211.00022">[1]</a>.',
    link: 'https://hinode.msfc.nasa.gov/',
    position: [245, 680],
    color: 'rgba(238,34,13,1)'
  },
  {
    name: 'LISA',
    description: 'The Laser Interferometer Space Antenna (LISA) will be a large-scale space mission aiming to detect gravitational waves from astronomical sources. It will be the first space-based gravitational wave observatory and it will consist of three spacecrafts separated by 2.5 million km in a triangular formation, following Earth about 50 million km in its orbit around the Sun. Its launch is expected in 2035. Data taken by LISA Pathfinder, the technology demonstrator for LISA, have been used to constrain ultralight dark matter in <a href="https://arxiv.org/abs/2301.08736">[1]</a> and <a href="https://arxiv.org/abs/2310.06017">[2]</a>.',
    link: 'https://www.lisamission.org/',
    position: [245, 780],
    color: 'rgba(0, 118, 186, 0.54)'
  },
  {
    name: 'MICROSCOPE',
    description: 'The Microsatellite with Compensated Drag for Observing the Principle of Equivalence (MicroSCOPE) is a 300-kilogram class minisatellite operated by a collaboration between the French institutions CNES (National Centre for Space Studies), ONERA (National Office for Aerospace Studies and Research) and OCA (Côte d`Azur Observatory), as well as the German organisations PTB(Physikalisch - Technische Bundesanstalt) and the ZARM laboratory of the  University of Bremen.It was launched in April 2016 in order to test the Weak Equivalence Principle(WEP) and it was decommissioned in October 2018 after successfully testing the WEP to  an accuracy of the order of 10<sup>-14</sup>. Data from MICROSCOPE has been used to constrain scalar interactions with SM particles as well as the B - L vector coupling.',
    link: 'https://directory.eoportal.org/satellite-missions/microscope#mission-capabilities',
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
  {
    name: 'GRAMS',
    description: 'GRAMS (Gamma-Ray and AntiMatter Surveyor) is a proposed balloon-borne experiment designed to detect gamma rays and cosmic-ray antimatter with high sensitivity. It targets new physics, including dark matter detection, and studies astrophysical phenomena by employing a novel liquid argon time projection chamber. The project is under development in the United States. ',
    link: 'https://arxiv.org/abs/1901.03430',
    position: [320, 645],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'GECCO',
    description: 'The Galactic Explorer with a Coded Aperture Mask Compton Telescope (GECCO) is a next-generation telescope concept designed to explore the poorly studied MeV photon energy range. By combining the precise angular resolution of a coded aperture mask with the sensitivity of a Compton telescope, GECCO aims to resolve discrete sources from diffuse gamma-ray emissions. This enables the study of key phenomena such as the Galactic center excess, Fermi Bubbles, and low-energy cosmic rays, as well as the detection of nuclear and annihilation lines. Additionally, it facilitates multi-messenger astrophysics by observing transient gamma-ray sources linked to gravitational waves and neutrinos, opening new avenues for discoveries in fundamental physics and galaxy evolution. Finally, it could study scalar or vector dark matter signals.',
    link: 'https://iopscience.iop.org/article/10.1088/1475-7516/2022/07/036',
    position: [295, 635],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'COSI',
    description: 'The Compton Spectrometer and Imager (COSI) is a soft gamma-ray survey telescope (0.2–5 MeV) designed to study the origins of Galactic positrons, sites of nucleosynthesis, and gamma-ray polarization while identifying multi-messenger counterparts. COSI’s advanced compact Compton telescope combines improvements in sensitivity, angular and spectral resolution, and sky coverage to enable breakthrough science. The mission has evolved through decades of technology development, including a successful 2016 balloon flight from Wanaka, New Zealand, aboard NASA’s Superpressure Balloon. Currently planned for a 2027 satellite launch, COSI represents a leap forward in gamma-ray astrophysics​',
    link: 'https://cosi.ssl.berkeley.edu',
    position: [315, 485],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'Comptel',
    description: 'Operational on the Compton Gamma Ray Observatory from 1991 to 2000, COMPTEL mapped the gamma-ray sky in the energy range of 0.75–30 MeV. It provided significant insights into gamma-ray bursts, pulsars, and galactic phenomena. ',
    link: 'https://heasarc.gsfc.nasa.gov/docs/cgro/comptel/',
    position: [255, 472],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'AMEGO',
    description: 'AMEGO (All-sky Medium Energy Gamma-ray Observatory) is a proposed mission to study gamma rays in the 0.2 MeV to 10 GeV range. It aims to understand astrophysical phenomena like black hole jets and neutron star mergers, as well as explore dark matter signals.',
    link: 'https://asd.gsfc.nasa.gov/amego/',
    position: [345, 635],
    color: 'rgba(0, 118, 186, 1)'
  },
  {
    name: 'e-ASTROGRAM',
    description: 'The enhanced ASTROGAM (e-ASTROGAM) is a proposed space observatory designed to study the non-thermal universe in the photon energy range of 0.3 MeV to 3 GeV, with extended detection capabilities down to 30 keV. Utilizing advanced detector technology, including a silicon tracker and calorimeter, e-ASTROGAM offers unprecedented sensitivity, angular and energy resolution, and polarimetric capabilities. This mission will provide groundbreaking insights into the origins of relativistic outflows, key isotopes from supernova explosions, and the chemical evolution of the Galaxy, while complementing other observatories like LIGO, JWST, and IceCube in multi-messenger astronomy. Its improved MeV sensitivity surpasses previous instruments by one to two orders of magnitude, making it a vital tool for understanding cosmic phenomena​.',
    link: 'https://www.sciencedirect.com/science/article/pii/S2214404818300168?via%3Dihub',
    position: [400, 675],
    color: 'rgba(0, 118, 186, 1)'
  }
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
