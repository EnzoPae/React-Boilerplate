import { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Card } from "primereact/card";

const Tabs = ({ sections }) => {
  const [activeTab, setActiveTab] = useState(sections[0].label);  
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (sectionName) => {
    setActiveTab(sectionName);
  };
  const renderActiveSection = () => {
    const activeComponent = sections.find(
      (section) => section.label === activeTab
    );
    return activeComponent ? activeComponent.component : null;
  };
  const handleTabChange = (e) => {
    setActiveIndex(e.index);
    handleTabClick(e.value.label);
  };
  return (
    <Card>
      <div className="mb-3">
        <TabMenu
          model={sections}
          activeIndex={activeIndex}
          onTabChange={(e) => handleTabChange(e)}
        />
      </div>
      {renderActiveSection()}
    </Card>
  );
};

export default Tabs;