/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import TopNav from "../../../components/TopNav";
import arrow from "../../../assets/arrow-right.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import img from "../../../assets/img.svg";
import arrouDown from "../../../assets/arrow-down.svg";
import Website from "./components/Website";
import Graphics from "./components/Graphics";

const Forms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [type, setType] = useState("Website Design");
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState<string | null>(null);

  //  const [image, setImage] = useState<File | null>();

  //  const photoInput: React.MutableRefObject<HTMLInputElement | null> =
  //    useRef(null);
  //  const handleValidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //    if (e.target.files && e.target.files.length > 0) {
  //      const file = e.target.files.item(0);
  //      setImage(file)
  //      // if (file instanceof File) {
  //      //   try {
  //      //     const downloadURL = await upload(file);
  //      //     console.log("File uploaded successfully:", downloadURL);
  //      //     setImage([downloadURL]);
  //      //   } catch (error) {
  //      //     console.error("Error uploading file:", error);
  //      //   }
  //      //   if (!file) return;
  //      // }
  //    }
  //  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setPage(searchParams.get("page"));
  }, [location.search]);

  useEffect(() => {
    if (page) {
      if (page === "1") {
        setType("Website Design");
      } else if (page === "2") {
        setType("Graphics and Flyer Design");
      } else if (page === "3") {
        setType("Logo Design");
      }
      console.log(page);
    }
  }, [page]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const updateURLParams = (newParams: { [key: string]: string }) => {
    const searchParams = new URLSearchParams(location.search);
    Object.entries(newParams).forEach(([key, value]) => {
      searchParams.set(key, value);
    });
    navigate(`?${searchParams.toString()}`);
  };

  const options = [
    {
      label: "Website Design",
      onClick: () => updateURLParams({ page: "1" }),
      id: 1,
    },
    {
      label: "Graphics and Flyer Design",
      onClick: () => updateURLParams({ page: "2" }),
      id: 2,
    },
    {
      label: "Logo Design",
      onClick: () => updateURLParams({ page: "3" }),
      id: 3,
    },
  ];

  return (
    <>
      <div className="min-h-screen pb-[10%]">
        <div className="sticky top-0 w-fill">
          <TopNav title={"Projects"} />
        </div>

        <div className="p-[32px]">
          <div className="flex justify-start items-center gap-1">
            <Link
              to={"/project"}
              className="flex justify-start items-center gap-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91699 15.0003V5.83366C2.91699 2.50033 3.75033 1.66699 7.08366 1.66699H12.917C16.2503 1.66699 17.0837 2.50033 17.0837 5.83366V14.167C17.0837 14.2837 17.0837 14.4003 17.0753 14.517"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.29199 12.5H17.0837V15.4167C17.0837 17.025 15.7753 18.3333 14.167 18.3333H5.83366C4.22533 18.3333 2.91699 17.025 2.91699 15.4167V14.875C2.91699 13.5667 3.98366 12.5 5.29199 12.5Z"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66699 5.83301H13.3337"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66699 8.75H10.8337"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-[#808080] font-[500] text-[16px]">Projects</p>
            </Link>
            <img src={arrow} alt="" />
            <p className="text-[#808080] font-[500] text-[16px]">Add New</p>
            <img src={arrow} alt="" />
            <p className="text-dark font-[500] text-[16px]">{type}</p>
          </div>

          <div className="mt-4 flex justify-between w-full items-center mb-[32px]">
            <h1 className="text-[32px] text-dark font-[600]">{type}</h1>
            <div className="flex justify-end items-center gap-4">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="flex justify-center items-center gap-2 px-[32px] h-[32px] border-dark border-[2px] rounded-[4px] text-[12px] font-[600] text-dark"
                    onClick={handleToggle}
                  >
                    {type}
                    <img src={arrouDown} alt="" />
                  </button>
                </div>

                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            option.onClick();
                            setIsOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {type === "Website Design" && (
           <Website />
          )}

          {type === "Graphics and Flyer Design" && (
           <Graphics />
          )}
        </div>
      </div>
    </>
  );
};

export default Forms;
