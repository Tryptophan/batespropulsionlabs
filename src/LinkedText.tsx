import React from "react";

type Link = {
  label: string,
  href: string,
  local?: boolean
}

type LinkedTextProps = {
  text: string,
  links: Link[]
}

const LinkedText = (props: LinkedTextProps) => {

  const anchors = props.links.map((link) => {
    if (link.local) {
      return (
        `<a href="${process.env.PUBLIC_URL + link.href}">${link.label}</a>`
      )
    } else {
      return (
        `<a target="_blank" rel="noopener noreferrer" href="${link.href}">${link.label}</a>`
      );
    }
  });

  let index = 0;
  const linkedText = props.text.replace(/{link}/gi, () => {
    return (anchors[index++]);
  });

  return (
    React.createElement("p", { dangerouslySetInnerHTML: { __html: linkedText } })
  );
}

export default LinkedText;