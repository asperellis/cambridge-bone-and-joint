import React from 'react'
import { useGetMediaById } from '../../service'

interface ImageProps {
  className?: string
  imageId?: string | number | null
}

export const Image = ({ className, imageId }: ImageProps) => {
  const { data: image } = useGetMediaById(imageId)

  return (
    <img
      src={image?.source_url}
      className={`${className} transition-opacity duration-300 ${!image?.source_url ? 'opacity-0' : className?.includes('opacity') ? '' : 'opacity-100'}`}
    />
  )
}
