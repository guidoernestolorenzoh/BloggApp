import { EmptyState, Input, Label, Tag, TagGroup, TextField } from "@heroui/react";
import { useState } from "react";

const TagInput = ({ tags, setTags }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      const newTag = input.trim();

      if (!tags.some((t) => t.name === newTag)) {
        setTags([...tags, { id: crypto.randomUUID(), name: newTag }]);
      }
      setInput("");
    } else if (e.key === "Backspace" && !input && tags.length) {
      setTags(tags.slice(0, -1));
    }
  };

  const onRemoveTags = (keys) => {
    setTags(tags.filter((tag) => !keys.has(tag.id)));
  };
  return (
    <div className="flex flex-col gap-2">
      <TagGroup selectionMode="multiple" onRemove={onRemoveTags}>
        <TagGroup.List
          items={tags}
          renderEmptyState={() => (
            <EmptyState className="p-1">No hay etiquetas</EmptyState>
          )}
        >
          {(tag) => (
            <Tag id={tag.id} textValue={tag.name}>
              {tag.name}
            </Tag>
          )}
        </TagGroup.List>
      </TagGroup>

      <TextField
        className="w-full"
        name="tag"
        type="text"
        variant="secondary"
      >
        <Label>
          Tags
        </Label>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="inputs-rounded"
          placeholder="Enter a title for the post"
          onKeyDown={handleKeyDown}
        />
      </TextField>
      <TextField></TextField>
    </div>
  );
};

export default TagInput;