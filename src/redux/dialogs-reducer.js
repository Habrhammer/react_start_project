const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
  dialogs: [
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
  messages: [
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
}


export function dialogsReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessageObj = {
        id: Date.now(),
        message: state.newMessageText,
      };
      state.messages.push(newMessageObj);
      state.newMessageText = "";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}


export function sendMessageCreator() {
   return {
     type: SEND_MESSAGE,
   };
 }
 export function updateMessageTextCreator(text) {
   return {
     type: UPDATE_MESSAGE_TEXT,
     newText: text,
   };
 }