import Link from "next/link";
import PropTypes from "prop-types";
import { ActionLink, allowedActions } from "utils/actions";
import { linkPropTypes } from "utils/types";

const CustomLink = ({ link, children, wFull = false, className, ...props }) => {
  const isInternalLink =
    typeof link.url === "object" || link.url.startsWith("/");
  // const isActionLink = link.url.startsWith(":");

  // For internal links, use the Next.js Link component
  if (isInternalLink) {
    return typeof link.url === "object" ? (
      <Link href={link.url} as={link.urlAs}>
        <a
          className={`${wFull != "undefined" && "w-full"} ${className}`}
          {...props}
        >
          {children}
        </a>
      </Link>
    ) : (
      <Link href={link.url}>
        <a
          className={`${wFull != "undefined" && "w-full"} ${className}`}
          {...props}
        >
          {children}
        </a>
      </Link>
    );
  }

  if (
    link.url.startsWith(":") &&
    allowedActions.includes(
      link.url.slice(
        1,
        link.url.indexOf(" ") > 0 ? link.url.indexOf(" ") : link.url.length
      )
    )
  ) {
    let action = link.url.slice(1);

    return (
      <ActionLink
        action={action}
        className={`${wFull && "w-full"} ${className} cursor-pointer`}
      >
        {children}
      </ActionLink>
    );
  }

  // Plain <a> tags for external links
  if (link.newTab) {
    return (
      <a
        className={`${wFull && "w-full"} ${className}`}
        {...props}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      className={`${wFull && "w-full"}  ${className}`}
      {...props}
      href={link.url}
      target="_self"
    >
      {children}
    </a>
  );
};

CustomLink.propTypes = {
  link: linkPropTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  wFull: PropTypes.bool,
};

export default CustomLink;
