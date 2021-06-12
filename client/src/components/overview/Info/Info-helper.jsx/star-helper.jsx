const averageRating = (reviewResults, changeState) => {
  let ratings = 0;
  let totalRatings = 0;

  if (reviewResults && reviewResults.length !== 0) {
    for (let i = 0; i < reviewResults.length; i += 1) {
      if (reviewResults[i].rating !== undefined) {
        ratings += reviewResults[i].rating;
        totalRatings += 1;
      }
    }
    changeState(true);
    return Math.round((ratings / totalRatings) * 4) / 4;
  }
  changeState(false);
  return 0;
};

export default averageRating;
