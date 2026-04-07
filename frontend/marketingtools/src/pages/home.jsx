import tools from "../tools/toolconfig";
import ToolCard from "../components/toolcard";
import CarouselSection from "../components/corousel";

export default function Home() {
  return (
    <div className="container mt-4">

      <CarouselSection />
      {tools.map((section, i) => (
        <div key={section.category || i} className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mb-0 section-title text-capitalize">
              {section.category}
            </h3>
            <span className="text-muted small d-none d-md-inline">
              {section.items.length} tools
            </span>
          </div>

          <div className="row">
            {section.items.map((tool, idx) => (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={tool.path || idx}>
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}