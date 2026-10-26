import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>🚀 আমার Next.js অ্যাপ</h1>
      <p>এটি ডকার এবং এনজিনেক্স টেস্ট করার জন্য তৈরি।</p>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link href="/about" style={{ color: 'blue', textDecoration: 'underline' }}>
          পেজ ২ (About) এ যান
        </Link>
        <a href="/api/hello" target="_blank" style={{ color: 'green', textDecoration: 'underline' }}>
          API ১ (Hello) টেস্ট করুন
        </a>
        <a href="/api/time" target="_blank" style={{ color: 'red', textDecoration: 'underline' }}>
          API ২ (Time) টেস্ট করুন
        </a>
      </div>
    </div>
  );
}