import { useState, useLayoutEffect, useRef } from "react";
import { PAGE_HEIGHT_PX, PAGE_PADDING_PX, PAGE_BOTTOM_BUFFER_PX } from "../data/pageConstants";

export const CONTENT_COLUMN_WIDTH = 900 - 280;

export function useAutoPagination(data) {
  const [pages, setPages] = useState(null);
  const measureRef = useRef(null);

  useLayoutEffect(() => {
    if (!measureRef.current) return;

    const headerEl = measureRef.current.querySelector("[data-measure='header']");
    const expHeaderEl = measureRef.current.querySelector("[data-measure='exp-header']");
    const expItemEls = measureRef.current.querySelectorAll("[data-measure='exp-item']");
    const projHeaderEl = measureRef.current.querySelector("[data-measure='proj-header']");
    const projItemEls = measureRef.current.querySelectorAll("[data-measure='proj-item']");
    const eduHeaderEl = measureRef.current.querySelector("[data-measure='edu-header']");
    const eduItemEls = measureRef.current.querySelectorAll("[data-measure='edu-item']");

    const headerHeight = headerEl?.offsetHeight || 0;
    const expHeaderHeight = expHeaderEl?.offsetHeight || 0;
    const projHeaderHeight = projHeaderEl?.offsetHeight || 0;
    const eduHeaderHeight = eduHeaderEl?.offsetHeight || 0;
    const expHeights = Array.from(expItemEls).map((el) => el.offsetHeight);
    const projHeights = Array.from(projItemEls).map((el) => el.offsetHeight);
    const eduHeights = Array.from(eduItemEls).map((el) => el.offsetHeight);

    const availableFirstPage =
      PAGE_HEIGHT_PX - PAGE_PADDING_PX * 2 - headerHeight - PAGE_BOTTOM_BUFFER_PX;
    const availableOtherPage = PAGE_HEIGHT_PX - PAGE_PADDING_PX * 2 - PAGE_BOTTOM_BUFFER_PX;

    const blocks = [
      { type: "edu-header", height: eduHeaderHeight },
      ...data.education.map((edu, i) => ({ type: "edu-item", item: edu, height: eduHeights[i] || 0 })),
      { type: "exp-header", height: expHeaderHeight },
      ...data.experience.map((job, i) => ({ type: "exp-item", item: job, height: expHeights[i] || 0 })),
      { type: "proj-header", height: projHeaderHeight },
      ...data.projects.map((p, i) => ({ type: "proj-item", item: p, height: projHeights[i] || 0 })),
    ];

    const result = [];
    let currentPage = { experience: [], projects: [], education: [] };
    let currentHeight = 0;
    let pageLimit = availableFirstPage;

    const pushPage = () => {
      result.push(currentPage);
      currentPage = { experience: [], projects: [], education: [] };
      currentHeight = 0;
      pageLimit = availableOtherPage;
    };

    blocks.forEach((block) => {
      if (currentHeight + block.height > pageLimit && currentHeight > 0) {
        pushPage();
      }
      currentHeight += block.height;
      if (block.type === "exp-item") currentPage.experience.push(block.item);
      if (block.type === "proj-item") currentPage.projects.push(block.item);
      if (block.type === "edu-item") currentPage.education.push(block.item);
    });

    result.push(currentPage);
    setPages(result);
  }, [data]);

  return { pages, measureRef };
}