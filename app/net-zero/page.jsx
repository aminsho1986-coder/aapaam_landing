import NetZero from "@/components/net-zero/NetZero";

import serverSideFetching from "@/hooks/ServerFetch";
import apiList from "@/hooks/fetchData";

const getData = async () => {
  let data = await serverSideFetching(apiList.getAllPackages, {
    netZero: true,
  });
  return data;
};



const NetZeroPage = async () => {
  let data = await getData();
  let status = data.ok;
  let response = await data.json();
  return (
    <div>
      <NetZero serverStatus={status} serverData={response} />
    </div>
  );
};

export default NetZeroPage;
