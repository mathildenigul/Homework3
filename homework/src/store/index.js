import { createStore } from 'vuex'

export default createStore({
  state: {
    Posts: [
      {id: 1,
      username: "Mari Mutt",
      profile_pic: "Mari_Mutt",
      date_time: "September 29 2021, 13.20",
      text: "Ütle mulle üks ilus poisslapse nimi. #BrunoBennoBernhard",
      pic: true,
      pic_src: "1",
      likes: 300,
      comments: 201,
      shares: 2,
    },
    {id: 2,
      username: "Saara Sisask",
      profile_pic: "Saara_Sisask",
      date_time: "September 29 2021, 00.40",
      text: "Kaugelt nurga mehed peavadki varem tulema. #Imeliknimi",
      pic: true,
      pic_src: "2",
      likes: 30,
      comments: 3,
      shares: 0,
    },
    {id: 3,
      username: "Siiri Leer",
      profile_pic: "Siiri_Leer",
      date_time: "September 28 2021, 23.08",
      text: "Lilled... Heinamaa... Päikesepaiste... #deep",
      pic: false,
      pic_src: "2",
      likes: 50234,
      comments: 4678,
      shares: 342,
    },
    {id: 4,
      username: "Seedu Pump",
      profile_pic: "Seedu_Pump",
      date_time: "September 28 2021, 21.39",
      text: "Kui valetad, saad kolki! #ParemOleks",
      pic: true,
      pic_src: "4",
      likes: 102,
      comments: 23,
      shares: 9,
    },
    {id: 5,
      username: "Feeliks Kana",
      profile_pic: "Feeliks_Kana",
      date_time: "September 28 2021, 7.02",
      text: "Mis kinni ei jää, saab kinni löödud! #LestaOnOP",
      pic: true,
      pic_src: "5",
      likes: 563,
      comments: 97,
      shares: 47
    },
    {id: 6,
      username: "Juula Kook",
      profile_pic: "Juula_Kook",
      date_time: "September 27 2021, 5.08",
      text: "Aga mis see inimene muud on kui üks masinavärk. Peab määrima, muidu läheb põlema. #MääriAgaMääri",
      pic: true,
      pic_src: "6",
      likes: 98,
      comments: 3,
      shares: 0,
    },
    {id: 7,
      username: "Pilbo Paunaste",
      profile_pic: "Pilbo_Paunaste",
      date_time: "September 26 2021, 13.20",
      text: "I am going on an adventure!!!",
      pic: true,
      pic_src: "7",
      likes: 20001,
      comments: 2001,
      shares: 201,
    },
    {id: 8,
      username: "Marilyn Monroe",
      profile_pic: "Marilyn_Monroe",
      date_time: "September 25 2021, 8.00",
      text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      pic: false,
      likes: 1,
      comments: 0,
      shares: 159201,
    },
    {id: 9,
      username: "Valdur Mikita",
      profile_pic: "Valdur_Mikita",
      date_time: "September 20 2021, 15.45",
      text: "Rahvas, kelle kõige kuulsam kirjandusteos on viieköiteline sookuivendamise käsiraamat, ei saa olla normaalne – ja ei peagi. Võimalik, et meil on ilmaruumis hoopis üks teine asi ajada.",
      pic: false,
      likes: 138,
      comments: 2,
      shares: 3,
    },
    {id: 10,
      username: "KittyCat99",
      profile_pic: "KittyCat99",
      date_time: "September 16 2021, 20.38",
      text: "Ate something funny today #badkitty",
      pic: true,
      pic_src: "10",
      likes: 999,
      comments: 13,
      shares: 207,
    }
    ]
  },
  getters: {
  },
  mutations: {
    IncreaseLikes (state, a_id) {
      for(let i = 0; i < state.Posts.length; i++) {
        if(state.Posts[i].id == a_id) {
          state.Posts[i].likes++;
          break;
        }
      }
    },

    ResetLikes (state) {
      for(let i = 0; i < state.Posts.length; i++) {
        state.Posts[i].likes = 0;
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
