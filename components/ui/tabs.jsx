"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <div
        className={cn(
          "tw-flex tw-flex-row tw-items-center tw-justify-center [perspective:1000px] tw-relative tw-overflow-auto sm:tw-overflow-visible tw-no-visible-scrollbar tw-max-w-full tw-w-full",
          containerClassName
        )}>
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("tw-relative tw-px-6 tw-py-3 tw-rounded-full tw-mx-1", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}>
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "tw-absolute tw-inset-0 tw-bg-gray-200 dark:tw-bg-zinc-800 tw-rounded-full",
                  activeTabClassName
                )} />
            )}

            <span className="tw-relative tw-block tw-text-black dark:tw-text-white tw-font-medium">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("tw-mt-20", contentClassName)} />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering
}) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="tw-relative tw-w-full tw-h-full tw-max-w-3xl tw-mx-auto">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("tw-w-full tw-h-full tw-absolute tw-top-0 tw-left-0", className)}>
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};