import React, { forwardRef } from 'react';
import "./DropdownContent.scss";

const DropdownContent = forwardRef((props,ref) => {
  const {children, open, top}= props;
  return (
    <div className={`dropdown-content 
      ${open ? "content-open" : null}`}
      ref={ref} style={{ top: top ? `${top}px`:"100%" }}
    >
      {children}
    </div>
  );
})

export default DropdownContent;
