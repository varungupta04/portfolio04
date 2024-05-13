import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Brain Tumour',
    desc: 'Using different metrics for brain tumour detection',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Can Counter',
    desc: 'Utilising this we can keep a track of the inventory using just camera',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Automation using python ',
    desc:
      'Tech should be used for automating things in ones life so automating life with thechnology',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Varun's portfolio",
    desc:
      'A portfolio for myself still making betterments and using new tech for it',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'arcade games',
    desc: 'https://github.com/csivitu/ArcadeGames',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Neurel Networks',
    desc: 'Creating a neural network from scratch',
    img: ProjectImg,
  },
];

export default projects;
