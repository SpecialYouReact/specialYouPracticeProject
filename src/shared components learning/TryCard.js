export const TryCard = ({ text, image, oldRate, discount, rating }) => {
  return (
    <>
      <div>
        <img src={image} style={{ width: "100%", height: "100%" }} />
        <p>{text}</p>
        <div style={{ display: "flex" }}>
          <p>{rating}</p>
          <p>{oldRate}</p>
          <p>{discount}</p>
        </div>
      </div>
    </>
  );
};
