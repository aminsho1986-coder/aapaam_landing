import Main from "@/components/main/Main";

import serverSideFetching from "@/hooks/ServerFetch";
import apiList from "@/hooks/fetchData";


const getData = async () => {
  let data = await serverSideFetching(apiList.mainHeaderData);
  return data;
};

const getBannersData = async () => {
  let data = await serverSideFetching(apiList.banners);
  return data;
};

const Home = async () => {
  let data = await getData();
  let status = data.ok;
  let response = await data.json();
  let bannersData = await getBannersData();
  let bannersStatus = data.ok;
  let bannersResponse = await bannersData.json();
  return (
    <div>
      <Main
        serverStatus={status && bannersStatus}
        serverData={{ response, bannersResponse }}
      />
    </div>
  );
};

export default Home;
