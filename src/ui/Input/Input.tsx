'use client'

interface Props {
  type: string
  placeholder?: string
  value?: string
  onChange?: (e: any) => void
  maxLength?: number
}

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  maxLength,
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
    />
  )
}
