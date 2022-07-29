import { Route, Switch } from "react-router-dom";
import LoginPage from "../Page/LoginPage";
import HomePage from "../Page/HomePage";
import AdminPage from "../Page/AdminPage";
import RegisterPage from "../Page/RegisterPage";
import NotFoundPage from "../Page/NotFoundPage";
import AuthenRoute from "../AuthenRoute/AuthenRoute";

// List route trong chương trình, Trong TH tích hợp API có thể dùng luôn
const routeList = [
  {
    path: "/",
    exact: true,
    componnent: () => <LoginPage />, // Sử dụng hàm arrow để sau này có thể có những route có tham số thì có thể truyền vào luôn
  },
  {
    path: "/home",
    exact: true,
    componnent: () => <HomePage />,
  },
  {
    path: "/admin",
    exact: true,
    componnent: () => <AdminPage />,
    authen: true,
  },
  {
    path: "/register",
    exact: true,
    componnent: () => <RegisterPage />,
  },
  {
    path: "",
    exact: false,
    componnent: () => <NotFoundPage />,
  },
];

// Hàm tạo ra Switch Route
let generateRouteMenus = (routeListParam) => {
  // Lặp qua từng phần tử trong list để tạo ra các tuyến route tương ứng
  let routeResult = routeListParam.map((route, index) => {
    if (route.authen) {
      return <AuthenRoute key={index} path={route.path} exact={route.exact} ComponentAuthen={AdminPage} />;
    }

    return <Route key={index} path={route.path} exact={route.exact} component={route.componnent} />;
  });

  return <Switch>{routeResult}</Switch>;
};
// Export routes để sử dụng bên App
export const routes = generateRouteMenus(routeList);

// export const routes = (
//   <Switch>
//     <Route exact path="/" component={Home} />
//     <Route exact path="/home" component={Home} />
//     <Route exact path="/admin" component={Admin} />
//     <Route component={NotFoundPage} />
//   </Switch>
// );
