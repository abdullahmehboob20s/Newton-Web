import Partners from "components/Partners";
import Team from "./Team";

function TeamAndPartners() {
  return (
    <div className="py-100px bg-secondary-200">
      <div className="container">
        <div className="mb-100px">
          <Partners />
        </div>
        <Team />
      </div>
    </div>
  );
}

export default TeamAndPartners;
