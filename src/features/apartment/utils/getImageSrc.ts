import defaultImage from '../../../img/featured.png'

export const getImageSrc = (img_adress: string[]): string => {
  let validImage
  if (!img_adress) validImage = null
  else {
    const validExtensions = ['.png', '.jpg', '.jpeg']
    validImage = img_adress.find((url) =>
      validExtensions.some((ext) => url.toLowerCase().endsWith(ext)))
  }

  return validImage || defaultImage
}
