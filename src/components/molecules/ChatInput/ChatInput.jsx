import { Editor } from "@/components/atoms/Editor/Editor";

export const ChatInput = () => {
  async function handleSubmit({ body }) {
    console.log("body", body);
  }

  return (
    <div className="px-5 w-full">
      <Editor onSubmit={handleSubmit} />
    </div>
  );
};
