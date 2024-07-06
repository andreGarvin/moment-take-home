"use client";

import { usePathname } from "next/navigation";
import { URLPattern } from "next/server";
import Link from "next/link";

import { twMerge } from "tailwind-merge";

import { Logo } from "./components/logo";
import { Button } from "./components/ui/Button";


type Tab = { label: string, url: string };

type TabButtonProps = {
  item: Tab;
}

const TabButton: React.FC<TabButtonProps> = (props) => {
  const { label, url } = props.item;

  const pathname = usePathname();
  const [root] = pathname.split("/").slice(1);

  const activeLink = root === url.slice(1);

  const className = twMerge(
    "border-0 shadow-none capitalize mx-1 px-4 py-2",
    activeLink ? "bg-[#E5E7EB] font-medium" : "bg-transparent font-normal"
  );

  return (
    <Link href={url}>
      <Button key={url} className={className}>{label}</Button>
    </Link>
  );
}

type TabsProps = {
  list: Tab[];
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { list } = props;

  const TabList = list.map((item, index) => (
    <TabButton key={index} item={item} />
  ));

  return (
    <div className="flex flex-row justify-center  items-center">{TabList}</div>
  );
}

const TabList: Tab[] = [
  {
    label: "home",
    url: "/",
  },
  {
    label: "research",
    url: "/research",
  },
  {
    label: "order management",
    url: "/order-management",
  },
  {
    label: "portfolio management",
    url: "/portfolio-management",
  },
];

export const Header = () => {
  return (
    <nav className="w-full flex justify-center border-b-2 border-[#E4E4E7] py-4">
      <div className="w-11/12 flex flex-row justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>

        <Tabs list={TabList} />
        <div></div>
      </div>
    </nav>
  );
}
