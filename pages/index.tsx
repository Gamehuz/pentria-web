import Image from 'next/image'
import { Josefin_Sans } from 'next/font/google'

const josefin_Sans = Josefin_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
