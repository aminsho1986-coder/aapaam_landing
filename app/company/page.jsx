import Company from "@/components/company/Company";

import serverSideFetching from "@/hooks/ServerFetch";
import apiList from "@/hooks/fetchData";
import safeJson from "@/hooks/safeJson";

const getData = async () => {
  let data = await serverSideFetching(apiList.getAllPackages, {
    netZero: false,
  });
  return data;
};


export default async function CompanyPage() {
  let data = await getData();
  let status = data.ok;
  let response = await safeJson(data, []);
  return (
    <div>
      <Company serverStatus={status} serverData={response} />
    </div>
  );
}
