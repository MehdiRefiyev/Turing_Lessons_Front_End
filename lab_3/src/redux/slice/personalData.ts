import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // PersonsData: [
    //     { id: '1', image: 'https://www.haconcerts.be/files/images/1600x1000/teo-afis-son-1.JPG', artist: 'Teoman' },
    //     { id: '2', image: 'https://media.pitchfork.com/photos/6349c7e5ef7182cf16ec7f1e/3:2/w_2400,h_1600,c_limit/Arctic-Monkeys-AM.jpg', artist: 'Arctic Monkeys' },
    //     { id: '3', image: 'https://d35fbhjemrkr2a.cloudfront.net/Images/Shop/137/BlogContet/1200/5aae6bf0249249c3acab5e41275303a6.jpg', artist: 'Mehmet Güreli' },
    //     { id: '4', image: 'https://m.media-amazon.com/images/M/MV5BNDU3MzBiYTctMTM3ZC00NTBlLTgyMzMtMDA4ODdjN2MyZmE4XkEyXkFqcGc@._V1_.jpg', artist: 'Smashing Pumpkins' },
    // ]
};

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        // toggleFavorite: (state, action) => {
        //     const musicId = action.payload;
        //     const isFavorite = state.favoriteMusic.some((id) => id === musicId);

        //     if (isFavorite) {
        //         state.favoriteMusic = state.favoriteMusic.filter((id) => id !== musicId);
        //     } else {
        //         state.favoriteMusic.push(musicId);
        //     }
        // },
    },
});

// export const { toggleFavorite } = musicSlice.actions;
export default musicSlice.reducer;