import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header>
        <h1>Witchy Ecommerce</h1>
        <nav>
          <Link href="/shop">Shop</Link> | <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <section style={{ textAlign: 'center', margin: '3rem 0' }}>
        <h2>Welcome to the Mystical Shop</h2>
        <p>
          Explore magical goods, gothic accessories, and witchy wonders. Secure payments via BTC, ETH, or PayPal.
        </p>
        <Link href="/shop">
          <button>Shop Now</button>
        </Link>
      </section>
      <footer>
        <small>© 2025 777samxx. All rights reserved.</small>
      </footer>
    </main>
  );
}