import defaultImage from '../../../img/featured.png'

export const getImageSrc = (img_adress: string[]): string => {
  const validExtensions = ['.png', '.jpg', '.jpeg']
  const validImage = img_adress.find((url) =>
    validExtensions.some((ext) => url.toLowerCase().endsWith(ext)))

  return validImage || defaultImage
}
