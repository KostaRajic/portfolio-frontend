import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export const PhoneContact = ({ goBack }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [goBack]);

  const handleClickOutside = (e) => {
    if (!modalRef?.current?.contains(e.target)) {
      goBack();
    }
  };

  return createPortal(
    <div className="portalClass">
      <div ref={modalRef}>
        <a href="tel:+381642348251" style={{marginTop: '150px'}}>
          <h2>+381 64 / 234 - 82 - 51</h2>
        </a>
      </div>
    </div>,

    document.getElementById("emailandphone")
  );
};
