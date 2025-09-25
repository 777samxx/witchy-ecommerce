import Link from 'next/link';

export default function Cart() {
  // Stub: Fill in cart logic as needed
  return (
    <main>
      <header>
        <h1>Cart</h1>
        <nav>
          <Link href="/shop">Shop</Link> | <Link href="/checkout">Checkout</Link>
        </nav>
      </header>
      <section>
        <p>Your magical items await. (Cart functionality coming soon!)</p>
      </section>
    </main>
  );
}