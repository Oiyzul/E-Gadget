"use client";

import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

//@ts-ignore
const Image = (props: any) => {
  return <IKImage urlEndpoint={urlEndpoint} {...props} />;
};

export default Image;
