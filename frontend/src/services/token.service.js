import { Cookies } from "react-cookie";
const cookies = new Cookies();

const getLocalAccessToken = () => {
  const user = getUser();
  console.log(user);
  return user?.accessToken;
};

const getUser = () => {
  const user = cookies.get("user");
  return user;
};

const setUser = (user) => { 
  cookies.set("user", JSON.stringify(user), {
    path: "/",
    expires: new Date(Date.now() + 864000),
  });
};

const removeUser = () => {
  cookies.remove("user", { path: "/" });
};

const TokenService = {
  getLocalAccessToken,
  setUser,
  getUser,
  removeUser,
};

export default TokenService;