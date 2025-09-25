import Link from 'next/link';

export default function Checkout() {
  return (
    <main>
      <header>
        <h1>Checkout</h1>
        <nav>
          <Link href="/cart">Cart</Link>
        </nav>
      </header>
      <section>
        <h2>Choose Payment Method:</h2>
        <ul>
          <li>
            <button>Pay with BTC/ETH (Coinbase Commerce)</button>
          </li>
          <li>
            <button>Pay with PayPal</button>
          </li>
          <li>
            <button>Guest Checkout</button>
          </li>
        </ul>
        <p>(Payment integration stubs provided. Add your API keys in production.)</p>
      </section>
    </main>
  );
}