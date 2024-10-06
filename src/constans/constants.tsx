import { HomeIcon, UsersIcon } from "@heroicons/react/16/solid";
import { MenuItems, RouteModel } from "../common/Interfaces";
import Home from "../Home";

export const routeItems: RouteModel[] = [
  {
    path: "/",
    element: <Home page="Home" />,
  },
  {
    path: "/customers",
    element: (
      <div>
        <p>Customer Page here!!</p>
      </div>
    ),
  },
  {
    path: "/customers/group",
    element: (
      <div>
        <p>Customer group Page here!!</p>
      </div>
    ),
  },
  {
    path: "/customers/compare",
    element: (
      <div>
        <p>Customer compare Page here!!</p>
      </div>
    ),
  },
  {
    path: "/purchase",
    element: (
      <div>
        <p>purchase Page here!!</p>
      </div>
    ),
  },
  {
    path: "/goods",
    element: (
      <div>
        <p>Goods Management Page here!!</p>
      </div>
    ),
  },
  {
    path: "/inventory",
    element: (
      <div>
        <p>Inventory Page here!!</p>
      </div>
    ),
  },
  {
    path: "/stock/history",
    element: (
      <div>
        <p>Stock History Page here!!</p>
      </div>
    ),
  },
  {
    path: "/stock/assign",
    element: (
      <div>
        <p>Stock Assign Page here!!</p>
      </div>
    ),
  },
  {
    path: "/stock/line",
    element: (
      <div>
        <p>Stock Line Page here!!</p>
      </div>
    ),
  },
];

export const navItems: MenuItems[] = [
  {
    name: "Dashborad",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Customer Management",
    icon: UsersIcon,
    childs: [
      {
        name: "Customers",
        path: "/customers",
      },
      {
        name: "Customers Group",
        path: "/customers/group",
      },
      {
        name: "Customer Group Price Comparision",
        path: "/customers/compare",
      },
    ],
  },
  {
    name: "Purchase Management",
    path: "/purchase",
    icon: UsersIcon,
  },
  {
    name: "Goods Management",
    path: "/goods",
    icon: UsersIcon,
  },
  {
    name: "Inventory Management",
    path: "/inventory",
    icon: UsersIcon,
  },
  {
    name: "Stocks",
    icon: UsersIcon,
    childs: [
      {
        name: "Stock History",
        path: "/stock/history",
      },
      {
        name: "Assign Stock",
        path: "/stock/assign",
      },
      {
        name: "Line Stock",
        path: "/stock/line",
      },
      {
        name: "Stock Zero",
        path: "/stock/zero",
      },
      {
        name: "Stock Zero List",
        path: "/stock/zeroList",
      },
    ],
  },
  {
    name: "Sales",
    path: "/sales",
    icon: UsersIcon,
  },
  {
    name: "Expenses",
    path: "/expenses",
    icon: UsersIcon,
  },
  {
    name: "Customer Payments",
    path: "/customerPayments",
    icon: UsersIcon,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: UsersIcon,
  },
];
