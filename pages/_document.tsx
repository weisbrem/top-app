import Document, { DocumentContext, DocumentInitialProps, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initianProps = await Document.getInitialProps(ctx);

    return {
      ...initianProps,
    };
  }

  render(): JSX.Element {
    return (
      <html lang='ru'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
