import Link from 'next/link';

export default function About() {
  return (
    <main>
      <header>
        <h1>About</h1>
        <nav>
          <Link href="/">Home</Link> | <Link href="/shop">Shop</Link>
        </nav>
      </header>
      <section>
        <p>
          Witchy Ecommerce was conjured for mystical souls seeking gothic treasures. Inspired by littleladywitching.co.uk.
        </p>
      </section>
    </main>
  );
}