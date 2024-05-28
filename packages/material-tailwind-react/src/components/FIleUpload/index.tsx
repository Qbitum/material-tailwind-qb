import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "../Dialog";
import Button from "../Button";

export interface FileUploadProps {
  open: boolean;
  onClose: () => void;
  onUpload: (files: FileList | null) => void;
  title?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ open, onClose, onUpload, title = "Upload Files" }) => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = () => {
    onUpload(selectedFiles);
    onClose();
  };

  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>{title}</DialogHeader>
      <DialogBody>
        <input type="file" onChange={handleFileChange} multiple />
      </DialogBody>
      <DialogFooter>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleUpload} disabled={!selectedFiles}>Upload</Button>
      </DialogFooter>
    </Dialog>
  );
};

export default FileUpload;
