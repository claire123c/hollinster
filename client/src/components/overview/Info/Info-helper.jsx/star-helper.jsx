//FIX STAR Rating Function

const averageRating = (reviewResults, changeState) => {
  let ratings = 0;
  let totalRatings = 0;

  if (reviewResults && reviewResults.length !== 0) {
    for (let i = 1; i < 6; i += 1) {
      totalRatings += parseInt(reviewResults[i] || 0, 10);
      ratings += parseInt(reviewResults[i] || 0, 10) * i;
    }
    changeState(true);
    return Math.round((ratings / totalRatings) * 4) / 4;
  }
  changeState(false);
  return 0;
};

export default averageRating;
