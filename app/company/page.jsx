import Company from "@/components/company/Company";

import serverSideFetching from "@/hooks/ServerFetch";
import apiList from "@/hooks/fetchData";

const getData = async () => {
  let data = await serverSideFetching(apiList.getAllPackages, {
    netZero: false,
  });
  return data;
};


export default async function CompanyPage() {
  let status = false;
  let response = [];
  try {
    let data = await getData();
    response = await data.json();
    status = data.ok;
  } catch (err) {
    console.warn("CompanyPage: remote API returned non-JSON, rendering with empty data");
  }
  return (
    <div>
      <Company serverStatus={status} serverData={response} />
    </div>
  );
}
