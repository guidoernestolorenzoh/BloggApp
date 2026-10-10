import { EmptyState, Tag, TagGroup } from "@heroui/react";
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
            <Tag id={tag.id} textValue={tag.name} >
              {tag.name}
            </Tag>
          )}
        </TagGroup.List>        
      </TagGroup>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escriba y presione Enter o coma"
        className="w-full transition-all rounded-full border border-gray-200 bg-white py-3.5 px-4 text-sm text-gray-700 dark:bg-zinc-900 dark:border dark:border-zinc-700 dark:text-gray-200 dark:outline-0"
      />
    </div>
  );
};

export default TagInput;
