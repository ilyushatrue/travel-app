import { ReactNode } from "react";

export interface INavMenu{
  groups: INavMenuGroup[];
}

export interface INavMenuGroup{
  className?:string;
  items: INavMenuItem[];
}

export interface INavMenuItem {
  ref: any;
  href: string;
  className: string;
  active: boolean;
  child?: any
  liClass?: string
}
