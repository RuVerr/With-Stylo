import React from "react";

const installText = [
  {
    title: "For Vanilla Projects",
    subTitle: "Install the package",
    text: "npm install with-stylo",
    className: "installVanilla"
  },
  {
    subTitle: "Compile your SCSS files with the correct load path",
    text: "npx sass --watch your-file.scss:your-file.css --load-path=node_modules"
  },
  {
    subTitle: "Import With Stylo in your SCSS file",
    text: `@use "with-stylo" as *`
  },
  {
    subTitle: `Install the With Stylo Snippets extension in your editor and use the prefix "with".`,
    textLinkTitle: "With Stylo Snippets",
    textLink: "https://marketplace.visualstudio.com/items?itemName=rubovermishyan.with-stylo-snippets"
  },
  {
    title: "For Webpack Projects",
    subTitle: "Install With Stylo",
    text: "npm install with-stylo",
    className: "installWebpack"
  },
  {
    subTitle: "Install Sass/SCSS support",
    text: "npm install sass --save-dev"
  },
  {
    subTitle: "Optional SCSS config",
    text: `css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use with-stylo as *"
        }
      }
    }`
  },
  {
    subTitle: "Import With Stylo in your SCSS file",
    text: '@use "with-stylo" as *;'
  },
  {
    subTitle: `Install the With Stylo Snippets extension in your editor and use the prefix "with".`,
    textLinkTitle: "With Stylo Snippets",
    textLink: "https://marketplace.visualstudio.com/items?itemName=rubovermishyan.with-stylo-snippets"
  }
];

import "./install.scss";
import TextCopyAndCopyButton from "../../Components/textCopyAndCopyButton/TextCopyAndCopyButton";

export default function Install() {
  return (
    <main>
      <section className="install">
        <div className="container">
          <div className="installContent">
            {installText.map((el, i) => (
              <div key={i} className="installTextMain">
                <h2 className="installTitle">{el?.title}</h2>
                <h3 className="installSubtitle">{el.subTitle}</h3>
                {el.text && <TextCopyAndCopyButton el={el.text} trueCopy={true} />}
                {el.textLinkTitle && (
                  <TextCopyAndCopyButton el={el?.textLinkTitle} trueCopy={false} linkTo={el?.textLink} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
