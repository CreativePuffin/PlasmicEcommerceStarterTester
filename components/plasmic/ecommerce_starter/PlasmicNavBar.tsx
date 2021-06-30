// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qLGagQ2DmgNe1FZGCaQoDb
// Component: yXM9CiZIYNsx-O
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: ibhXG1eT3AC1_w/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: qLGagQ2DmgNe1FZGCaQoDb/projectcss
import * as sty from "./PlasmicNavBar.module.css"; // plasmic-import: yXM9CiZIYNsx-O/css

import Icon24Icon from "./icons/PlasmicIcon__Icon24"; // plasmic-import: IfrVYWixZqHYop/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: OCsEn4tAW1V0oo/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: SOQRDqq_XuG35D/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 3ObM5-SsRVOYKr/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: Mdgcj3unOuHeo0/icon

export type PlasmicNavBar__VariantMembers = {
  filled: "filled";
  searchOpen: "searchOpen";
};

export type PlasmicNavBar__VariantsArgs = {
  filled?: SingleBooleanChoiceArg<"filled">;
  searchOpen?: SingleBooleanChoiceArg<"searchOpen">;
};

type VariantPropType = keyof PlasmicNavBar__VariantsArgs;
export const PlasmicNavBar__VariantProps = new Array<VariantPropType>(
  "filled",
  "searchOpen"
);

export type PlasmicNavBar__ArgsType = {};
type ArgPropType = keyof PlasmicNavBar__ArgsType;
export const PlasmicNavBar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavBar__OverridesType = {
  root?: p.Flex<"section">;
  container2?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
};

export interface DefaultNavBarProps {
  filled?: SingleBooleanChoiceArg<"filled">;
  searchOpen?: SingleBooleanChoiceArg<"searchOpen">;
  className?: string;
}

function PlasmicNavBar__RenderFunc(props: {
  variants: PlasmicNavBar__VariantsArgs;
  args: PlasmicNavBar__ArgsType;
  overrides: PlasmicNavBar__OverridesType;
  dataFetches?: PlasmicNavBar__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__searchOpen]: hasVariant(variants, "searchOpen", "searchOpen")
      })}
    >
      <div
        data-plasmic-name={"container2"}
        data-plasmic-override={overrides.container2}
        className={classNames(defaultcss.all, sty.container2, {
          [sty.container2__filled]: hasVariant(variants, "filled", "filled")
        })}
      >
        <Button link2={"/" as const} slot={"Home"}>
          <Icon24Icon
            className={classNames(defaultcss.all, sty.svg__ew5Gz)}
            role={"img"}
          />
        </Button>

        <div className={classNames(defaultcss.all, sty.box__kZ1X)} />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__svInU, {
            [sty.box__searchOpen__svInUpxlc2]: hasVariant(
              variants,
              "searchOpen",
              "searchOpen"
            )
          })}
        >
          {(hasVariant(variants, "searchOpen", "searchOpen") ? false : true) ? (
            <Button
              className={classNames("__wab_instance", {
                [sty.button__searchOpen__pzBLpxlc2]: hasVariant(
                  variants,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              icons={
                hasVariant(variants, "searchOpen", "searchOpen")
                  ? undefined
                  : ("only" as const)
              }
              link2={"/category" as const}
              slot={"Menu"}
            >
              <Icon2Icon
                className={classNames(defaultcss.all, sty.svg__ri5WM)}
                role={"img"}
              />
            </Button>
          ) : null}
          {(hasVariant(variants, "searchOpen", "searchOpen") ? true : false) ? (
            <input
              data-plasmic-name={"textbox"}
              data-plasmic-override={overrides.textbox}
              className={classNames(defaultcss.input, sty.textbox, {
                [sty.textbox__searchOpen]: hasVariant(
                  variants,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              placeholder={
                hasVariant(variants, "searchOpen", "searchOpen")
                  ? ("Search…" as const)
                  : ("Some placeholder" as const)
              }
              size={1 as const}
              type={"text" as const}
              value={
                hasVariant(variants, "searchOpen", "searchOpen")
                  ? ("" as const)
                  : ("Some value" as const)
              }
            />
          ) : null}

          <Button icons={"only" as const} slot={"Menu"}>
            <Icon3Icon
              className={classNames(defaultcss.all, sty.svg__dcXQk)}
              role={"img"}
            />
          </Button>

          <div className={classNames(defaultcss.all, sty.box__iw5Up)}>
            <Button
              colors={"white" as const}
              rounded={"rounded" as const}
              slot={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__xLVpz,
                    {
                      [sty.box__filled__xLVpzU37Or]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      )
                    }
                  )}
                >
                  {hasVariant(variants, "filled", "filled") ? "1" : "0"}
                </div>
              }
            >
              <Icon4Icon
                className={classNames(defaultcss.all, sty.svg__lDmyU)}
                role={"img"}
              />
            </Button>
          </div>
        </p.Stack>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "container2", "textbox"],
  container2: ["container2", "textbox"],
  textbox: ["textbox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  container2: "div";
  textbox: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBar__VariantsArgs;
    args?: PlasmicNavBar__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNavBar__Fetches;
  } & Omit<PlasmicNavBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavBar__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNavBar__ArgProps,
      internalVariantPropNames: PlasmicNavBar__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    container2: makeNodeComponent("container2"),
    textbox: makeNodeComponent("textbox"),

    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */
