"use client";

import uploadAuthenticator from "@/lib/uploadAuthenticator";
import { IKUpload, ImageKitProvider } from "imagekitio-next";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { Dispatch, forwardRef, SetStateAction, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { TProduct } from "../../types";

type TProps = {
  // form: UseFormReturn<TProduct, any, undefined>
  field: ControllerRenderProps<TProduct, `images.${number}`>;
  isUploading: boolean;
  setIsUploading: Dispatch<SetStateAction<boolean>>;
  onSuccess: (res: IKUploadResponse) => void;

  // ref: RefObject<HTMLInputElement>;
};
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const UploadImage = forwardRef<HTMLInputElement, TProps>(
  ({ setIsUploading, onSuccess }, ref) => {
    const [error, setError] = useState("");
    const onError = (err: any) => {
      console.log("Error", err);
      setError(err.message);
      setIsUploading(false);
    };
    const onUploadStart = () => {
      setError('')
      setIsUploading(true);
    };

    return (
      <ImageKitProvider
        urlEndpoint={urlEndpoint}
        publicKey={publicKey}
        authenticator={uploadAuthenticator}
      >
        {/* <div className="flex gap-10 items-center"> */}
        {/* <Label className="">Images:</Label> */}
        <IKUpload
          onError={onError}
          onSuccess={onSuccess}
          onUploadStart={onUploadStart}
          style={{ display: "none" }}
          ref={ref}
          folder="e-gadget"
          // {...field}
        />
        {/* {ref && (
            <Button
              type="button"
              onClick={() => ref?.current?.click()}
              disabled={isUploading}
            >
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          )} */}
        {/* </div> */}
        <div>{error && error}</div>
      </ImageKitProvider>
    );
  }
);

UploadImage.displayName = "UploadImage";
export default UploadImage;
