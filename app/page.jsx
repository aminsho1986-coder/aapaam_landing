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

  let response = {};
  let bannersResponse = {};
  try {

    let data = await getData();
    response = await data.json();
    let bannersData = await getBannersData();
    bannersResponse = await bannersData.json();

  } catch (err) {
    console.log(err);
  }
  return (
    <div>
      <Main
        serverData={{ response, bannersResponse }}
      />
    </div>
  );
};

export default Home;
