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
  let status = false;
  let response = [];
  try {
    let data = await getData();
    response = await data.json();
    status = data.ok;
  } catch (err) {
    console.warn("NetZeroPage: remote API returned non-JSON, rendering with empty data");
  }
  return (
    <div>
      <NetZero serverStatus={status} serverData={response} />
    </div>
  );
};

export default NetZeroPage;
