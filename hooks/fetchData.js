const data = {
  getAllPackages: {
    method: "GET",
    url: "package/getAll",
  },
  banners: {
    method: "GET",
    url: "landing/banner",
  },
  mainHeaderData: {
    method: "GET",
    url: "landing/header",
  },
  getAllProjects: {
    method: "GET",
    url: "projects/getAll",
  },
  getProject: {
    method: "GET",
    url: "projects/get",
  },
  addContact: {
    method: "POST",
    url: "landing/contact",
  },
  symbolInfo: {
    method: "GET",
    url: "symbol/info",
  },
};
export default data;
