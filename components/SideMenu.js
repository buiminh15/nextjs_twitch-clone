import React from "react";
import { DesktopComputerIcon } from "@heroicons/react/outline";
import { rec_channels, top_channels } from "../utils/data";
import Image from "next/image";

function Title({ title, Icon }) {
  return (
    <div className="flex justify-center xl:justify-start text-lg mb-2">
      <h2 className="hidden xl:block font-bold">{title}</h2>
      <Icon className="h-6 xl:hidden" />
    </div>
  );
}

function MenuItem({ avatar, username, game_name, rank }) {
  return (
    <div className="flex gap-2">
      <Image src={avatar} width="50" height="50" alt={username} />
      <div className="hidden xl:flex justify-between w-full">
        <div>
          <p>{username}</p>
          <p>{game_name}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="h-2 w-2 bg-red-500 rounded-full" />
          {rank}K
        </div>
      </div>
    </div>
  );
}

function RecommendedChannels() {
  return (
    <>
      <Title title="Recommended Channels" Icon={DesktopComputerIcon} />
      <ul className="flex flex-col gap-2">
        {rec_channels.map((item) => (
          <MenuItem
            key={item.id}
            avatar={item.avatar}
            username={item.username}
            rank={item.rank}
            game_name={item.game_name}
          />
        ))}
      </ul>
    </>
  );
}

function TopChannels() {
  return (
    <>
      <Title title="Top Channels" Icon={DesktopComputerIcon} />
      <ul className="flex flex-col gap-2">
        {top_channels.map((item) => (
          <MenuItem
            key={item.id}
            avatar={item.avatar}
            username={item.username}
            rank={item.rank}
            game_name={item.game_name}
          />
        ))}
      </ul>
    </>
  );
}

function SideMenu() {
  return (
    <aside className="fixed w-14 sm:w-16 xl:w-[15rem] h-screen p-2 bg-[#0e0e10] overflow-y-auto">
      <RecommendedChannels />
      <div className="mt-4"></div>
      <TopChannels />
    </aside>
  );
}

export default SideMenu;
