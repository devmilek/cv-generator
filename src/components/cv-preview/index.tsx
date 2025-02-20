"use client";

import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button } from "../ui/button";
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import PdfExample from "./pdf";

const CVPreview = () => {
  return (
    <div className="relative size-full border-l drop-shadow-2xl">
      <TransformWrapper
        centerOnInit={true}
        smooth={true}
        initialScale={0.7}
        minScale={0.3}
        maxScale={1}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <TransformComponent wrapperClass="!w-full !h-screen relative">
              <PdfExample />
            </TransformComponent>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white p-1 rounded-lg space-x-1 border">
              <Button size="icon" variant="ghost" onClick={() => zoomIn()}>
                <ZoomIn />
              </Button>
              <Button size="icon" variant="ghost" onClick={() => zoomOut()}>
                <ZoomOut />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => resetTransform()}
              >
                <RotateCcw />
              </Button>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default CVPreview;
