import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MDBlock(props: {content: string}) {
    return (
        <Markdown remarkPlugins={[remarkGfm]}>
            {props.content}
        </Markdown>
    )
}

export default MDBlock;