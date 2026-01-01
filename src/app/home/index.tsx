import { Flex } from "@radix-ui/themes";
import { Banner, OurServices } from "./components";
import { TeamList } from "../doctors/team";
import { Hospitals } from "../medical-centers/components/hospitals";
import { DepartmentsMap } from "../medical-centers/components/departments-map";

export const HomePage = () => {
  return (
    <Flex direction={"column"} gap="5" width={"100%"} mx="auto">
      <Banner />
      <OurServices />
      <TeamList />
      <Hospitals />
      <DepartmentsMap />
    </Flex>
  );
};
