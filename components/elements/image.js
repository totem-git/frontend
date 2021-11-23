import { getStrapiMedia } from "utils/media"
import Image from "next/image"
import PropTypes from "prop-types"
import { mediaPropTypes } from "utils/types"

const NextImage = ({ media, ...props }) => {
  const { url, alternativeText } = media

  const imageUrl = getStrapiMedia(url)

  // const loader = ({ src }) => {
  //   return getStrapiMedia(src)
  // }

  // The image has a fixed width and height
  if (props.width && props.height) {
    return (
      <Image src={imageUrl} loading="lazy" alt={alternativeText || ""} {...props} />
    )
  }

  // The image is responsive
  return (
    <Image
      layout="responsive"
      width={media.width}
      height={media.height}
      objectFit="contain"
      src={imageUrl}
      loading="lazy"
      alt={alternativeText || ""}
    />
  )
}

Image.propTypes = {
  media: mediaPropTypes,
  className: PropTypes.string,
}

export default NextImage
