/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { getUser, selectNotification } from "../../../../lib/useUser";
import { useAPI } from "../../../../lib/useApi";
import { useAppToast } from "../../../../lib/useAppToast";

const Notification = () => {
  const { useAPIMutation, useQuery, queryClient } = useAPI();
  const toast = useAppToast();
  const [isEmail, setIsEmail] = useState(false);
  const [isText, setIsText] = useState(false);

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  useEffect(() => {
    if (user && user?.data?.emailNotifications) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  }, [user]);

  const handleTextChange = () => {
    setIsText(!isText);
  };

  const update = useAPIMutation({
    mutationFunction: (x: any) => selectNotification(x.emailNotifications),
    onSuccessFn: (data) => {
      toast({
        status: "success",
        description: data?.message || "Application Successful",
      });
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["user"] }).then(() => {
        queryClient.refetchQueries({
          queryKey: ["user"],
          type: "active",
        });
      });
    },
    //@ts-ignore
    onErrorFn: () => {},
  });

  const onSubmit = (e: { preventDefault: () => void }, mail:boolean) => {
    e.preventDefault();
    update.mutate({
      emailNotifications: mail,
    });
  };

const handleEmailChange = (e: any) => {
  const newIsEmail = !isEmail; // Toggle the current state first
  setIsEmail(newIsEmail); // Update the state
  onSubmit(e, newIsEmail); // Pass the updated state to onSubmit
};

  console.log(isEmail)

  return (
    <>
      <div>
        <div className="pb-[24px] relativez-0">
          <h1 className="text-[#141417] text-[20px] font-[600] ">
            Notification preferences{" "}
          </h1>
          <p className="text-[#4F4E59]">
            Manage and update how you receive notifications.{" "}
          </p>
        </div>

        <div>
          <p className="text-[18px] font-[500] text-[#141417] mb-4">
            General notifications
          </p>

          <div className="flex flex-col items-start w-[500px] gap-4">
            <div className="flex justify-start items-start gap-4">
              <div>
                <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#2CDB86] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#2CDB86] checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12]  focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-[#2CDB86] checked:focus:bg-[#2CDB86] checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-green dark:checked:after:bg-green dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)]"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={isEmail}
                  onChange={(e) => handleEmailChange(e)}
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="font-[500] text-[#2B2A31]">Email notifications</p>
                <p className="text-[14px] text-[#83818E]">
                  We will send updates associated with your role to the email
                  address associated with your account.{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div>
                <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#2CDB86] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#2CDB86] checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12]  focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-[#2CDB86] checked:focus:bg-[#2CDB86] checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-green dark:checked:after:bg-green dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)]"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={isText}
                  onChange={handleTextChange}
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <p className="font-[500] text-[#2B2A31]">Text message</p>
                <p className="text-[14px] text-[#83818E]">
                  We will send you sensitive updates and activities regarding
                  your role.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
