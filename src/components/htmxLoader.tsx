"use client";

import { useLayoutEffect } from "react";

const HtmxLoader = () => {
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      import("htmx.org").then((htmx) => {
        if (htmx) {
          // DOM の処理を行う
          htmx.process(document.body);
        }
      });
    }
  }, []);

  return null;
};

export default HtmxLoader;
