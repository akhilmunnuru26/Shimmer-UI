import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const AccordionItem = ({ title, body }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const isNested = Array.isArray(body);

  return (
    <div className="p-3 border m-auto w-full">
      <header
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex flex-row justify-between align-middle font-bold text-xl border border-black bg-slate-200 p-3 text-blue-800"
      >
        <span>{title}</span>
        <span className="text-black text-lg">
          {isOpen ? <FaArrowUp /> : <FaArrowDown />}
        </span>
      </header>
      {isOpen && (
        <div className="p-3 bg-slate-50 text-md">
          {isNested ? (
            body?.map((eachItem) => (
              <AccordionItem
                key={eachItem.id}
                title={eachItem?.title}
                body={eachItem?.body}
              />
            ))
          ) : (
            <p>{body}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
