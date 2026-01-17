export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>Aroma Luxe</h2>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "15px 25px",
    background: "black",
    color: "white",
    fontSize: "20px",
  },
  title: {
    margin: 0,
  }
};
