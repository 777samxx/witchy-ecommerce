import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      <header>
        <h1>Contact</h1>
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>
      <section>
        <p>
          For magical inquiries, contact <a href="mailto:777samxx@example.com">777samxx@example.com</a>
        </p>
      </section>
    </main>
  );
}