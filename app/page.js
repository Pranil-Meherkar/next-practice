import Link from 'next/link'

export default function Home() {
  return (  
    <div>
      <h1>Welcome</h1>
      <ul>
        <li><Link href="/test">Test</Link></li>
        <li><Link href="/example">example</Link></li>
        <li><Link href="/heroes">Heroes</Link></li>
      </ul>
    </div>
  )
}
