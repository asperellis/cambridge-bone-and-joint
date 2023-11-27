import * as React from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'link'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

const getButtonVariantClasses = (variant: Variant) => {
  const baseClassNames =
    'rounded-full text-center py-4 px-8 font-bold uppercase text-sm'

  switch (variant) {
    case 'secondary':
      return `${baseClassNames} bg-white text-brand-dark-blue`
    case 'outline':
      return `${baseClassNames} bg-transparent text-brand-dark-blue border-2 border-brand-dark-blue`
    case 'link':
      return `${baseClassNames}`
    case 'primary':
    default:
      return `${baseClassNames} bg-brand-dark-blue text-white`
  }
}
export const Button = ({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${getButtonVariantClasses(variant)} ${className}`}
      {...props}
    />
  )
}
