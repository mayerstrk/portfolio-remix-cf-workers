import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "mstark Developer Portfolio" },
    { name: "description", content: "Developer portfolio" },
  ];
};

export default function Index() {
  return <main>hey</main>;
}
