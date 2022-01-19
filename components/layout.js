import { useState } from "react"
import Navbar from "./elements/navbar"
import Footer from "./elements/footer"
import NotificationBanner from "./elements/notification-banner"

const Layout = ({ children, global, pageContext }) => {
  const { navbar, footer, notificationBanner, googleReviews } = global

  const [bannerIsShown, setBannerIsShown] = useState(true)
  return (
    <div className="flex flex-col justify-between min-h-screen pt-0 font-roboto bg-light-grey-blue">
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
  )
}

export default Layout
