import profile from '../assets/profile.png'
const data = [
    
    {
      idUser: 13,
      email: "usertest3@htm.cuak",
      fullName: "Carlos",
      country: "Mexico City",
      experienceYears: 8,
      kmAround: 30,
      profileDescription:
        "Hello, my name is Carlos and I have been a plumber for over 8 years. I am highly skilled in all aspects of plumbing, from installation to repairs and maintenance. I pride myself on providing excellent customer service and high-quality workmanship.",
      score: 4.0,
      categories: [
        {
          id: 3,
          name: "Plumbing",
        },
      ],
      profilePhoto: 'https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_1_nfotfk.png',
      galleryPhotos: ['../assets/profile3.png'],
      reviews: [
        {
          comment:
            "Carlos was very professional and efficient in fixing our plumbing issue. He arrived on time and completed the job quickly. Highly recommend!",
          rating: 4.5,
          nameClient: "Javier",
          creationDate: "2023-04-18",
        },
        {
          comment:
            "Carlos did a great job fixing our leaky faucet. He was very knowledgeable and took the time to explain what he was doing. Would definitely use his services again!",
          rating: 3.5,
          nameClient: "Isabella",
          creationDate: "2023-04-18",
        },
      ],
    },{
      idUser: 10,
      email: "usertest2@htm.cuak",
      fullName: "Laura",
      country: "Santiago de Chile",
      experienceYears: 5,
      kmAround: 15,
      profileDescription:
        "Hi, I'm Laura, a certified electrician with 5 years of experience in residential and commercial electrical systems. I have a strong commitment to safety, quality workmanship, and customer satisfaction.",
      score: 4.75,
      categories: [
        {
          id: 2,
          name: "Electrician",
        },
      ],
      profilePhoto: 'https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_4_lgkw6s.png',
      galleryPhotos: ['../assets/profile2.png'],
      reviews: [
        {
          comment:
            "Laura was great to work with! She was prompt, professional, and did a fantastic job with our electrical installation. We highly recommend her services!",
          rating: 5.0,
          nameClient: "Diego",
          creationDate: "2023-04-18",
        },
        {
          comment:
            "Laura is an excellent electrician. She was very knowledgeable and patient, answering all of our questions and concerns. We will definitely be using her services again in the future!",
          rating: 4.5,
          nameClient: "Maria",
          creationDate: "2023-04-18",
        },
      ],
    },{
        idUser: 10,
        email: "usertest2@htm.cuak",
        fullName: "Silvio",
        country: "Santiago de Chile",
        experienceYears: "5",
        kmAround: "15",
        profileDescription:
          "Hi, I'm Silvio, a certified electrician with 5 years of experience in residential and commercial electrical systems. I have a strong commitment to safety, quality workmanship, and customer satisfaction.",
        score: 4.75,
        categories: [
          {
            id: 2,
            name: "Electrician",
          },
        ],
        profilePhoto: 'https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_2_vfeavv.png',
        galleryPhotos: ['../assets/profile4.png'],
        reviews: [
          {
            comment:
              "Laura was great to work with! She was prompt, professional, and did a fantastic job with our electrical installation. We highly recommend her services!",
            rating: 5.0,
            nameClient: "Diego",
            creationDate: "2023-04-18",
          },
          {
            comment:
              "Laura is an excellent electrician. She was very knowledgeable and patient, answering all of our questions and concerns. We will definitely be using her services again in the future!",
            rating: 4.5,
            nameClient: "Maria",
            creationDate: "2023-04-18",
          },
        ],
      },
      {
        idUser: 15,
        email: "usertest3@htm.cuak",
        fullName: "Ruben",
        country: "Mexico City",
        experienceYears: "8",
        kmAround: "30",
        profileDescription:
          "Hello, my name is Ruben and I have been a plumber for over 8 years. I am highly skilled in all aspects of plumbing, from installation to repairs and maintenance. I pride myself on providing excellent customer service and high-quality workmanship.",
        score: 4.0,
        categories: [
          {
            id: 3,
            name: "Plumbing",
          },
        ],
        profilePhoto: 'https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_5_vmmv2u.png',
        galleryPhotos: ['../assets/profile5.png'],
        reviews: [
          {
            comment:
              "Carlos was very professional and efficient in fixing our plumbing issue. He arrived on time and completed the job quickly. Highly recommend!",
            rating: 4.5,
            nameClient: "Javier",
            creationDate: "2023-04-18",
          },
          {
            comment:
              "Carlos did a great job fixing our leaky faucet. He was very knowledgeable and took the time to explain what he was doing. Would definitely use his services again!",
            rating: 3.5,
            nameClient: "Isabella",
            creationDate: "2023-04-18",
          },
        ],
      },
      {
        idUser: 15,
        email: "usertest3@htm.cuak",
        fullName: "Santiago",
        country: "Moron City",
        experienceYears: "8",
        kmAround: "30",
        profileDescription:
          "Hello, my name is Santiago and I have been a plumber for over 8 years. I am highly skilled in all aspects of plumbing, from installation to repairs and maintenance. I pride myself on providing excellent customer service and high-quality workmanship.",
        score: 4.0,
        categories: [
          {
            id: 3,
            name: "Plumbing",
          },
        ],
        profilePhoto: 'https://res.cloudinary.com/duk7zris0/image/upload/v1681994935/profile_3_o2kew3.png',
        galleryPhotos: ['../assets/profile5.png'],
        reviews: [
          {
            comment:
              "Carlos was very professional and efficient in fixing our plumbing issue. He arrived on time and completed the job quickly. Highly recommend!",
            rating: 4.5,
            nameClient: "Javier",
            creationDate: "2023-04-18",
          },
          {
            comment:
              "Carlos did a great job fixing our leaky faucet. He was very knowledgeable and took the time to explain what he was doing. Would definitely use his services again!",
            rating: 3.5,
            nameClient: "Isabella",
            creationDate: "2023-04-18",
          },
        ],
      },{
        idUser: 10,
        email: "usertest2@htm.cuak",
        fullName: "Silvio",
        country: "Santiago de Chile",
        experienceYears: "5",
        kmAround: "15",
        profileDescription:
          "Hi, I'm Silvio, a certified electrician with 5 years of experience in residential and commercial electrical systems. I have a strong commitment to safety, quality workmanship, and customer satisfaction.",
        score: 4.75,
        categories: [
          {
            id: 2,
            name: "Electrician",
          },
        ],
        profilePhoto: 'https://res.cloudinary.com/duk7zris0/image/upload/v1681923791/profile4_yansq4.png',
        galleryPhotos: ['../assets/profile4.png'],
        reviews: [
          {
            comment:
              "Laura was great to work with! She was prompt, professional, and did a fantastic job with our electrical installation. We highly recommend her services!",
            rating: 5.0,
            nameClient: "Diego",
            creationDate: "2023-04-18",
          },
          {
            comment:
              "Laura is an excellent electrician. She was very knowledgeable and patient, answering all of our questions and concerns. We will definitely be using her services again in the future!",
            rating: 4.5,
            nameClient: "Maria",
            creationDate: "2023-04-18",
          },
        ],
      },
      {
        idUser: 15,
        email: "usertest3@htm.cuak",
        fullName: "Ruben",
        country: "Mexico City",
        experienceYears: "8",
        kmAround: "30",
        profileDescription:
          "Hello, my name is Ruben and I have been a plumber for over 8 years. I am highly skilled in all aspects of plumbing, from installation to repairs and maintenance. I pride myself on providing excellent customer service and high-quality workmanship.",
        score: 4.0,
        categories: [
          {
            id: 3,
            name: "Plumbing",
          },
        ],
        profilePhoto: 'https://res.cloudinary.com/duk7zris0/image/upload/v1681923791/profile2_v3jztx.png',
        galleryPhotos: ['../assets/profile5.png'],
        reviews: [
          {
            comment:
              "Carlos was very professional and efficient in fixing our plumbing issue. He arrived on time and completed the job quickly. Highly recommend!",
            rating: 4.5,
            nameClient: "Javier",
            creationDate: "2023-04-18",
          },
          {
            comment:
              "Carlos did a great job fixing our leaky faucet. He was very knowledgeable and took the time to explain what he was doing. Would definitely use his services again!",
            rating: 3.5,
            nameClient: "Isabella",
            creationDate: "2023-04-18",
          },
        ],
      },
  ];

  export default data;