'use client'

import Image, { StaticImageData } from 'next/image'
import {
  ComponentPropsWithoutRef,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react'

interface Props extends ComponentPropsWithoutRef<typeof Image> {
  fallback: StaticImageData | string
}

export default function Thumbnail({
  fallback,
  src,
  alt,
  className,
  ...props
}: Props) {
  const [error, setError] = useState<SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null)

  useEffect(() => {
    setError(null)
  }, [src])

  return (
    <Image
      alt={alt}
      onError={setError}
      className={className}
      src={error || !src ? fallback : src}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  )
}
