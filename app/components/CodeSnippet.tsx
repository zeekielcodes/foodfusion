"use client"

import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import React, { useEffect } from 'react';

export default function CodeSnippet({language, code}:{language:string, code:string}) {
    useEffect(() => {
        // Call Prism.highlightAll() after rendering to apply syntax highlighting
        Prism.highlightAll();
      }, []);
  return (
    <pre className="bg-gray-100 p-2 md:p-4 rounded-md overflow-x-auto whitespace-pre-wrap max-h-[700px] overflow-y-auto">
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  )
}
