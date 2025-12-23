import logo from './logo.svg';
import husky from './lovely-pet-portrait-isolated.jpg'
import golden_retriever from './mitchell-luo-f0Y_FDt0xJo-unsplash.jpg'
import cat from './adorable-cat-lifestyle.jpg'
import rabbit from './full-shot-kid-playing-with-dog.jpg'
import dog from './38708534_8612017.png'
import group from './group-cute-animals-isolated-white-background.png'
import search from './search_icon.svg'
import users_icon from './users_icon.svg'
import smile from './smile.svg'
import paw from './paw.svg'
import location_icon from './location_icon.svg'
import arrow_right from './arrow_icon.svg'



export const assets = {
  logo,
  husky,  
  golden_retriever, 
  cat,
  rabbit,
  dog,
  group,
  search,
  users_icon,
  smile,
  paw,
  location_icon,
  arrow_right
}


export const cityList = ['Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi']


export const menuLinks = [
  {
    name: 'Home', path:'/'
  },
  {
    name: 'Pets', path :'/pets'
  },
  {
    name: 'My Bookings', path :'/my-boolings'
  }, ];


  export const dummyPetData = [
    {
        "_id": "p001",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "name": "Buddy",
        "species": "Dog",
        "breed": "Golden Retriever",
        "image": "",
        "age": 3,
        "category": "Large",
        "behaviour": "Friendly",
        "diet": "Omnivore",
        "pricePerDay": 500,
        "location": "Dhaka",
        "description": "Buddy is a friendly Golden Retriever who loves playing fetch and enjoys long walks.",
        "isAvailable": true,
        "trained": "trained",
        "active": "Highly active",
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "p002",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "name": "Luna",
        "species": "Cat",
        "breed": "Persian",
        "image": "",
        "age": 2,
        "category": "Small",
        "behaviour": "Calm",
        "diet": "Carnivore",
        "pricePerDay": 350,
        "location": "Chattogram",
        "description": "Luna is a calm Persian cat who enjoys quiet environments and gentle affection.",
        "isAvailable": true,
        "trained": "not trained",
        "active": "Highly active",
        "createdAt": "2025-04-16T08:33:57.993Z",
    },
    {
        "_id": "p003",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "name": "Rocky",
        "species": "Dog",
        "breed": "Husky",
        "image": "",
        "age": 4,
        "category": "Large",
        "behaviour": "Protective",
        "diet": "Omnivore",
        "pricePerDay": 600,
        "location": "Chattogram",
        "description": "Rocky is a loyal German Shepherd trained for obedience and protection.",
        "isAvailable": true,
        "trained": "trained",
        "active": "lazy",
        "createdAt": "2025-04-16T08:34:39.592Z",
    },
    {
        "_id": "p004",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "name": "Milo",
        "species": "Rabbit",
        "breed": "Holland Lop",
        "image": "",
        "age": 1,
        "category": "Small",
        "behaviour": "Gentle",
        "diet": "Herbivore",
        "pricePerDay": 250,
        "location": "Houston",
        "description": "Milo is a gentle rabbit who enjoys being handled carefully and loves fresh veggies.",
        "isAvailable": true,
        "trained": "Khulna",
        "active": "active",
        "createdAt": "2025-04-17T06:15:47.318Z",
    }
];
