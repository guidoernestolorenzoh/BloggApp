import { FileArrowUp } from "@gravity-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  Label,
  Modal,
  Surface,
  TextField,
  cn
} from "@heroui/react";
import { useRef, useState } from "react";
import TagInput from "./Inputs/TagInput";

const CreatePostModal = ({ className, nameButton, icon, headerTitle }) => {
  const fileInputRef = useRef(null);
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [images, setImages] = useState([]);
  const [postData, setPostData] = useState({
    id: "",
    author: {
      id: "",
      name: "",
      email: "",
      imageProfile: "",
      isAdmin: false,
      role: "",
    },
    timeAgo: "",
    title: "",
    excerpt:
      "",
    image:
      "",
    likes: "",
    comments: 0,
    shares: 0,
    tags: [],
  },)

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    handleUploadFile(e.target.files);
  };

  const handleValueChange = (key, value)=> {
    setPostData((prevData)=> ({...prevData, [key]:value}));
  }

  const handleUploadFile = (files) => {
    const filesUpload = Array.from(files);

    const newFiles = filesUpload.map((file) => ({
      id: crypto.randomUUID(),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setImages((prev) => [...prev, ...newFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleUploadFile(e.dataTransfer.files);
  };

  return (
    <Modal>
      <Button variant="secondary" className={className}>
        {icon}
        {nameButton}
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <div className="flex gap-4 items-center">
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  {icon}
                </Modal.Icon>
                <Modal.Heading className="text-xl">{headerTitle}</Modal.Heading>
              </div>
              <p className="mt-1.5 text-sm leading-5 text-muted text-justify">
                Llene el siguiente formulario para poder crear un nuevo post.
              </p>
            </Modal.Header>
            <Modal.Body>
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <TextField
                    className="w-full"
                    name="title"
                    type="text"
                    variant="secondary"
                  >
                    <Label>
                      Title <span className="text-red-500">*</span>
                    </Label>
                    <Input className="w-full transition-all rounded-full border border-gray-200 bg-white py-3.5 px-4 text-sm text-gray-700 dark:bg-zinc-900 dark:border dark:border-zinc-700 dark:text-gray-200 dark:outline-0"
                        placeholder="Enter a title for the post" />
                  </TextField>
                  <TextField>
                    <div
                      className={cn(
                        "rounded-lg border-2 border-dashed border-gray-400 p-[20px_16px] text-center h-auto",
                        isDragOver ? "bg-[#c4ccd4]" : "",
                      )}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <div className="flex justify-center flex-col gap-y-2 items-center">
                        <FileArrowUp
                          className="text-blue-900 dark:text-blue-400"
                          style={{ width: 45, height: 65 }}
                        />
                        <p className="font-medium flex flex-col dark:text-white">
                          <div className="flex">
                            <span className="text-blue-900 font-bold dark:text-blue-400">
                                Drag & Drop
                            </span>
                            <div className="mx-1">your files here</div>
                          </div>
                          <div className="mx-1 text-gray-500">Images uploaded: {images.length}</div>
                        </p>
                        <button
                          onClick={handleFileClick}
                          className="bg-zinc-200 cursor-pointer p-2 rounded-lg font-medium dark:bg-zinc-700"
                        >
                          Chose Files
                        </button>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          style={{ display: "none" }}
                          aria-label="Seleccionar archivos para subir"
                          multiple
                        />
                      </div>
                    </div>
                  </TextField>
                  <TextField className="w-full" name="post" variant="secondary">
                    <Label>
                      Post <span className="text-red-500">*</span>
                    </Label>
                    <InputGroup>
                      <InputGroup.TextArea
                        className="w-full rounded-2xl border bg-white py-3.5 px-4 text-sm text-gray-700 placeholder:text-gray-400 dark:bg-zinc-900 dark:border dark:border-zinc-700 dark:text-gray-200 dark:outline-0"
                        placeholder="Enter the content for the post"
                        rows={4}
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                      />
                    </InputGroup>
                  </TextField>
                  <TextField>
                    <TagInput tags={postData?.tags || []}
                        setTags={(data)=> {
                            handleValueChange("tags", data);
                        }}
                    />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer className="w-auto flex justify-between">
              <Button slot="close" variant="secondary" className="w-full">
                Cancel
              </Button>
              <Button slot="close" className="w-full">Post Article</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default CreatePostModal;
