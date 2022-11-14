import { useState } from "react";
import Navbar from "./elements/navbar";
import Footer from "./elements/footer";
import NotificationBanner from "./elements/notification-banner";

const Layout = ({
  children,
  global,
  pageContext,
  bgColor = "bg-light-grey-blue",
}) => {
  const { navbar, footer, notificationBanner, googleReviews } = global;

  const [bannerIsShown, setBannerIsShown] = useState(true);
  return (
    <div
      className={`flex min-h-screen flex-col justify-between ${bgColor} pt-0 font-roboto`}
    >
      {/* Aligned to the top */}
      <div className="flex-1">
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={() => setBannerIsShown(false)}
          />
        )}
        <Navbar navbar={navbar} pageContext={pageContext} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} googleReviews={googleReviews} />
    </div>
  );
};

export default Layout;
