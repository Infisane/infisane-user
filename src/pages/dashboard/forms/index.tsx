/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import TopNav from "../../../components/TopNav";
import arrow from "../../../assets/arrow-right.svg";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import img from "../../../assets/img.svg";

const Forms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [type, setType] = useState("Website Design");
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState<string | null>(null);

   const [image, setImage] = useState<string[]>([]);

   const photoInput: React.MutableRefObject<HTMLInputElement | null> =
     useRef(null);
   const handleValidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
     if (e.target.files && e.target.files.length > 0) {
       const file = e.target.files.item(0);
       // if (file instanceof File) {
       //   try {
       //     const downloadURL = await upload(file);
       //     console.log("File uploaded successfully:", downloadURL);
       //     setImage([downloadURL]);
       //   } catch (error) {
       //     console.error("Error uploading file:", error);
       //   }
       //   if (!file) return;
       // }
     }
   };

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
            <div className="grid grid-cols-2 h-full w-full gap-[24px]">
              <div className="bg-[#FAFAFA] rounded-[8px] p-[24px]">
                <p className="text-[#141417] font-[500] pb-[12px]">
                  Basic Information
                </p>
                <form
                  action=""
                  className="flex flex-col gap-[24px] w-full items-start"
                >
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Company Name"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Description of your business"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Primary goals for the website"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Project Challenge"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Project Objective"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />

                  <div className="flex justify-between w-full items-center gap-[24px]">
                    <input
                      type="text"
                      className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                      placeholder="Target audience"
                      style={{
                        boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                      }}
                    />
                    <input
                      type="text"
                      className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                      placeholder="Preferred colors and style"
                      style={{
                        boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                      }}
                    />
                  </div>

                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Any specific functionalities (e.g., e-commerce, blog, contact form)"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />

                  <div className="flex justify-between w-full items-center gap-[24px]">
                    <input
                      type="text"
                      className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                      placeholder="Examples of websites"
                      style={{
                        boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                      }}
                    />
                    <input
                      type="text"
                      className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                      placeholder="Number of pages needed"
                      style={{
                        boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                      }}
                    />
                  </div>

                  <div className="w-full">
                    <input
                      type="file"
                      required
                      className="hidden"
                      ref={photoInput}
                      onChange={handleValidChange}
                    />
                    <div
                      className="border-[2px] border-dashed border-[#232321] rounded-[8px] px-8 w-full flex flex-col justify-center items-center cursor-pointer py-[26px]"
                      onClick={() => {
                        if (photoInput.current) {
                          photoInput.current.click();
                        }
                      }}
                    >
                      {image.length < 1 ? (
                        <>
                          <img src={img} alt="" />
                          <p className="text-[#929FA5] text-center">
                            Drop your image here, or{" "}
                            <span className="text-primary">Browse</span> <br />
                            Jpeg, png are allowed
                          </p>
                        </>
                      ) : (
                        <p className="text-green-400">
                          File uploaded successfully!
                        </p>
                      )}
                    </div>
                  </div>

                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Domain name and hosting details (if already available)"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />
                </form>
              </div>
              <div className="flex justify-between flex-col items-end">
                <div className="flex justify-center flex-col gap-[24px] w-full">
                  <div className="bg-[#FAFAFA] rounded-[8px] p-[24px] w-full">
                    <p className="text-[#141417] font-[500] pb-[12px]">
                      Technical Details{" "}
                    </p>
                    <form
                      action=""
                      className="flex flex-col gap-[24px] w-full items-start"
                    >
                      <input
                        type="text"
                        className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                        placeholder="Preferred content management system (if any)"
                        style={{
                          boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                        }}
                      />
                      <div className="flex justify-between w-full items-center gap-[24px]">
                        <input
                          type="text"
                          className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                          placeholder="SEO requirements"
                          style={{
                            boxShadow:
                              "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                          }}
                        />
                        <input
                          type="text"
                          className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                          placeholder="Social media integration"
                          style={{
                            boxShadow:
                              "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                          }}
                        />
                      </div>
                      <input
                        type="text"
                        className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                        placeholder="Payment gateway preferences (for e-commerce)"
                        style={{
                          boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                        }}
                      />{" "}
                      <input
                        type="text"
                        className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                        placeholder="Additional notes or requirements"
                        style={{
                          boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                        }}
                      />
                    </form>
                  </div>

                  <div className="bg-[#FAFAFA] rounded-[8px] p-[24px] w-full">
                    <p className="text-[#141417] font-[500] pb-[12px]">
                      Contact Information
                    </p>
                    <form
                      action=""
                      className="flex flex-col gap-[24px] w-full items-start"
                    >
                      <input
                        type="text"
                        className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                        placeholder="Name"
                        style={{
                          boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                        }}
                      />
                      <input
                        type="email"
                        className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                        placeholder="Email"
                        style={{
                          boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                        }}
                      />{" "}
                      <input
                        type="tel"
                        className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                        placeholder="Phone"
                        style={{
                          boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                        }}
                      />
                    </form>
                  </div>
                </div>

                <div className="flex justify-end items-center gap-4">
                  <button className="flex justify-center items-center gap-2 px-[32px] h-[48px] w-[200px] border-dark border-[2px] rounded-[8px]">
                    <p className="text-[14px] font-[500] text-[#8B909A]">
                      Cancel
                    </p>
                  </button>
                  <button className="flex justify-center items-center gap-2 px-[32px] h-[48px] w-[200px] bg-dark rounded-[8px]">
                    <p className="text-[14px] font-[500] text-white">Submit</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {type === "Graphics and Flyer Design" && (
            <div className="grid grid-cols-2 h-full w-full gap-[24px]">
              <div className="bg-[#FAFAFA] rounded-[8px] p-[24px]">
                <p className="text-[#141417] font-[500] pb-[12px]">
                  Basic Information
                </p>
                <form
                  action=""
                  className="flex flex-col gap-[24px] w-full items-start"
                >
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Event/Promotion Name"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Description of the event/promotion"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />

                  <div className="flex justify-between w-full items-center gap-[24px]">
                    <input
                      type="date"
                      className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                      placeholder="Date"
                      style={{
                        boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                      }}
                    />
                    <input
                      type="text"
                      className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                      placeholder="Location"
                      style={{
                        boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                      }}
                    />
                  </div>

                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Target audience"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />

                  <div className="flex justify-between w-full items-center gap-[24px]">
                    <input
                      type="text"
                      className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                      placeholder="Preferred colors and style"
                      style={{
                        boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                      }}
                    />
                    <input
                      type="text"
                      className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                      placeholder="Text to be on the flyer"
                      style={{
                        boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                      }}
                    />
                  </div>

                  <div className="w-full">
                    <input
                      type="file"
                      required
                      className="hidden"
                      ref={photoInput}
                      onChange={handleValidChange}
                    />
                    <div
                      className="border-[2px] border-dashed border-[#232321] rounded-[8px] px-8 w-full flex flex-col justify-center items-center cursor-pointer py-[26px]"
                      onClick={() => {
                        if (photoInput.current) {
                          photoInput.current.click();
                        }
                      }}
                    >
                      {image.length < 1 ? (
                        <>
                          <img src={img} alt="" />
                          <p className="text-[#929FA5] text-center">
                            Drop your image here, or{" "}
                            <span className="text-primary">Browse</span> <br />
                            Jpeg, png are allowed
                          </p>
                        </>
                      ) : (
                        <p className="text-green-400">
                          File uploaded successfully!
                        </p>
                      )}
                    </div>
                  </div>

                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Examples of flyers you like"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />

                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Additional notes"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  />
                </form>
              </div>
              <div className="flex justify-between flex-col items-end">
                <div className="bg-[#FAFAFA] rounded-[8px] p-[24px] w-full">
                  <p className="text-[#141417] font-[500] pb-[12px]">
                    Contact Information
                  </p>
                  <form
                    action=""
                    className="flex flex-col gap-[24px] w-full items-start"
                  >
                    <input
                      type="text"
                      className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                      placeholder="Name"
                      style={{
                        boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                      }}
                    />
                    <input
                      type="email"
                      className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                      placeholder="Email"
                      style={{
                        boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                      }}
                    />{" "}
                    <input
                      type="tel"
                      className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                      placeholder="Phone"
                      style={{
                        boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                      }}
                    />
                  </form>
                </div>

                <div className="flex justify-end items-center gap-4">
                  <button className="flex justify-center items-center gap-2 px-[32px] h-[48px] w-[200px] border-dark border-[2px] rounded-[8px]">
                    <p className="text-[14px] font-[500] text-[#8B909A]">
                      Cancel
                    </p>
                  </button>
                  <button className="flex justify-center items-center gap-2 px-[32px] h-[48px] w-[200px] bg-dark rounded-[8px]">
                    <p className="text-[14px] font-[500] text-white">Submit</p>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Forms;
