import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Habit Tracker',
    desc: 'https://github.com/varungupta04/doc-proj',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'edu4u',
    desc: 'https://github.com/varungupta04/backend-edu4u',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'landing page',
    desc:
      'https://github.com/varungupta04/Gifting_solution   https://github.com/varungupta04/3d-wesite',
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
];

export default projects;
