import { ReactNode } from "react";

export default function Div(props: { children: HTMLElement }) {
  return <div className="flex-col">{props.children}</div>;
}
