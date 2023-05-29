export const calcAvgRating = (reviews: any) => {
  if (!reviews.length) return 0;
  const total = reviews.reduce((acc: any, curr: { rating: any; }) => acc + curr.rating, 0);
  return total / reviews.length;
};