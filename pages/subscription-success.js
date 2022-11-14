import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { fetchAPI } from "utils/api";

const SubscriptionSuccessPage = ({ global, pageContext }) => {
  return (
    <Layout bgColor="bg-white" global={global} pageContext={pageContext}>
      <div className="pt-24">
        <div
          className="h-20 w-full bg-contain bg-repeat-x"
          style={{ backgroundImage: "url(/icons/symbol-1.png)" }}
        ></div>
        <div
          style={{
            background:
              "url(/svg/fish-top.svg) center bottom / 115% auto no-repeat",
          }}
        >
          <div className="space-y-4 pt-32 pb-56 text-center 2xl:pt-52 2xl:pb-72">
            <h1 className="font-russo text-4xl font-thin uppercase text-primary-600">
              You have successfully <br /> subscribed!
            </h1>
            <p className="mt-2 text-gray-700">
              This is your official confirmation. Thanks for joining to Totem
              Resorts newsletter.
            </p>
            <div className="mt-8">
              <Image
                src={"/icons/envelope-success.svg"}
                width={114}
                height={79}
              />
            </div>
            <div>
              <Link href="/">
                <a className="font-semibold underline">Go back to home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ params, query, res }) => {
  let global = await fetchAPI("/global");

  const pageContext = {
    slug: `subscription-success`,
  };

  return {
    props: {
      global,
      pageContext,
    },
  };
};

export default SubscriptionSuccessPage;
