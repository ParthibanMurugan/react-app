import { MenuItems } from "./common/Interfaces";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
} from "@headlessui/react";

import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  ChevronRightIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface SideBarProps {
  children: React.ReactNode;
  menuItems: MenuItems[];
}

const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => {
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  const isCurrentItem = (item: string) => () => {
    // alert(`item name :${item}`);
    setCurrentItem(item);
  };

  const popuplateMenu = (item: MenuItems) => {
    return (
      <li key={item.name}>
        {!item.childs ? (
          <Link
            onClick={isCurrentItem(item.name)}
            to={item.path}
            className={classNames(
              currentItem === item.name
                ? "bg-gray-800 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white",
              "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 w-full"
            )}
          >
            <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
            {item.name}
          </Link>
        ) : (
          <Disclosure as={"div"}>
            <DisclosureButton
              className={classNames(
                "text-gray-400",
                "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6"
              )}
            >
              <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
              {item.name}
              <ChevronRightIcon
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
              />
            </DisclosureButton>
            <DisclosurePanel as="ul" className="mt-1 px-2">
              {item.childs.map((childItem) => (
                <li
                  key={childItem.name}
                  onClick={isCurrentItem(childItem.name)}
                >
                  <Link
                    to={childItem.path}
                    className={classNames(
                      currentItem === childItem.name
                        ? "bg-gray-800 text-white"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white",
                      "block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700"
                    )}
                  >
                    {childItem.name}
                  </Link>
                </li>
              ))}
            </DisclosurePanel>
          </Disclosure>
        )}
      </li>
    );
  };

  return (
    <>
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5 w-full"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {props.menuItems.map((item) => popuplateMenu(item))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {props.menuItems.map((item) => popuplateMenu(item))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Your profile</span>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="h-8 w-8 rounded-full bg-gray-800"
            />
          </a>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{props.children}</div>
        </main>
      </div>
    </>
  );
};

export default SideBar;
