import Link from 'next/link';

export default function Home() {
  return (
    <div className="main">
      <h1>Welcome to GovEase</h1>
      <p>
        Designed to simplify and streamline the process of obtaining government
        approvals, licenses, and permits.
      </p>
<Link href="/about" passHref>
  <button className="btn">About Us</button>
</Link>

<Link href="/contact" passHref>
  <button className="btn">Conatct</button>
</Link>

    </div>
  );
}
