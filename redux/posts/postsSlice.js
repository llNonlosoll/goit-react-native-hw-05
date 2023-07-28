import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  posts: [
    {
      id: 1,
      imageUrl: require("../../components/images/forest.jpg"),
      name: "Ліс",
      commentsNumber: 8,
      likes: 153,
      location: "Ivano-Frankivs'k Region, Ukraine",
      coords: {
        latitude: 48.9422375120834,
        longitude: 24.658751258383163,
      },
    },
    {
      id: 2,
      imageUrl: require("../../components/images/sunset.jpg"),
      name: "Захід на Чорному морі",
      commentsNumber: 3,
      likes: 200,
      location: "Odesa, Ukraine",
      coords: {
        latitude: 46.475176,
        longitude: 30.7662,
      },
    },
    {
      id: 3,
      imageUrl: require("../../components/images/house.jpg"),
      name: "Старий будиночок у Венеції",
      commentsNumber: 50,
      likes: 200,
      location: "Venice, Italy",
      coords: {
        latitude: 45.439489,
        longitude: 12.323061,
      },
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
