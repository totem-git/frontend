import React from "react";
import ReactMarkdown from "react-markdown";

const CancellationPolicy = ({ data, prependBreadcrumbs }) => {
  console.log(data);
  return (
    <section
      data-section-name="cancellation-policy"
      className=" flex justify-center bg-white text-[#505452]"
    >
      <div className="py-16">
        <h2 className="mb-7 pt-32 text-3xl text-[#FEBE4B]">{data.title}</h2>
        <ReactMarkdown className="cancellation-policy-text prose max-w-[1400px] ">
          {data.text}
        </ReactMarkdown>
        {/* 
        <h4 className="pt-6 text-xl">Policy</h4>
        <p className="pt-4 text-sm">
          50% deposit due on time of booking, remaining 50% due 48 hours out
          from booked dates.
        </p>
        <p className="pt-4 text-sm">
          *We do not offer refunds for any reasons including but not limited to
          weather, illness, injury, fishing or poor ice conditions, border
          issues, Covid related issues, flight changes, cancellations or changes
          in the number of guests. Parties are responsible for full payment of
          the original number of guests booked, even if the actual number of
          guests in the party is less than the original reservation. All
          payments are non-refundable, however, alternate reservations can be
          made during the current season. Should you move your reservation to
          the next calendar season, there might be a slight increase of 5% to
          cover the increase of the cost of living. Early checkouts will be
          charged for full time booked. Early check ins may be subject to
          additional fees. Lake of the Woods Ice Sleepers highly recommends that
          all guests purchase 3rd party travel insurance to protect yourself
          from any unforeseen circumstances as no refunds will be authorized by
          LOTW Ice Sleepers, for any reason.{" "}
        </p>
        <h4 className="pt-6 text-xl">Waiver</h4>
        <p className="pt-4 text-sm">
          Click HERE to download printable PDF waiver form to be sign by each
          person staying with us and brought with you at time of check in OR you
          may e-mail it back to dustinbrown3535@icloud.com.
        </p>
        <h4 className="pt-4 text-xl">Damage Deposit</h4>
        <p className="pt-4 pb-32 text-sm">
          A one-time hold of $500.00 on a major credit card (Visa/MasterCard) or
          cash is due upon arrival and will be issued back to the card holder
          immediately upon departure for any and all damages that may occur
          during your visit with us.
        </p> */}
      </div>
    </section>
  );
};

export default CancellationPolicy;
