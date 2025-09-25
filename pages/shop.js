import Link from 'next/link';

const products = [
  { id: 1, name: 'Crystal Ball', price: 49.99 },
  { id: 2, name: 'Witch Hat', price: 29.99 },
  { id: 3, name: 'Potion Kit', price: 39.99 },
];

export default function Shop() {
  return (
    <main>
      <header>
        <h1>Shop</h1>
        <nav>
          <Link href="/">Home</Link> | <Link href="/cart">Cart</Link>
        </nav>
      </header>
      <section>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <Link href={`/product/${product.id}`}>{product.name}</Link> - ${product.price}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}