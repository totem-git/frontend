import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";

import Cookies from "js-cookie";
import { MdExpandMore } from "react-icons/md";
import WorldIcon from "./icons/world";

import { useOnClickOutside } from "../utils/hooks";
import { getLocalizedPage, localizePath } from "utils/localize";

const LocaleSwitch = ({ pageContext }) => {
  const isMounted = useRef(false);
  const select = useRef();
  const router = useRouter();
  const [locale, setLocale] = useState();
  const [showing, setShowing] = useState(false);

  const handleLocaleChange = async (selectedLocale) => {
    // Persist the user's language preference
    // https://nextjs.org/docs/advanced-features/i18n-routing#leveraging-the-next_locale-cookie
    Cookies.set("NEXT_LOCALE", selectedLocale);
    setLocale(selectedLocale);
  };

  const handleLocaleChangeRef = useRef(handleLocaleChange);
  useOnClickOutside(select, () => setShowing(false));

  useEffect(() => {
    const localeCookie = Cookies.get("NEXT_LOCALE");
    if (!localeCookie) {
      handleLocaleChangeRef.current(router.locale);
    }

    const checkLocaleMismatch = async () => {
      if (
        !isMounted.current &&
        localeCookie &&
        localeCookie !== pageContext.locale
      ) {
        // Redirect to locale page if locale mismatch
        const localePage = getLocalizedPage(localeCookie, pageContext);

        router.push(
          `${localizePath({ ...pageContext, ...localePage })}`,
          `${localizePath({ ...pageContext, ...localePage })}`,
          { locale: localePage.locale }
        );
      }
      setShowing(false);
    };

    setLocale(localeCookie || router.locale);
    checkLocaleMismatch();

    return () => {
      isMounted.current = true;
    };
  }, [locale, router, pageContext]);

  return (
    <div ref={select} className="relative ml-4">
      <button
        type="button"
        className="flex h-full w-20 cursor-pointer items-center justify-between rounded-md px-2 py-2 hover:bg-primary-50 hover:text-primary-600 focus:bg-primary-50 focus:text-primary-600 focus:outline-none"
        onClick={() => setShowing(!showing)}
      >
        <WorldIcon />
        <span className="capitalize">{locale}</span>
        <MdExpandMore className="ml-1 text-primary-600" />
      </button>
      <div
        className={`z-50 mt-1 w-full rounded-md bg-white p-1 shadow-lg ${
          showing ? "absolute" : "hidden"
        }`}
      >
        {pageContext.localizedPaths &&
          pageContext.localizedPaths.map(({ href, locale }) => {
            return (
              <Link
                href={href}
                key={locale}
                locale={locale}
                role="option"
                passHref
              >
                <p
                  onClick={() => handleLocaleChange(locale)}
                  className="cursor-pointer rounded-md p-2 text-center capitalize hover:bg-primary-50 hover:text-primary-600"
                >
                  {locale}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

LocaleSwitch.propTypes = {
  initialLocale: PropTypes.string,
};

export default LocaleSwitch;
