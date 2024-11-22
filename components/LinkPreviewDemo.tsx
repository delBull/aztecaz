"use client";
import React from "react";
import { LinkPreview } from "./ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="tw-flex tw-justify-center tw-items-center tw-min-h-[40rem] tw-px-4">
      <div className="tw-flex tw-flex-col tw-space-y-8 tw-max-w-7xl">
        <div className="aztec-heading tw-inline-block">
          En Aztecaz,{" "}
          <LinkPreview 
            url="https://aztecaz.com" 
            className="tw-font-black hover:tw-text-neutral-800 tw-transition-colors"
          >
            aspiramos a revolucionar el panorama inmobiliario
          </LinkPreview>{" "}
          en México. Nuestro gran propósito es convertirnos en el{" "}
          <LinkPreview 
            url="https://aztecaz.com/about" 
            className="tw-font-black hover:tw-text-neutral-800 tw-transition-colors"
          >
            pionero de la tokenización de activos
          </LinkPreview>
          , desafiando las limitadas oportunidades que actualmente enfrenta nuestra comunidad. 
          Estamos aquí para{" "}
          <LinkPreview
            url="https://aztecaz.com/services"
            className="tw-font-black aztec-gradient"
          >
            transformar la forma en que se invierte en bienes raíces
          </LinkPreview>
          , brindando nuevas y emocionantes posibilidades a todos.
        </div>
      </div>
    </div>
  );
}