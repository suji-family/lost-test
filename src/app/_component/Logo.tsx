import Image from 'next/image'
import logo from './logo.png'

export default function Logo() {
  return <Image src={logo} alt="logo" height={80} />
}
