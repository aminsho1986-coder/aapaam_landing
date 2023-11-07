import Company from "@/components/company/Company";

import serverSideFetching from "@/hooks/ServerFetch";
import apiList from "@/hooks/fetchData";

const getData = async () => {
  let data = await serverSideFetching(apiList.getAllPackages, {
    netZero: false,
  });
  return data;
};

export const metadata = {
  title: "آپام | شرکت ها",
}

export default async function CompanyPage() {
  let data = await getData();
  let status = data.ok;
  let response = await data.json();
  return (
    <div>
      <Company serverStatus={status} serverData={response} />
    </div>
  );
}
