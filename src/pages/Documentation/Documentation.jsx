import React from "react";
import DocumentationBar from "./DocumentationBar/DocumentationBar";
import DocumentationMainContent from "./DocumentationMainContent/DocumentationMainContent";

import "./documentation.scss";

export default function Documentation() {
  return (
    <main className="documentationMain">
      <DocumentationBar />
      <DocumentationMainContent />
    </main>
  );
}
