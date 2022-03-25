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
      <nav className="flex justify-between w-full items-center">
        <Logo className="text-9xl" />
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div>
                <div className="relative flex items-center justify-between">
                  <div className=" sm:hidden">
                    {/* Mobile menu button*/}

                    <Disclosure.Button className="inline-flex items-center justify-center py-2 rounded-md  ">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Menu className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex items-center justify-center ">
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-10">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href="/"
                            className=" py-2 rounded-md text-sm transition-all"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
                <Disclosure.Panel className="sm:hidden relative z-20">
                  <div className="px-7 py-5 space-y-1 shadow-lg absolute -left-32 top-9 bg-dark rounded-lg">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        href="/"
                        className=" hover:bg-gray-dark
                  block px-3 py-2 rounded-md text-base font-medium"
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
      </nav>
    </header>
  );
};

export default Header;
