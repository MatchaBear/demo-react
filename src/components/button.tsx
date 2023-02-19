import { ReactNode } from "react";

export default function Button(props: { children: ReactNode }) {
  return (
    <button className="border rounded-md p-3">
      <span>{props.children}</span>
    </button>
  );
}
