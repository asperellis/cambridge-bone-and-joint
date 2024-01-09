import React, { forwardRef, ElementType, ComponentPropsWithRef } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'link' | 'none'

type ButtonProps<T extends ElementType> = {
  as?: T
  variant?: Variant
} & ComponentPropsWithRef<T>

const getButtonVariantClasses = (variant: Variant) => {
  const baseClassNames =
    'rounded-full text-center flex items-center justify-center py-4 px-8 font-semibold font-varela uppercase text-sm tracking-wide whitespace-nowrap'

  switch (variant) {
    case 'none':
      return ''
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

export const Button = forwardRef(
  <T extends ElementType = 'button'>(
    { as: Component = 'button', variant, className, ...props }: ButtonProps<T>,
    ref: React.Ref<
      T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : T
    >
  ) => {
    return (
      <Component
        {...props}
        className={`${getButtonVariantClasses(variant)} ${className}`}
        ref={ref}
      >
        {props.children}
      </Component>
    )
  }
)

Button.displayName = 'Button'
