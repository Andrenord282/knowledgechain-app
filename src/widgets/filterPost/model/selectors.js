export const selectFilters = (state) => state.filterPostList;
export const selectFilterAuthors = (state) => state.filterPostList.author;
export const selectFilterThemes = (state) => state.filterPostList.themesPost;
export const selectFilterRatingCounter = (state) => state.filterPostList.ratingCounter;

export const selectDates = (state) => state.filterPostList.dates;
