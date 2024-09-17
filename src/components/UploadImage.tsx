"use client";

import uploadAuthenticator from "@/lib/uploadAuthenticator";
import { IKUpload, ImageKitProvider } from "imagekitio-next";
import {
  Dispatch,
  forwardRef,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import { TProduct } from "../../types";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";

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
  ({ isUploading, setIsUploading, onSuccess }, ref) => {
    const onError = (err: any) => {
      console.log("Error", err);
    };
    const onUploadStart = () => {
      setIsUploading(true);
    };

    return (
      <ImageKitProvider
        urlEndpoint={urlEndpoint}
        publicKey={publicKey}
        authenticator={uploadAuthenticator}
      >
        <div className="flex gap-10 items-center">
          {/* <Label className="">Images:</Label> */}
          <IKUpload
            onError={onError}
            onSuccess={onSuccess}
            onUploadStart={onUploadStart}
            style={{ display: "none" }}
            ref={ref}
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
        </div>
      </ImageKitProvider>
    );
  }
);

export default UploadImage;
