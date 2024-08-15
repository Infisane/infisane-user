/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useRef } from "react";
import img from "../../../../assets/img.svg";
import { createWebsite } from "../../../../lib/useUser";
import { useAPI } from "../../../../lib/useApi";
import { useAppToast } from "../../../../lib/useAppToast";

const Website = () => {
  const { useAPIMutation } = useAPI();
  const toast = useAppToast();

  const [image, setImage] = useState<File | null>();
  const [projectName, setProjectName] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [primaryGoals, setPrimaryGoals] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [preferredColorsStyle, setPreferredColorsStyle] = useState("");
  const [functionalities, setFunctionalities] = useState("");
  const [exampleWebsites, setExampleWebsites] = useState("");
  const [noOfPages, setNoOfPages] = useState("");
  const [domainHostingDetails, setDOmainHostingDetails] = useState("");
  const [cms, setCms] = useState("");
  const [seoRequirements, setSeoRequirements] = useState("");
  // const [socialMediaIntegration, setSocialMediaIntegration] = useState("");
  const [paymentGatewayPreferences, setPaymentGatewayPreferences] =
    useState("");
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
    mutationFunction: (x: any) => createWebsite(x.data),
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

  const handleCreateWebsite = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("clientName", clientName);
    formData.append("projectType", 'Website Design');
    formData.append("projectName", projectName);
    formData.append("clientEmail", clientEmail);
    formData.append("phoneNumber", phoneNumber);
    formData.append("description", description);
    formData.append("company", company);
    formData.append("primaryGoals", primaryGoals);
    formData.append("targetAudience", targetAudience);
    formData.append("preferredColorsStyle", preferredColorsStyle);
    formData.append("functionalities", functionalities);
    formData.append("exampleWebsites", exampleWebsites);
    formData.append("noOfPages", noOfPages);
    formData.append("domainHostingDetails", domainHostingDetails);
    formData.append("cms", cms);
    formData.append("seoRequirements", seoRequirements);
    formData.append("paymentGatewayPreferences", paymentGatewayPreferences);
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
              placeholder="Company Name"
              style={{
                boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
              }}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="text"
              className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
              placeholder="Enter project name"
              style={{
                boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
              }}
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <input
              type="text"
              className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
              placeholder="Description of your business"
              style={{
                boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
              }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
              placeholder="Primary goals for the website"
              style={{
                boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
              }}
              value={primaryGoals}
              onChange={(e) => setPrimaryGoals(e.target.value)}
            />
            {/* <input
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
              /> */}

            <div className="flex justify-between w-full items-center gap-[24px]">
              <input
                type="text"
                className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                placeholder="Target audience"
                style={{
                  boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                }}
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
              />
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
            </div>

            <input
              type="text"
              className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
              placeholder="Any specific functionalities (e.g., e-commerce, blog, contact form)"
              style={{
                boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
              }}
              value={functionalities}
              onChange={(e) => setFunctionalities(e.target.value)}
            />

            <div className="flex justify-between w-full items-center gap-[24px]">
              <input
                type="text"
                className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                placeholder="Examples of websites (Please separate with commas)"
                style={{
                  boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                }}
                value={exampleWebsites}
                onChange={(e) => setExampleWebsites(e.target.value)}
              />
              <input
                type="text"
                className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                placeholder="Number of pages needed"
                style={{
                  boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                }}
                value={noOfPages}
                onChange={(e) => setNoOfPages(e.target.value)}
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
              placeholder="Domain name and hosting details (if already available)"
              style={{
                boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
              }}
              value={domainHostingDetails}
              onChange={(e) => setDOmainHostingDetails(e.target.value)}
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
                  value={cms}
                  onChange={(e) => setCms(e.target.value)}
                />
                {/* <div className="flex justify-between w-full items-center gap-[24px]"> */}
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="SEO requirements"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                    value={seoRequirements}
                    onChange={(e) => setSeoRequirements(e.target.value)}
                  />
                  {/* <input
                    type="text"
                    className="w-1/2 h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                    placeholder="Social media integration"
                    style={{
                      boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                    }}
                  /> */}
                {/* </div> */}
                <input
                  type="text"
                  className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                  placeholder="Payment gateway preferences (for e-commerce)"
                  style={{
                    boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                  }}
                  value={paymentGatewayPreferences}
                  onChange={(e) => setPaymentGatewayPreferences(e.target.value)}
                />{" "}
                <input
                  type="text"
                  className="w-full h-[52px] rounded-[4px] px-[8px] text-[14px] font-[500]"
                  placeholder="Additional notes or requirements"
                  style={{
                    boxShadow: "inset 0px 0px 4px rgba(131, 129, 142, 1)",
                  }}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
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
          </div>

          <div className="flex justify-end items-center gap-4">
            <button className="flex justify-center items-center gap-2 px-[32px] h-[48px] w-[200px] border-dark border-[2px] rounded-[8px]">
              <p className="text-[14px] font-[500] text-[#8B909A]">Cancel</p>
            </button>
            <button
              className="flex justify-center items-center gap-2 px-[32px] h-[48px] w-[200px] bg-dark rounded-[8px] text-[14px] font-[500] text-white"
              onClick={(e) => handleCreateWebsite(e)}
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

export default Website;
