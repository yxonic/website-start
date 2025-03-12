import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import _ from "lodash";

// define your extension array
const extensions = [StarterKit];

const Tiptap = (props: {
  content: string;
  setContent: (s: string) => void;
  setLoading: (b: boolean) => void;
}) => {
  const editor = useEditor({
    extensions,
    content: props.content,
    immediatelyRender: false,
  });

  editor?.on("create", () => props.setLoading(false));

  const setContent = _.throttle(props.setContent, 1000);

  editor?.on("update", () => {
    setContent(editor.getHTML());
  });

  return (
    <>
      <EditorContent className="outline-none" editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </>
  );
};

export default Tiptap;
