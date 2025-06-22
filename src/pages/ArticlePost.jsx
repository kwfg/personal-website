import { useParams , useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // 
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../css/markdown.css";

function ArticlePost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then((res) => {
        // always return status 200 , but the content not must be correct
        return res.text();
      })
      .then(text => {
        // if HTML then redirect
        if (text.startsWith("<!DOCTYPE html>")) {
          // if index.html instead of .md，redirect 404
          navigate("/404", { replace: true });
        } else {
          setContent(text);
        }
      })
      .catch(() => {
        navigate("/404", { replace: true });
      });
  }, [slug, navigate]);

  return (
    <div className="article-post">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // github markdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
}

export default ArticlePost;
