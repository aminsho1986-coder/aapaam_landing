import Projects from "@/components/project/Projects";

import serverSideFetching from "@/hooks/ServerFetch";
import apiList from "@/hooks/fetchData";

const getData = async () => {
  let data = await serverSideFetching(apiList.getAllProjects);
  return data;
};



const ProjectsPage = async () => {
  let data = await getData();
  let status = data.ok;
  let response = await data.json();
  response.map((item) => {
    return (item.images[0] =
      process.env.NEXT_PUBLIC_BASE_URL_IMAGES + item.images[0]);
  });
  return (
    <div>
      <Projects serverStatus={status} serverData={response} />
    </div>
  );
};

export default ProjectsPage;
