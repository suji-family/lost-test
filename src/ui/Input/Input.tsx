'use client'

interface Props {
  type: string
  placeholder?: string
  value?: string
  onChange?: (e: any) => void
}

export default function Input({ type, placeholder, value, onChange }: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
