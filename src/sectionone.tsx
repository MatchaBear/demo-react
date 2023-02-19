import { ReactNode } from "react";

export default function SectionOne(props: { children: HTMLElement }) {
  return <div className="flex-col">{props.children}</div>;
}
