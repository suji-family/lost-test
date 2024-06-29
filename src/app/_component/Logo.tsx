import Image from 'next/image'
import Link from 'next/link'
import logo from './logo.png'

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image src={logo} alt="logo" height={80} />
    </Link>
  )
}
