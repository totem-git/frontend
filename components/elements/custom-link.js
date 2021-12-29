import Link from "next/link"
import PropTypes from "prop-types"
import { linkPropTypes } from "utils/types"

const CustomLink = ({ link, children, wFull = false }) => {
  const isInternalLink = link.url.startsWith("/")

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return (
      <Link href="/[[...slug]]" as={link.url}>
        <a className={`${wFull && 'w-full'}`}>{children}</a>
      </Link>
    )
  }

  // Plain <a> tags for external links
  if (link.newTab) {
    return (
      <a className={`${wFull && 'w-full'}`} href={link.url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <a className={`${wFull && 'w-full'}`} href={link.url} target="_self">
      {children}
    </a>
  )
}

CustomLink.propTypes = {
  link: linkPropTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  wFull: PropTypes.bool,
}

export default CustomLink
