/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useRef } from "react";
import img from "../../../../assets/img.svg";
import { createGraphics } from "../../../../lib/useUser";
import { useAPI } from "../../../../lib/useApi";
import { useAppToast } from "../../../../lib/useAppToast";

const Graphics = () => {
  const { useAPIMutation } = useAPI();
  const toast = useAppToast();

  const [image, setImage] = useState<File | null>();
  // const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [eventPromotionName, setEventPromotionName] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [preferredColorsStyle, setPreferredColorsStyle] = useState("");
  const [textOnFlyer, setTextOnFlyer] = useState("");
  const [exampleFlyers, setExampleFlyers] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [loading, setLoading] = useState(false);

  const photoInput: React.MutableRefObject<HTMLInputElement | null> =
    useRef(null);

  const handleValidChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files.item(0);
      setImage(file);
    }
  };

  const update = useAPIMutation({
    mutationFunction: (x: any) => createGraphics(x.data),
    onSuccessFn: (data) => {
      setLoading(false);
      toast({
        status: "success",
        description: data?.message || "Application Successful",
      });
      console.log(data);
    },
    //@ts-ignore
    onErrorFn: () => {
      setLoading(false);
    },
  });

  const handleCreateGraphics = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);


    const formData = new FormData();
    formData.append("clientName", clientName);
    formData.append("clientEmail", clientEmail);
    formData.append("projectType", "Graphics and Flyer Design");
    formData.append("phoneNumber", phoneNumber);
    formData.append("description", description);
    formData.append("eventPromotionName", eventPromotionName);
    formData.append("targetAudience", targetAudience);
    formData.append("date", date);
    formData.append("location", location);
    formData.append("preferredColorsStyle", preferredColorsStyle);
    formData.append("textOnFlyer", textOnFlyer);
    formData.append("exampleFlyers", exampleFlyers);
    formData.append("additionalNotes", additionalNotes);

    if (image) {
      console.log("Appending image:", image);
      formData.append("image", image);
    } else {
      console.warn("No image to append");
    }

    update.mutate({
      data: formData,
    });
  };

  return (
    <>
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
              value={eventPromotionName}
              onChange={(e) => setEventPromotionName(e.target.value)}
            />
            <input
              type="text"
              className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
              placeholder="Description of the event/promotion"
              style={{
                boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
              }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="flex justify-between w-full items-center gap-[24px]">
              <input
                type="date"
                className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                placeholder="Date"
                style={{
                  boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="text"
                className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                placeholder="Location"
                style={{
                  boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                }}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <input
              type="text"
              className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
              placeholder="Target audience"
              style={{
                boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
              }}
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
            />

            <div className="flex justify-between w-full items-center gap-[24px]">
              <input
                type="text"
                className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                placeholder="Preferred colors and style"
                style={{
                  boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                }}
                value={preferredColorsStyle}
                onChange={(e) => setPreferredColorsStyle(e.target.value)}
              />
              <input
                type="text"
                className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                placeholder="Text to be on the flyer"
                style={{
                  boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                }}
                value={textOnFlyer}
                onChange={(e) => setTextOnFlyer(e.target.value)}
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
                {!image ? (
                  <>
                    <img src={img} alt="" />
                    <p className="text-[#929FA5] text-center">
                      Drop your image here, or{" "}
                      <span className="text-primary">Browse</span> <br />
                      Jpeg, png are allowed
                    </p>
                  </>
                ) : (
                  <p className="text-green-400">File uploaded successfully!</p>
                )}
              </div>
            </div>

            <input
              type="text"
              className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
              placeholder="Examples of flyers you like (Please separate with commas)"
              style={{
                boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
              }}
              value={exampleFlyers}
              onChange={(e) => setExampleFlyers(e.target.value)}
            />

            <input
              type="text"
              className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
              placeholder="Additional notes"
              style={{
                boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
              }}
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
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
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <input
                type="email"
                className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                placeholder="Email"
                style={{
                  boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                }}
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
              />{" "}
              <input
                type="tel"
                className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                placeholder="Phone"
                style={{
                  boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                }}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </form>
          </div>

          <div className="flex justify-end items-center gap-4">
            <button className="flex justify-center items-center gap-2 px-[32px] h-[48px] w-[200px] border-dark border-[2px] rounded-[8px]">
              <p className="text-[14px] font-[500] text-[#8B909A]">Cancel</p>
            </button>
            <button
              className="flex justify-center items-center gap-2 px-[32px] h-[48px] w-[200px] bg-dark rounded-[8px] text-[14px] font-[500] text-white"
              onClick={(e) => handleCreateGraphics(e)}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              )}
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graphics;
