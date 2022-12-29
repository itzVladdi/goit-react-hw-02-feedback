export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <p>Good</p>
      <span>{good}</span>
      <p>Neutral</p>
      <span>{neutral}</span>
      <p>Bad</p>
      <span>{bad}</span>
      <p>Total</p>
      <span>{total}</span>

      <p>Positive feedback</p>
      <span>{positivePercentage}</span>
    </>
  );
}
