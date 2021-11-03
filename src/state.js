let store = {
  state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore animi hic laboriosam earum sunt quibusdam eligendi vel mollitia, officia laudantium sed in maiores esse? Quod, minima reiciendis? Fugiat, voluptatum praesentium.",
          likes: 1,
        },
        {
          id: 2,
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi porro praesentium pariatur illum consequuntur, in molestiae laborum iure atque accusantium debitis amet numquam voluptates ea libero ex vel ratione sed consectetur quod? Culpa soluta aut est ex placeat nisi, reprehenderit sequi quis doloribus asperiores. Ipsam pariatur incidunt ratione repudiandae.",
          likes: 3,
        },
        {
          id: 3,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio sed vitae magni eum molestiae ratione!",
          likes: 5,
        },
      ],
      newPostText: "bla bla bla...",
    },
    dialogsPage: {},
    dialogsData: [
      {
        id: 1,
        name: "John",
        avatar:
          "https://images.generated.photos/REFe5-foHQv2xx1RBHm9JqaoRoNHraztJAQFEuWNCLQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzIwNDc4LmpwZw.jpg",
      },
      {
        id: 2,
        name: "Rick",
        avatar:
          "https://images.generated.photos/zd7m9WH2EtSIRezq1GjqSQbOS4qLIFgDWoRt3kFNWPk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjUwODY2LmpwZw.jpg",
      },
      {
        id: 3,
        name: "Alex",
        avatar:
          "https://images.generated.photos/ATVYKZqT_9-1UJt8bEsqd4_-_pqYsIYqnYRzdUTBqBw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM3MzMyLmpwZw.jpg",
      },
      {
        id: 4,
        name: "Till",
        avatar:
          "https://images.generated.photos/v3jAPcfcFxK9rxxvU15qu7Na7zHwlzIMoBsD_vELoe8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzY1NTE0LmpwZw.jpg",
      },
      {
        id: 5,
        name: "Paul",
        avatar:
          "https://images.generated.photos/jXaLZ4jYdkt9VpRz68QLqZoLJYC-NnabulDXM-YHVlk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAxMjI5LmpwZw.jpg",
      },
      {
        id: 6,
        name: "Bruce",
        avatar:
          "https://images.generated.photos/qOpppFKqnLiZyTC_lAPEv7vxa_vvTfDW6H1K3g2EQDg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ0NDcyLmpwZw.jpg",
      },
      {
        id: 7,
        name: "Matt",
        avatar:
          "https://images.generated.photos/z2t6l8VsJSIlRzD87vao4r_HkxklH5qBcnwTrh00fI8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM1Nzk1LmpwZw.jpg",
      },
    ],
    messageData: [
      {
        id: 1,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, rerum optio! Vel delectus tenetur laboriosam numquam excepturi animi enim rem. Harum totam eos quis id pariatur blanditiis error rerum. Odio!",
      },
      {
        id: 2,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cupiditate.",
      },
      {
        id: 3,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam voluptatibus dolorum unde ex tenetur nobis ducimus commodi nemo amet. Eius velit hic sequi nihil placeat perferendis quasi consectetur et repellendus corporis officia modi ratione, officiis dolorum porro nobis atque quam, ab, ad distinctio saepe tenetur earum quis? Perferendis, odio!",
      },
      {
        id: 4,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam voluptatibus dolorum unde ex tenetur nobis ducimus commodi nemo amet. Eius velit hic sequi nihil placeat perferendis quasi consectetur et repellendus corporis officia modi ratione, officiis dolorum porro nobis atque quam, ab, ad distinctio saepe tenetur earum quis? Perferendis, odio!",
      },
      {
        id: 5,
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam voluptatibus dolorum unde ex tenetur nobis ducimus commodi nemo amet. Eius velit hic sequi nihil placeat perferendis quasi consectetur et repellendus corporis officia modi ratione, officiis dolorum porro nobis atque quam, ab, ad distinctio saepe tenetur earum quis? Perferendis, odio!",
      },
    ],
    newMessageText: "New message...",
    navbarData: {
      friends: [
        {
          id: 1,
          name: "John",
          avatar:
            "https://images.generated.photos/REFe5-foHQv2xx1RBHm9JqaoRoNHraztJAQFEuWNCLQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzIwNDc4LmpwZw.jpg",
        },
        {
          id: 2,
          name: "Rick",
          avatar:
            "https://images.generated.photos/zd7m9WH2EtSIRezq1GjqSQbOS4qLIFgDWoRt3kFNWPk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjUwODY2LmpwZw.jpg",
        },
        {
          id: 3,
          name: "Alex",
          avatar:
            "https://images.generated.photos/ATVYKZqT_9-1UJt8bEsqd4_-_pqYsIYqnYRzdUTBqBw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM3MzMyLmpwZw.jpg",
        },
        {
          id: 4,
          name: "Till",
          avatar:
            "https://images.generated.photos/v3jAPcfcFxK9rxxvU15qu7Na7zHwlzIMoBsD_vELoe8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzY1NTE0LmpwZw.jpg",
        },
        {
          id: 5,
          name: "Paul",
          avatar:
            "https://images.generated.photos/jXaLZ4jYdkt9VpRz68QLqZoLJYC-NnabulDXM-YHVlk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzAxMjI5LmpwZw.jpg",
        },
        {
          id: 6,
          name: "Bruce",
          avatar:
            "https://images.generated.photos/qOpppFKqnLiZyTC_lAPEv7vxa_vvTfDW6H1K3g2EQDg/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTQ0NDcyLmpwZw.jpg",
        },
        {
          id: 7,
          name: "Matt",
          avatar:
            "https://images.generated.photos/z2t6l8VsJSIlRzD87vao4r_HkxklH5qBcnwTrh00fI8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM1Nzk1LmpwZw.jpg",
        },
      ],
    },
  },
  rerenderEntireTree() {},
  addPost() {
    let newPost = {
      id: Date.now(),
      message: this.state.profilePage.newPostText,
      likesCount: 0,
    };
    this.state.profilePage.posts.push(newPost);
    this.state.profilePage.newPostText = "";
    this.rerenderEntireTree(this.state);
  },

  updateNewPostText(newText) {
    this.state.profilePage.newPostText = newText;
    this.rerenderEntireTree(this.state);
  },
  sendMessage() {
    let newMessageObj = {
      id: Date.now(),
      message: this.state.newMessageText,
    };
    this.state.messageData.push(newMessageObj);
    this.state.newMessageText = "";
    this.rerenderEntireTree(this.state);
  },
  updateMessageText(newText) {
    this.state.newMessageText = newText;
    this.rerenderEntireTree(this.state);
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
};


export default store;
