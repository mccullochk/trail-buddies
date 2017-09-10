const buddies = [
  {
    id: 1,
    name: 'Nick Riopel',
    motto: 'Perilous Pathfinder',
    rating: [1,1,1,1],
    description: "I am a 24 years old students completing my degree in Adventure Tourism here at TRU. I have been guiding as a sea kayak guide over the last 5 summers. Interpretation and good laugh are my specialties. I will show you around the Kamloops area while you keep stress off your mind.",
    img: "https://github.com/mccullochk/trail-buddies/blob/master/src/imgs/Rise-41.jpg?raw=true",
    hikes: [
      {
        id: 1,
        price: 50,
        offer: "This is the best 1h30 hike you can do here in Kamloops. When reaching the top of the hike you will have a breathtaking view of Kamloops! For only $50 I will create an awesome experience for you. Join me!"
      },
      {
        id: 2,
        price: 50,
        offer: "I bring a wealth of knowledge to this hike which you don't want to miss. Lunch will be provided to you on this hike so we can take our time and enjoy the beautiful scenery." 
      },
      {
        id: 3,
        price: 50,
        offer: "This hike is not very well known. So if you want to experience a hidden gem, this is the hike for you!"
      }
    ], 
    reviews: [
      {
        name: "Billy",
        statement: "Really knowledgable guide",
        rating: [1,1,1,1],
        img: "https://www.journeybeyondtravel.com/wp-content/uploads/2017/07/Lucas-Peters-Headshot-Banasa-SMALL-300x288.jpg"
      },
      {
        name: "Jordan",
        statement: "Beautiful hike",
        rating: [1,1,1,1,1],
        img: "https://andrewskurka.korndev-cdn.com/wp-content/uploads/about-skurka-headshot.jpg"
      },
      {
        name: "April",
        statement: "So so..",
        rating: [1,1,1],
        img: "http://wpmedia.theprovince.com/2011/12/davis_headshot1.jpg?quality=60&strip=all"
      }
    ]
  },
  {
    id: 2,
    name: 'Inga Tranvik',
    motto: 'Bushwacker',
    rating: [1,1,1,1],
    description: "I'm a Kamloops local and hiking enthusiast.",
    img: 'http://www.thewanderguide.com/wp-content/uploads/2017/07/headshot.jpg',
    hikes: [
      {
        id: 1,
        price: 60,
        offer: "I've lived in Kamloops my whole life so I know every trail in Kenna Cartwright which means we can find the right combination for you."
      } 
    ], 
    reviews: [
      {
        name: "April",
        statement: "Nice guide",
        rating: [1,1,1,1],
        img: "http://wpmedia.theprovince.com/2011/12/davis_headshot1.jpg?quality=60&strip=all"
      }
    ]
  },
  {
    id: 3,
    name: 'Justin Raker',
    motto: 'Survivalist',
    rating: [1,1,1,1],
    description: "I live off the land in a yurt in the hills of Kamloops.",
    img: 'http://eclipsemagazine.com/wp-content/uploads/2017/04/Ian-Hecox-headshot-photo-credit-Albert-L.-Ortega.jpg',
    hikes: [
      {
        id: 1,
        price: 40,
        offer: "I know the ins and outs of all the Kamloops land. Come learn some of my knowledge!"
      } 
    ], 
    reviews: [
      {
        name: "April",
        statement: "Nice guide",
        rating: [1,1,1,1],
        img: "http://wpmedia.theprovince.com/2011/12/davis_headshot1.jpg?quality=60&strip=all"
      }
    ] 
  },
  {
    id: 4,
    name: 'Jack Savage',
    motto: 'Adventurer Extroardinaire',
    rating: [1,1,1],
    description: "Yo yo yo!",
    img: 'https://i.pinimg.com/736x/68/be/1a/68be1a805e9206e375554f1f01e3b305--mens-headshots-model-headshots.jpg',
    hikes: [
      {
        id: 1,
        price: 70,
        offer: "Come with me I'll show you a good time!"
      } 
    ], 
    reviews: [
      {
        name: "April",
        statement: "Did the job",
        rating: [1,1,1],
        img: "http://wpmedia.theprovince.com/2011/12/davis_headshot1.jpg?quality=60&strip=all"
      }
    ]
  }
]

export default buddies
