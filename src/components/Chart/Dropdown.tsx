import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Dropdown = () => (
  <Menu as="div" className="relative inline-block text-left">
    <MenuButton>
      <div className="flex flex-col justify-center w-[190px] h-[35px] bg-[#18181A80] border border-[#5A5A5AA1] rounded-md px-4 py-2 text-[#FCFCFC] font-sans font-medium text-[12px] leading-[21px] cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="text-left">Unsatisfied Demand %</div>
          <ChevronDownIcon className="w-4 h-4 ml-2 text-[#FCFCFC]" />
        </div>
      </div>
    </MenuButton>

    <MenuItems className="absolute right-0 mt-2 w-[190px] origin-top-right bg-[#18181A] border border-[#5A5A5AA1] rounded-md shadow-lg z-50">
      <div className="py-1">
        <MenuItem as="div">
          {({ active }) => (
            <div
              className={`${
                active ? "bg-[#242424]" : ""
              } px-4 py-2 text-[#FCFCFC] font-sans font-medium text-[14px] leading-[21px] cursor-pointer`}
            >
              Unsatisfied Demand %
            </div>
          )}
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
);

export default Dropdown;
