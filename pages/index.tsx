import FrontLayout from '@/layout/FrontLayout'
import { Josefin_Sans } from 'next/font/google'

const josefin_Sans = Josefin_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <FrontLayout>
        <main>
          hello
        </main>
      </FrontLayout>
    </div>
  )
}
