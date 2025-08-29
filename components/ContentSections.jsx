import VisionMissionSection from "./VisionMissionSection";
import OrganicManureParkSection from "./OrganicManureParkSection";
import AboutUsSection from "./AboutUsSection";
import ProjectsSection from "./ProjectsSection";
import ContactUsSection from "./ContactUsSection";

export default function ContentSections() {
  return (
    <div className="py-20 space-y-32">
      <VisionMissionSection />
      <OrganicManureParkSection />
      <AboutUsSection />
      <ProjectsSection />
      <ContactUsSection />
    </div>
  );
}
