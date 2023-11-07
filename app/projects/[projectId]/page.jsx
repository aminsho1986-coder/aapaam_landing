import SingleProject from "@/components/project-single/SingleProject";

import serverSideFetching from "@/hooks/ServerFetch";
import apiList from "@/hooks/fetchData";

const getData = async (projectId) => {
  let data = await serverSideFetching(apiList.getProject, {
    projectId: projectId,
  });
  return data;
};

export const metadata = {
  title: "آپام | پروژه",
}


const ProjectPage = async ({ params }) => {
  let data = await getData(params.projectId);
  let status = data.ok;
  let response = await data.json();
  return (
    <div>
      <SingleProject serverStatus={status} serverData={response} />
    </div>
  );
};

export default ProjectPage;
