import React, { useState, Fragment, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  ListItem,
  Collapse,
  List,
  Typography,
  Divider,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useScreenSize } from "../../hooks/use_screen_size";
import { sideBarItems } from "./side_bar_items";
import SimpleBar from "simplebar-react";
import MenuIcon from "@material-ui/icons/Menu";
import theme from "../../../styles/theme";
import Router from "next/router";
import { GitHub } from "@material-ui/icons";
import { pushExternalRoute } from "../../functions";

const useStyles = makeStyles((theme) => ({
  wrapper: { display: "flex" },
  root: { width: "100%" },
  section: {},
  selectedSection: { background: "#e5e5e5" },
  nested: {
    paddingLeft: 42,
  },
  selectedNested: {
    paddingLeft: 42,
    background: "#e5e5e5",
  },
  childText: {
    fontSize: 15,
    color: "#767676",
    margin: 4,
  },
  drawerPaper: {
    width: 240,
  },
}));

export default function SideBar({ children }: any) {
  const classes = useStyles();
  const { isSmall } = useScreenSize();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div>
        {isSmall ? (
          <Fragment>
            <IconButton
              style={{
                zIndex: 9999,
                position: "fixed",
                bottom: 8,
                right: 8,
                background: theme.palette.secondary.main,
              }}
              onClick={() => setDrawerOpen(true)}
            >
              {" "}
              <MenuIcon
                style={{ fontSize: 36, color: theme.palette.primary.main }}
              />{" "}
            </IconButton>
            <Drawer
              variant="temporary"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <SideBarContent
                toggleDrawer={() => {
                  setDrawerOpen(!drawerOpen);
                }}
              />
            </Drawer>
          </Fragment>
        ) : (
          <SimpleBar
            style={{
              height: `100vh`,
              minWidth: 250,
              borderRight: "1px solid lightGrey",
            }}
          >
            <SideBarContent />
          </SimpleBar>
        )}
      </div>
      {/* This SimpleBar is for page Body, not side bar */}
      <SimpleBar
        style={{
          height: `100vh`,
          padding: 24,
          width: "100%",
          margin: "auto",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div style={{ width: "100%" }}> {children}</div>
      </SimpleBar>
    </div>
  );
}

function SideBarContent({ toggleDrawer }: any) {
  const classes = useStyles();
  const router = useRouter();
  const logoCombined = require("../../assets/logo_combined.png");

  const isExpanded = (sectionPathname: string) => {
    if (router.pathname.includes(sectionPathname)) return true;
    return false;
  };

  return (
    <div className={classes.root}>
      <img
        src={logoCombined}
        style={{
          cursor: "pointer",
          width: "100%",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 16,
          paddingBottom: 12,
        }}
        onClick={() => {
          Router.push("/");
          if (toggleDrawer) toggleDrawer();
        }}
      />
      <Divider />
      {sideBarItems.map((item: any, idx: number) => {
        return (
          <Fragment>
            <ListItem
              className={
                // item.url === router.pathname
                //   ? classes.selectedSection
                //   :
                classes.section
              }
              // button
              // onClick={() => {
              //   Router.push(item.url);
              //   if (toggleDrawer) toggleDrawer();
              // }}
            >
              <Typography
                style={{
                  fontSize: 17,
                  color: "#767676",
                  margin: 6,
                  fontWeight: 500,
                }}
              >
                {item.title}
              </Typography>
            </ListItem>
            {item.children?.map((childItem: any, childIdx: number) => {
              return (
                <Fragment>
                  <Collapse
                    in={
                      true
                      // isExpanded(item.section)
                    }
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem
                        button
                        className={
                          childItem.url === router.pathname
                            ? classes.selectedNested
                            : classes.nested
                        }
                        onClick={() => {
                          Router.push(childItem.url);
                          if (toggleDrawer) toggleDrawer();
                        }}
                      >
                        <Typography className={classes.childText}>
                          {childItem.title}
                        </Typography>
                      </ListItem>
                    </List>
                  </Collapse>
                </Fragment>
              );
            })}
          </Fragment>
        );
      })}

      <GitHub
        style={{ position: "fixed", bottom: 12, left: 18, cursor: "pointer" }}
        onClick={() =>
          pushExternalRoute(
            "https://github.com/Milad-Akarie/auto_route_library"
          )
        }
      />
    </div>
  );
}
