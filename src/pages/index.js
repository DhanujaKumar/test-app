import Link from 'next/link';

export default function Index() {
  return (
    <div className='page'>

    <div className="main">

      <h1>Welcome to GovEase</h1>
      <p>
        Designed to simplify and streamline the process of obtaining government
        approvals, licenses, and permits.
      </p>

<Link href='/home' passHref>
    <button className="btn">Get Started</button>
</Link>      
<Link href="/about" passHref>
  <button className="btn">About Us</button>
</Link>

<Link href="/contact" passHref>
  <button className="btn">Conatct</button>
</Link>
<Link href="/ai-interface">
  <button className="btn">Ask AI Assistant</button>
</Link>

    </div>


    </div>
  );
}
