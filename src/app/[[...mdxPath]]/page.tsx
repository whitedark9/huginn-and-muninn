import { generateStaticParamsFor, importPage } from "nextra/pages";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props?: any) {
  const { mdxPath } = await props.params;
  const { metadata } = await importPage(mdxPath);

  return {
    title: metadata.title || "MKRI",
    description: metadata.description || "Medical knowledges for Ri",
  };
}

const Wrapper = getMDXComponents().wrapper;

export default async function Page(props?: any) {
  const params = await props.params;
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode,
  } = await importPage(params.mdxPath);

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
