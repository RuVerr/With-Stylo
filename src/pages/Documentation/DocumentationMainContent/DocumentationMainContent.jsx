import React from "react";

import { documentationInformation } from "../../../Data/data";
import "./documentationMainContent.scss";
import { useDocsContent } from "../../../Store/DocumentationContent/DocumentationContentStore";
import TextCopyAndCopyButton from "../../../Components/textCopyAndCopyButton/TextCopyAndCopyButton";

export default function DocumentationMainContent() {
  const activeId = useDocsContent((state) => state.activeId);

  const activeElement = documentationInformation.find((el) => el.id === activeId);
  return (
    <section className="documentationMainContent">
      <div className="documentationContent">
        <div className="documentationContentInfo">
          <h2 className="documentationContentInfoTitle">{activeElement.prefix}</h2>
          <div className="pDocumentationContentMainInfo">
            <h3 className="documentationContentInfoSubtitle">{activeElement.argumentsTitle}</h3>
            <div className="argumentsBox">
              <p className="pDocumentationContentArguments">{activeElement.arguments}</p>
              <p className="pDocumentationContentArguments">{activeElement?.argumentsPart2}</p>
            </div>
          </div>
          <div className="documentationContentInfoMainExample">
            <h4 className="documentationContentInfoSubtitle">{activeElement.exampleTitle}</h4>
            <TextCopyAndCopyButton el={activeElement.example} />
          </div>
        </div>
      </div>
    </section>
  );
}
