import * as React from 'react'

interface DividerProps {
  className?: string
}

export const Divider = ({ className = '' }: DividerProps) => {
  return (
    <div
      className={`w-full py-20 flex flex-row items-center justify-center ${className}`}
    >
      <hr className="border-b-4 border-brand-dark-purple w-40 rounded-lg" />
    </div>
  )
}
