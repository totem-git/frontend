import { MdCheckBox } from "react-icons/md";
import classNames from "classnames";

const Pricing = ({ data }) => {
  return (
    <div className="container py-12">
      <h1 className="text-center text-4xl">{data.title}</h1>
      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:justify-center">
        {data.plans.map((plan) => (
          <div
            className={classNames(
              // Common classes
              "md:w-lg flex-1 rounded-md border-2 py-4 px-4",
              // Normal plan
              {
                "border-gray-300 bg-gray-100 text-gray-900":
                  !plan.isRecommended,
              },
              // Recommended plan
              {
                "border-primary-300 bg-primary-100 text-primary-900":
                  plan.isRecommended,
              }
            )}
            key={plan.id}
          >
            <h2 className="text-2xl">{plan.name}</h2>
            <p
              className={classNames("mt-4 text-lg", {
                "text-primary-700": plan.isRecommended,
                "text-gray-700": !plan.isRecommended,
              })}
            >
              {plan.description}
            </p>
            <p className="mt-4 text-3xl">
              {plan.price === 0 ? "Free " : `$${plan.price} `}
              <span className="text-base font-medium">{plan.pricePeriod}</span>
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  className="flex flex-row items-center justify-between"
                  key={feature.id}
                >
                  <span>{feature.name}</span>
                  <MdCheckBox className="h-6 w-auto text-gray-900" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
