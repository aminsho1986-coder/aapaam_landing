import CNamad from "@/components/cNamad/CNamad";

import serverSideFetching from "@/hooks/ServerFetch";
import apiList from "@/hooks/fetchData";
import safeJson from "@/hooks/safeJson";


const getData = async (id) => {
  let data = await serverSideFetching(apiList.symbolInfo, {
    id: id,
  });
  return data;
};

const ProjectPage = async ({ params }) => {
  let data = await getData(params.id);
  let status = data.ok;
  let response = await safeJson(data);
  return (
    <div>
      <CNamad serverStatus={status} serverData={response} />
    </div>
  );
};


export default ProjectPage;