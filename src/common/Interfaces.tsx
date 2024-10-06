import { ReactElement } from "react";

export interface ChildMenu {
  name: string;
  path: string;
  icon?: any | string;
}
export interface MenuItems {
  name: string;
  icon: any;
  path?: any | string;
  childs?: ChildMenu[];
}

export interface RouteModel {
  path: string;
  element: ReactElement;
}
