import { ReactNode } from "react";

export default function SectionOne(props: { children: ReactNode }) {
  return <div className="flex-col">{props.children}</div>;
}
