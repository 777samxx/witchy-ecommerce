import { useRouter } from 'next/router';
import Link from 'next/link';

const products = {
  1: { name: 'Crystal Ball', desc: 'See beyond the veil.', price: 49.99 },
  2: { name: 'Witch Hat', desc: 'Classic, pointy, enchanted.', price: 29.99 },
  3: { name: 'Potion Kit', desc: 'Everything you need for a brew.', price: 39.99 },
};

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = products[id];

  if (!product) return <div>Product not found.</div>;

  return (
    <main>
      <header>
        <h1>{product.name}</h1>
        <nav>
          <Link href="/shop">Shop</Link> | <Link href="/cart">Cart</Link>
        </nav>
      </header>
      <section>
        <p>{product.desc}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <Link href={`/cart?add=${id}`}> 
          <button>Add to Cart</button>
        </Link>
      </section>
    </main>
  );
}