import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button, Textarea } from '@mantine/core';
import "@uiw/react-textarea-code-editor/dist.css";
import prettify from 'html-prettify';

const Editor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
  loading: () => null,
});

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

const initialValue =
  prettify('<p>Your initial <b>html value</b> or an empty string to init editor without value</p>');

function Demo() {
  const [codeView, setCodeView] = useState(true);
  const [value, setValue] = useState(initialValue);

  const toggleCodeView = () => {
    setValue(prettify(value));
    setCodeView(!codeView)
  };
  const onChange = (newValue) => {
    setValue(newValue);
  }
  return (
    <div style={{ width: 800, height: 600, margin: '50px auto' }}>
      <Button onClick={toggleCodeView} style={{ marginBottom: 20 }} variant={"outline"}>Code view</Button>
      {
        codeView
          ? <CodeEditor
            value={value}
            language="html"
            placeholder="Please enter html"
            onChange={(evn) => setValue(evn.target.value)}
            padding={15}
            style={{
              fontSize: 12,
              backgroundColor: "rba(0,0,0,0.7)",
              border: '1px solid #ddd',
              height: 600,
              borderRadius: 6,
              fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
          />
          : <Editor value={value} onChange={onChange} style={{ height: 600 }} />
      }
    </div>
  );
}

export default function Index() {
  return <Demo />;
}