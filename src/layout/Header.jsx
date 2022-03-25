import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react/cjs/react.production.min";
import { XIcon } from "@heroicons/react/outline";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Menu } from "../assets/menu.svg";

const navigation = [
  {
    name: "PROGRAM",
  },
  {
    name: "FUNDING",
  },
  {
    name: "JOBS",
  },
  {
    name: "MENU",
  },
];

const Header = () => {
  return (
    <header className="bg-dark max-w-7xl font-sans px-4 flex justify-between items-center h-20 fixed top-0 right-0 left-0 sm:relative sm:px-8">
      <nav className="flex justify-between w-full items-center h-full">
        <Logo className="text-9xl sm:hidden" />
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="py-2">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Disclosure.Panel className="sm:hidden relative z-50">
                  <div className="px-7 py-5 space-y-1 shadow-lg absolute -left-32 top-9 bg-dark rounded-md">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        href="/"
                        className="px-3 py-2"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <div className="hidden w-full h-full sm:flex sm:items-center sm:justify-between">
          <div className="space-x-10">
            <a
              href="/"
              className="py-2 text-base hover:text-primary transition-all"
            >
              {navigation[0].name}
            </a>
            <a
              href="/"
              className="py-2 text-base hover:text-primary transition-all"
            >
              {navigation[1].name}
            </a>
          </div>
          <Logo className="text-9xl" />
          <div className="space-x-10">
            <a
              href="/"
              className="py-2 text-base hover:text-primary transition-all"
            >
              {navigation[2].name}
            </a>
            <a
              href="/"
              className="py-2 text-base hover:text-primary transition-all"
            >
              {navigation[3].name}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
