import React from "react";
import Link from "next/link";
import theme from "../../styles/theme";

export const MyLink = React.forwardRef(
  (
    { externalHref, href, hrefAs, children, prefetch = true, fontSize }: any,
    ref
  ) =>
    externalHref ? (
      <a
        style={{
          fontSize: fontSize ?? undefined,
          fontWeight: 600,
          textDecoration: "none",
          color: theme.palette.primary.main,
        }}
        href={externalHref}
        target="_blank"
      >
        {children}
      </a>
    ) : (
      //@ts-ignore
      <Link href={href} as={hrefAs} prefetch ref={ref}>
        <a
          style={{
            fontSize: fontSize ?? undefined,
            fontWeight: 600,
            textDecoration: "none",
            color: theme.palette.primary.main,
          }}
        >
          {children}
        </a>
      </Link>
    )
);
