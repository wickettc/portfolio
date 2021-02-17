import westlandBowlImg from '../imgs/westlandBowlImg.JPG';
import membersOnlyImg from '../imgs/membersOnlyImg.JPG';
import weatherAppImg from '../imgs/weatherAppImg.JPG';
import memoryGameImg from '../imgs/memoryGameImg.JPG';
import etchASketchImg from '../imgs/etchASketchImg.JPG';
import calculatorImg from '../imgs/calculatorImg.JPG';
import covidTrackerImg from '../imgs/covidTrackerImg.JPG';
import shoppingCartImg from '../imgs/shoppingCartImg.JPG';

const projs = [
    {
        name: 'Westland Bowl',
        prof: 'Professional Project',
        skills: ['VanillaJS', 'PHP', 'Bootstrap', 'Responsive'],
        img: westlandBowlImg,
        link: 'http://westlandbowl.com/',
    },
    {
        name: 'Members Only',
        skills: ['NodeJS', 'MongoDB', 'Express'],
        img: membersOnlyImg,
        link: 'http://stormy-sands-24197.herokuapp.com/',
        github: 'https://github.com/wickettc/members-only',
    },
    {
        name: 'Weather App',
        skills: ['React', 'CSS', 'Responsive'],
        img: weatherAppImg,
        link: 'https://weather-app.wickettc.vercel.app/',
        github: 'https://github.com/wickettc/Weather-App',
    },
    {
        name: 'E-Commerce',
        skills: ['React', 'CSS'],
        img: shoppingCartImg,
        link: 'https://shopping-cart-git-main.wickettc.vercel.app/',
        github: 'https://github.com/wickettc/E-Commerce',
    },
    {
        name: 'Covid-19 Tracker',
        skills: ['React', 'CSS', 'Chart Visualization'],
        img: covidTrackerImg,
        link: 'https://covid19-tracker-git-main.wickettc.vercel.app/',
        github: 'https://github.com/wickettc/covid19-tracker',
    },
    {
        name: 'Memory Game',
        skills: ['React', 'CSS'],
        img: memoryGameImg,
        link: 'https://memory-game.wickettc.vercel.app/',
        github: 'https://github.com/wickettc/Memory-Game',
    },
    {
        name: 'Etch-A-Sketch',
        skills: ['VanillaJS', 'CSS', 'Responsive'],
        img: etchASketchImg,
        link: 'https://wickettc.github.io/etch-a-sketch/',
        github: 'https://github.com/wickettc/etch-a-sketch',
    },
    {
        name: 'Calculator',
        skills: ['VanillaJS', 'CSS'],
        img: calculatorImg,
        link: 'https://wickettc.github.io/calculator/',
        github: 'https://github.com/wickettc/calculator',
    },
];

export default projs;
