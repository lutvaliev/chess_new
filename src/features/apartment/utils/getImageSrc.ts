interface Layout {
  img_adress: string[]
}

interface Props {
  layout: Layout
}

export const getImageSrc = (layout: Layout): string => {
  const validExtensions = ['.png', '.jpg', '.jpeg']
  const validImage = layout.img_adress.find((url) =>
    validExtensions.some((ext) => url.toLowerCase().endsWith(ext)))

  return validImage || 'https://via.placeholder.com/150'
}
