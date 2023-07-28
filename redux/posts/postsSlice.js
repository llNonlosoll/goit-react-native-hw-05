import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  posts: [
    {
      id: 1,
      imageUrl: "../components/images/forest.jpg",
      name: "Ліс",
      commentsNumber: 8,
      likes: 153,
      location: "Ivano-Frankivs'k Region, Ukraine",
    },
    {
      id: 2,
      imageUrl: "../components/images/sunset.jpg",
      name: "Захід на Чорному морі",
      commentsNumber: 3,
      likes: 200,
      location: "Ukraine",
    },
    {
      id: 3,
      imageUrl: "../components/images/house.jpg",
      name: "Старий будиночок у Венеції",
      commentsNumber: 50,
      likes: 200,
      location: "Ukraine",
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, { payload }) {
        state.posts.push(payload);
      },
      prepare({
        photoName,
        locationName,
        photoUri,
        commentsNumber = 0,
        location,
      }) {
        return {
          payload: {
            id: nanoid(),
            name: photoName,
            imageUrl: photoUri,
            location: locationName,
            commentsNumber,
            coords: location,
          },
        };
      },
    },
  },
});

export const { addPost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
