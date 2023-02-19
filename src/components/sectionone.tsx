import { ReactNode } from "react";

export default function SectionOne(props: { children: ReactNode }) {
  return <div className="flex flex-col">{props.children}</div>;
}
