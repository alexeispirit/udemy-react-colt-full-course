import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Link href="/about">
        <button>AboutPage</button>
      </Link>
      <Link href="/contact">
        <a>ContactPage</a>
      </Link>
      <h1>NEXT Index Page!</h1>
    </div>
  );
};

export default Index;
