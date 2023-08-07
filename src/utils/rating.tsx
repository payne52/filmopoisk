export const Rating = ({ value }: { value: number }) => {
  const ratingColor = (rating: number) => {
    if (rating > 8) {
      return "gold";
    } else if (rating > 7) {
      return "green";
    } else if (rating >= 5) {
      return "grey";
    } else {
      return "red";
    }
  };

  const color = ratingColor(value);

  return <div className={`rating ${color}`}>{value.toFixed(1)}</div>;
};
