import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Button } from "../button";
import { InputBox, SelectBox } from "../input/input";

const HireTutor = () => {
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");

  const [subject, setSubject] = useState("");

  const options = [
    { value: "bangla", label: "Bangla" },
    { value: "english", label: "English" },
    { value: "math", label: "Math" },
  ];

  const handleTutor = () => {
    if (!topic || !date || !subject) {
      toast.error("Fill up all fields");
      return;
    }
    toast.loading("waiting for response");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen relative overflow-hidden">
        <div className="phase2-wave absolute top-0 flex flex-wrap justify-center items-center ">
          <div className="form-modal min-w-xs z-20 -mt-8 select-none">
            <h1 className="text-right font-bold text-error cursor-pointer">
              X
            </h1>
            <h1 className="text-primaryDark text-xl mx-4">Hiring The Tutor</h1>
            <div className="mx-9 my-4 flex flex-col items-center min-w-xs">
              <SelectBox
                options={options}
                defaultValue={subject}
                onChange={(e) => setSubject(e.value)}
                placeholder="Subject"
              />

              <InputBox
                onChange={(e) => setTopic(e.target.value)}
                type="text"
                placeholder="Topic"
              />
              <InputBox
                onChange={(e) => setDate(e.target.value)}
                type="datetime-local"
                placeholder="Date"
              />
              {/* <InputBox
                onChange={(e) => setFrom(e.target.value)}
                type="text"
                placeholder="From"
              /> */}
              <div className="flex my-3"></div>

              <h1 // icon={ArrowDown}
                className="drop-shadow-md select-none  p-2 mb-4 text-primaryDark border rounded-3xl"
              >
                1 Hour 30 minutes
              </h1>
              <p className="text-justify text-xs text-primaryLight ">
                Online Classroom link will be provided{" "}
                <b className="text-primaryDark"> 30 Minutes</b> before the
                Class.
              </p>

              <Button
                icon="uil uil-check-circle"
                onClick={handleTutor}
                className="drop-shadow-md mt-4  p-2 mb-4 text-white bg-primaryDark border rounded-lg"
                label="Confirm "
              ></Button>
              <Toaster position="bottom-right" reverseOrder={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireTutor;
