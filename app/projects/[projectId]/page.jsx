import SingleProject from "@/components/project-single/SingleProject";

import serverSideFetching from "@/hooks/ServerFetch";
import apiList from "@/hooks/fetchData";

const getData = async (projectId) => {
  let data = await serverSideFetching(apiList.getProject, {
    slug: projectId,
  });
  return data;
};


const ProjectPage = async ({ params }) => {
  let status = false;
  let response = {};
  try {
    let data = await getData(params.projectId);
    response = await data.json();
    status = data.ok;
  } catch (err) {
    console.log(err);
  }
  return (
    <div>
      <SingleProject serverStatus={status} serverData={response} />
    </div>
  );
};

export default ProjectPage;
