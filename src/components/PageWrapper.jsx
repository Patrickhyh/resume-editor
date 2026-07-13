import { forwardRef } from "react";
import { PAGE_WIDTH_PX, PAGE_HEIGHT_PX } from "../data/pageConstants";

const PageWrapper = forwardRef(({ children, className = "" }, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-white shadow-lg mx-auto mb-6 overflow-hidden ${className}`}
      style={{
        width: `${PAGE_WIDTH_PX}px`,
        height: `${PAGE_HEIGHT_PX}px`,
      }}
    >
      {children}
    </div>
  );
});

export default PageWrapper;