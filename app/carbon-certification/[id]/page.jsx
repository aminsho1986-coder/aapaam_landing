import CNamad from "@/components/cNamad/CNamad";

import serverSideFetching from "@/hooks/ServerFetch";
import apiList from "@/hooks/fetchData";


const getData = async (id) => {
  let data = await serverSideFetching(apiList.symbolInfo, {
    id: id,
  });
  return data;
};

const ProjectPage = async ({ params }) => {
  let status = false;
  let response = {};
  try {
    let data = await getData(params.id);
    response = await data.json();
    status = data.ok;
  } catch (err) {
    console.log(err);
  }
  return (
    <div>
      <CNamad serverStatus={status} serverData={response} />
    </div>
  );
};


export default ProjectPage;