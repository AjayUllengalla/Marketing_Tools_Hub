import tools from "../tools/toolconfig";
import ToolCard from "../components/toolcard";
import CarouselSection from "../components/corousel";

export default function Home() {
  return (
    <div className="container mt-4">

      <CarouselSection />
      {tools.map((section, i) => (
        <div key={i}>
          <h3 className="mb-3">{section.category}</h3>

          <div className="row">
            {section.items.map((tool, idx) => (
              <div className="col-md-3 mb-3" key={idx}>
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}