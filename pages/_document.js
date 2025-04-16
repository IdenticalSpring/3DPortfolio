// pages/_document.js
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Run the rendering method with the style sheet instance
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      // Extract the initial props that may include the styles
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        // Inject the extracted styles into the head
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      // Seal the stylesheet to prevent memory leaks
      sheet.seal();
    }
  }
}
