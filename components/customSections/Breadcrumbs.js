import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { fetchAPI } from "utils/api";
import RightArrowIcon from "../SVGicons/right-arrow-icon";

const Breadcrumbs = ({ bgColor = "" }) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname === "/") return undefined;

    const fragments = pathname.split("/");

    let slugs = [];
    for (let i = 0; i < fragments.length; i++) {
      if (fragments[i] !== "") {
        slugs.push(fragments.slice(1, i + 1).join("/"));
      }
    }

    let whereClauses = [];
    for (let i = 0; i < slugs.length; i++) {
      whereClauses.push(`slug_in=${slugs[i]}`);
    }

    fetchAPI(`/pages/paths?${whereClauses.join("&")}`).then((paths) => {
      setBreadcrumbs([
        {
          label: "Home",
          href: "/",
        },
        ...slugs.map((slug) => {
          let path = paths.find((path) => path.slug === slug);
          return {
            label: path ? path.shortName : "",
            href: `/${slug}`,
          };
        }),
      ]);
    });
  }, []);

  return (
    <div className={`${bgColor} pb-4 pt-12`}>
      <div className="container xl:px-12">
        {breadcrumbs.map(({ href, label }, index) => {
          if (index + 1 !== breadcrumbs.length) {
            return (
              label && (
                <Fragment key={index}>
                  <Link href={href} passHref>
                    <a className="mr-2 text-gray-500">{label}</a>
                  </Link>
                  <RightArrowIcon className="mr-2 inline-block" />
                </Fragment>
              )
            );
          } else {
            return <span key={index}>{label}</span>;
          }
        })}
      </div>
    </div>
  );
};

export default Breadcrumbs;
