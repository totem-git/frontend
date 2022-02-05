import ButtonLink from "@/components/elements/button-link";
import { getButtonAppearance } from "utils/button";

const BottomActions = ({ data }) => {
  return (
    <section className="bg-primary-900 py-20 text-center">
      <h2 className="title mb-10 text-white">{data.title}</h2>
      {/* Buttons row */}
      <div className="container flex flex-row flex-wrap justify-center gap-4">
        {data.buttons.map((button) => (
          <ButtonLink
            button={button}
            appearance={getButtonAppearance(button.type, "dark")}
            key={button.id}
          />
        ))}
      </div>
    </section>
  );
};

export default BottomActions;
