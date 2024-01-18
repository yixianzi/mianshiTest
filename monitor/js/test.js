const getLastUrl = (location) => {
  try {
    const { href = "" } = location || {};
    const array = href.split("//")[1].split("/");
    const l = array.length;
    const tempArray = [];
    for (let i = 1; i < array.length; i++) {
      tempArray.push(array[i]);
    }
    let r = tempArray.join("/");
    r = r.startsWith("#") ? r.slice(1) : r; // 处理vue hash
    r = r.startsWith("/") ? r : "/" + r; // 处理老系统
    return r;
  } catch (err) {
    return location.href;
  }
};

const u = {
  ancestorOrigins: {},
  href: "http://localhost:2503/#/cost",
  origin: "http://localhost:2503",
  protocol: "http:",
  host: "localhost:2503",
  hostname: "localhost",
  port: "2503",
  pathname: "/",
  search: "",
  hash: "#/cost",
};
const u2 = {
  ancestorOrigins: {},
  href: "https://192.168.69.14:8444/NetXpert/auth/index/index.jsp",
  origin: "https://192.168.69.14:8444",
  protocol: "https:",
  host: "192.168.69.14:8444",
  hostname: "192.168.69.14",
  port: "8444",
  pathname: "/NetXpert/auth/index/index.jsp",
  search: "",
  hash: "",
};
const r = getLastUrl(u);
console.log(r);
