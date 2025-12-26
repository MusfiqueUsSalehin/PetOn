import logo from './logo.svg';
import husky from './husky-dog.jpg'

import cat from './adorable-cat.jpg'
import rabbit from './rabbit.jpg'
import dog from './dog.png'
import group from './group-cute-animals-isolated-white-background.png'
import search from './search_icon.svg'
import users_icon from './users_icon.svg'
import smile from './smile.svg'
import paw from './paw.svg'
import location_icon from './location_icon.svg'
import arrow_right from './arrow_icon.svg'
import testimonial1 from './testimonial_image_1.png'
import testimonial2 from './testimonial_image_2.png'
import star_icon from './star_icon.svg'
import facebook_logo from './facebook_logo.svg'
import instagram_logo from './instagram_logo.svg'
import twitter_logo from './twitter_logo.svg'
import gmail_logo from './gmail_logo.svg'
import check_icon from './check_icon.svg'
import golden_retriever from './golden.jpg'
import filter from './filter_icon.svg'
import calender_icon_colored from './calendar_icon_colored.svg'
import location_icon_colored from './location_icon_colored.svg'
import edit_icon from './edit_icon.svg'
import dashboardIcon from './dashboardIcon.svg'
import dashboardIconColored from './dashboardIconColored.svg'
import addIcon from './addIcon.svg'
import addIconColored from './addIconColored.svg'
import listIcon from './listIcon.svg'
import listIconColored from './listIconColored.svg'





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
  arrow_right,
  testimonial1,
  testimonial2,
  star_icon,
  facebook_logo,
  instagram_logo,
  twitter_logo,
  gmail_logo,
  check_icon,
  filter,
  calender_icon_colored,
  location_icon_colored,
  edit_icon,
  dashboardIcon,
  dashboardIconColored,
  addIcon,
  addIconColored
  
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
    name: 'My Bookings', path :'/my-bookings'
  }, ];


export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add Car", path: "/owner/add-pet", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Cars", path: "/owner/manage-pets", icon: paw, coloredIcon: paw },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]


export const dummyUserData = {
  "_id": "6847f7cab3d8daecdb517095",
  "name": "Musfique",
  "email": "admin@example.com",
  "role": "owner",
  "image": "",
}


  export const dummyPetData = [
    {
        "_id": "p001",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "name": "Buddy",
        "species": "Dog",
        "breed": "Golden Retriever",
        "image": golden_retriever,
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
        "image": assets.cat,
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
        "image": assets.husky,
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
        "image": assets.rabbit,
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

export const dummyBookingsData = [
  {
    "_id": "bp001",
    "pet": dummyPetData[0], // Buddy
    "user": "6847f7cab3d8daecdb517095",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "pickupDate": "2025-06-13T09:00:00.000Z",
    "returnDate": "2025-06-13T13:00:00.000Z",
    "status": "confirmed",
    "price": 2000,
    "createdAt": "2025-06-10T12:57:48.244Z",
  },
  {
    "_id": "bp002",
    "pet": dummyPetData[1], // Luna
    "user": "6847f7cab3d8daecdb517095",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "pickupDate": "2025-06-12T10:00:00.000Z",
    "returnDate": "2025-06-12T12:00:00.000Z",
    "status": "pending",
    "price": 700,
    "createdAt": "2025-06-10T12:45:25.613Z",
  },
  {
    "_id": "bp003",
    "pet": dummyPetData[2], // Rocky
    "user": "6847f7cab3d8daecdb517095",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "pickupDate": "2025-06-11T08:00:00.000Z",
    "returnDate": "2025-06-11T14:00:00.000Z",
    "status": "cancelled",
    "price": 3600,
    "createdAt": "2025-06-10T09:55:06.379Z",
  },
  {
    "_id": "bp004",
    "pet": dummyPetData[3], // Milo
    "user": "6847f7cab3d8daecdb517095",
    "owner": "67fe3467ed8a8fe17d0ba6e2",
    "pickupDate": "2025-06-14T15:00:00.000Z",
    "returnDate": "2025-06-14T17:00:00.000Z",
    "status": "confirmed",
    "price": 500,
    "createdAt": "2025-06-10T09:44:25.410Z",
  }
];

