import React from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard";
import { Toaster, toast } from 'react-hot-toast';

function CopyElement({ data, setData }){
  
// const [value, setValue] = useState("");

  const handleCopy = () => {
    toast.success('Text copied to clipboard');
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />

      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <CopyToClipboard text={data} onCopy={handleCopy}>
        <button>Copy to Clipboard</button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyElement;
