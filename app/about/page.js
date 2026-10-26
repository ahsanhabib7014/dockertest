import Link from 'next/link';

export default function About() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>📄 About পেজ</h1>
      <p>এটি আপনার দ্বিতীয় পেজ। এখান থেকে আপনি হোমে ফিরে যেতে পারেন।</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline', marginTop: '20px', display: 'inline-block' }}>
        ← হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}