import SharedMedia from "./components/SharedMedia";
import SharedQuote from "./components/SharedQuote";
import SharedRichText from "./components/SharedRichText";
import SharedSlider from "./components/SharedSlider";
import { Block } from "../../common/types";

export default function BlogContent({ block }: Readonly<{ block: Block }>) {
  const components = [
    { name: "shared.rich-text", component: SharedRichText },
    { name: "shared.media", component: SharedMedia },
    { name: "shared.quote", component: SharedQuote },
    { name: "shared.slider", component: SharedSlider },
  ];

  const matchedComponent = components.find(
    (item) => item.name === block.__component
  );

  if (!matchedComponent) {
    return <div>Component not found</div>;
  }

  const Component = matchedComponent.component;

  return <Component data={block} />;
}
