export default function Banner() {
  return (
    <div style={styles.banner}>
      <h1>Discover Luxury Fragrances</h1>
      <button style={styles.btn}>Explore Collection</button>
    </div>
  );
}

const styles = {
  banner: {
    height: "300px",
    background: "url(https://i.imgur.com/s6yE6Kt.jpeg) center/cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "40px",
    color: "white"
  },
  btn: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    background: "#fff",
    cursor: "pointer",
  }
};
