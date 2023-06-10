import { SwitchScreen } from "../shared/ui/switch-screen/switch-screen";
import { PlateSearchByPhoto } from "./plate-search-photo";
import { PlateSearchByText } from "./plate-search-text";
import { PlateSearchByFile } from "./plate-search-file";
import { PlateResults } from "./plate-results";

export const PlateSearch = () => {
  return (
    <>
      <SwitchScreen
        screens={[
          { key: "photo", component: <PlateSearchByPhoto /> },
          { key: "file", component: <PlateSearchByFile /> },
          { key: "text", component: <PlateSearchByText /> },
        ]}
        buttonProps={[
          { title: "Buscar por foto", icon: "ImageIcon" },
          { title: "Buscar por archivo", icon: "FileIcon" },
          { title: "Buscar por texto", icon: "TextIcon" },
        ]}
      />
      <PlateResults />
    </>
  );
};
