import ButtonLink from "@/components/elements/button-link";
import Layout from "@/components/layout";
import { fetchAPI } from "utils/api";

const ContactSuccessPage = ({ global, pageContext }) => {
  return (
    <Layout bgColor="bg-white" global={global} pageContext={pageContext}>
      <div className="pt-24 pb-12">
        <div
          className="h-20 w-full bg-contain bg-repeat-x"
          style={{ backgroundImage: "url(/icons/symbol-1.png)" }}
        ></div>
        <div>
          <div className="space-y-4 pt-32 pb-24 text-center 2xl:pt-52 2xl:pb-72">
            <h1 className="font-russo text-4xl font-thin uppercase text-primary-600">
              Thanks for contacting us.
            </h1>
            <p className="mt-2 text-gray-700">
              We will get back to you shortly.
            </p>
            <div className="pt-8">
              <ButtonLink
                button={{ url: "/", text: "GO BACK TO HOME" }}
                appearance="dark"
              />
            </div>
          </div>
        </div>
        <div
          className="h-20 w-full bg-contain bg-repeat-x"
          style={{ backgroundImage: "url(/icons/symbol-1.png)" }}
        ></div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async (req) => {
  let global = await fetchAPI("/global");

  const pageContext = {
    slug: `reservation-request-success`,
  };

  return {
    props: {
      global,
      pageContext,
    },
  };
};

export default ContactSuccessPage;
