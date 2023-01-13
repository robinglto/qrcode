import React from "react";
import { useState } from "react";
import QRCode, { QRCodeProps } from "react-qr-code";

export default function Generator() {
  const [value, setValue] = useState<string>("https://robinglto.vercel.app/");
  return (
    <div className="flex justify-center mt-10">
      <div className="md:w-1/3 sm:w-2/4 sm:mx-0 mx-6 w-full ">
        <center>
          <div>
            <div>
              <input
                className="w-full bg-neutral-100 border-transparent  rounded-full border-2 ring-2  px-6 py-3 ring-neutral-200 text-base outline-none text-gray-400/90  resize-none  transition-colors duration-200 ease-in-out"
                type="text"
                onChange={(e) => setValue(e.target.value)}
                placeholder="https://"
              />
            </div>
            <span className="text-sm">Codigo QR De Contacto</span>
            <div className="mt-6 mb-14">
              {value && (
                <QRCode
                  value={value}
                  //   fgColor={"#f5f5f5"}
                  fgColor={"#ffffff"}
                  bgColor={"#27272a"}
                  size={180}
                />
              )}
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
