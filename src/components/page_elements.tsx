import React, { Fragment, useEffect } from "react";
import {
  Typography,
  Divider,
  Breadcrumbs,
  Card,
  CardMedia,
} from "@material-ui/core";
import Router, { useRouter } from "next/router";
import { Alert } from "@material-ui/lab";
import { MyLink } from "./link";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

export function PageBreadcrumbs({}: any) {
  const router = useRouter();
  const parts = router?.pathname.split("/").slice(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Breadcrumbs aria-label="breadcrumb">
        {parts.map((a: any, idx: number) => {
          const url = router?.pathname.split(parts[idx + 1])[0];
          const newUrl = url.slice(-1) === "/" ? url.slice(0, -1) : url;

          return (
            <Typography
              key={idx}
              style={{
                margin: 0,
                textTransform: "capitalize",
                // cursor: idx === parts.length - 1 ? "default" : "pointer",
                // textDecoration: idx === parts.length - 1 ? "none" : "underline",
                // color: idx === parts.length - 1 ? "default" : "#0859c6",
              }}
              // onClick={() => Router.push(newUrl)}
            >
              {a
                .replace(/_/gm, " ")
                .replace("And", "and")
                .replace(/\sA\s/gm, " a ")}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </Fragment>
  );
}

export function PageHeader({ title, subtitle }: any) {
  return (
    <Fragment>
      <PageBreadcrumbs />
      <div style={{ height: 8 }} />
      <Typography variant="h1">{title}</Typography>
      <div style={{ height: 4 }} />
      <Typography variant="body2">{subtitle}</Typography>
      <div style={{ height: 42 }} />
    </Fragment>
  );
}

export function PageSection({ title, children, noDivider }: any) {
  return (
    <Fragment>
      <div style={{ height: 18 }} />
      <Typography variant="h3">{title}</Typography>
      <div style={{ height: 8 }} />
      {!noDivider && <Divider />}
      <div style={{ height: 8 }} />
      <Typography variant="body1">{children}</Typography>
      <div style={{ height: 24 }} />
    </Fragment>
  );
}

export function PageImage({
  image,
  title,
  caption,
  maxWidth = undefined,
  marginTop = 32,
  flat = false,
}: any) {
  return (
    <div
      style={{
        margin: 4,
        textAlign: "center",
        marginTop: marginTop,
      }}
    >
      <Card
        style={{
          margin: "auto",
          borderRadius: 16,
          marginBottom: 4,
          maxWidth: maxWidth,
          background: flat ? "transparent" : "default",
        }}
        elevation={flat ? 0 : 3}
      >
        <CardMedia component="img" image={image} title={title} />
      </Card>
      {caption && <Typography variant="caption">{caption}</Typography>}
      <div style={{ height: 16 }} />
    </div>
  );
}

export function MultiPageImage({
  images,
  title,
  caption,
  maxWidth = undefined,
  marginTop = 32,
}: any) {
  return (
    <div
      style={{
        margin: 4,
        textAlign: "center",
        marginTop: marginTop,
      }}
    >
      <div
        style={{ display: "flex", margin: "auto", justifyContent: "center" }}
      >
        {images.map((a, idx) => {
          return (
            <Card
              key={idx}
              style={{
                margin: "auto",
                borderRadius: 16,
                marginBottom: 4,
                marginRight: 8,
                marginLeft: 8,
                maxWidth: maxWidth,
              }}
              elevation={3}
            >
              <CardMedia component="img" image={a} title={title} />
            </Card>
          );
        })}
      </div>
      {caption && <Typography variant="caption">{caption}</Typography>}
      <div style={{ height: 16 }} />
    </div>
  );
}

export function PageFooter({
  back,
  next,
}: {
  back?: { name: string; href: string };
  next?: { name: string; href: string };
}) {
  return (
    <div style={{ display: "flex", marginBottom: 36 }}>
      {back && (
        <div>
          <MyLink fontSize={20} href={back.href}>
            <ChevronLeft
              style={{ fontSize: 36, padding: 0, marginBottom: -11 }}
            />
            {back.name}
          </MyLink>
        </div>
      )}
      <div style={{ flexGrow: 1 }} />
      {next && (
        <div>
          <MyLink fontSize={20} href={next.href}>
            {next.name}{" "}
            <ChevronRight
              style={{ fontSize: 36, padding: 0, marginBottom: -11 }}
            />
          </MyLink>
        </div>
      )}
    </div>
  );
}

export function PageAlert({
  children,
  severity = "info",
  marginTop = 24,
  marginBottom = 24,
  margin = 12,
}: any) {
  return (
    <Alert
      style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
        margin: margin,
      }}
      severity={severity}
    >
      {children}
    </Alert>
  );
}
