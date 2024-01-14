'use client';

import React from 'react';

import type { FileWithPath } from '@uploadthing/react';
import {
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';

import { generateClientDropzoneAccept } from 'uploadthing/client';
import { useDropzone } from '@uploadthing/react/hooks';
import { Button } from '~/components/ui/button';
import { convertFileToUrl } from '~/lib/utils';

export default function FileUploader({
  imageUrl,
  onFieldChange,
  setFiles,
}: {
  imageUrl: string;
  onFieldChange: (values: string) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
}) {
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFiles(acceptedFiles);
      onFieldChange(convertFileToUrl(acceptedFiles[0]));
    },
    [],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
      ? generateClientDropzoneAccept(['image/*'])
      : undefined,
  });

  return (
    <div
      {...getRootProps()}
      className="flex-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-grey-50"
    >
      <input
        {...getInputProps()}
        className="cursor-pointer"
      />

      {imageUrl ? (
        <div className="flex h-full w-full flex-1 justify-center ">
          <img
            src={imageUrl}
            alt="image"
            width={250}
            height={250}
            className="w-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="flex-center flex-col py-5 text-grey-500">
          <img
            src="/assets/icons/upload.svg"
            width={77}
            height={77}
            alt="file upload"
          />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full">
            Select Image
          </Button>
        </div>
      )}
    </div>
  );
}
