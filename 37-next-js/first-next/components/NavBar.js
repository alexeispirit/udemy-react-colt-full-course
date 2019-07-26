import Link from "next/link";

const NavBar = () => {
  const styles = {
    display: "flex",
    backgroundColor: "grey",
    justifyContent: "space-between",
    padding: "1rem"
  };

  return (
    <div style={styles}>
      <Link href="/">
        <a>HomePage</a>
      </Link>
      <Link href="/about">
        <a>AboutPage</a>
      </Link>
      <Link href="/contact">
        <a>ContactPage</a>
      </Link>
    </div>
  );
};

export default NavBar;
