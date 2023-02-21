import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/openbox">
        <p className="text-3xl font-bold text-center underline">
          ¡Soy la página Homeeee! y voy pal menú 👈
        </p>
      </Link>
    </div>
  )
}