// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qLGagQ2DmgNe1FZGCaQoDb
// Component: HvQWRyXQu1-zN4
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

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: XGY7GHA_yxuwnI/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: qLGagQ2DmgNe1FZGCaQoDb/projectcss
import * as sty from "./PlasmicCartItem.module.css"; // plasmic-import: HvQWRyXQu1-zN4/css

import Icon31Icon from "./icons/PlasmicIcon__Icon31"; // plasmic-import: TJmUYj0oDn6UV2/icon
import Icon30Icon from "./icons/PlasmicIcon__Icon30"; // plasmic-import: ZPQgVeO8c24IZT/icon

export type PlasmicCartItem__VariantMembers = {};

export type PlasmicCartItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicCartItem__VariantsArgs;
export const PlasmicCartItem__VariantProps = new Array<VariantPropType>();

export type PlasmicCartItem__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCartItem__ArgsType;
export const PlasmicCartItem__ArgProps = new Array<ArgPropType>("children");

export type PlasmicCartItem__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<"img">;
  box?: p.Flex<"div">;
};

export interface DefaultCartItemProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicCartItem__RenderFunc(props: {
  variants: PlasmicCartItem__VariantsArgs;
  args: PlasmicCartItem__ArgsType;
  overrides: PlasmicCartItem__OverridesType;
  dataFetches?: PlasmicCartItem__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
      >
        {true ? (
          <img
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(defaultcss.img, sty.img)}
            role={"img"}
            src={
              "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194681/02/sv01/fnd/PNA/fmt/png/Eternity-NITRO-Men's-Running-Shoes" as const
            }
          />
        ) : null}
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"box"}
            data-plasmic-override={overrides.box}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <p.PlasmicLink
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.link__tHmMp
                    )}
                    component={Link}
                    platform={"nextjs"}
                  >
                    {"Enter some text"}
                  </p.PlasmicLink>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__vaoxH
                    )}
                  >
                    {"#00000"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__frUBn
                    )}
                  >
                    {"Size: 11"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__hdehb
                    )}
                  >
                    {"Quantity: 1"}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__t25NM)}
                  >
                    <Icon31Icon
                      className={classNames(defaultcss.all, sty.svg__xjjGh)}
                      role={"img"}
                    />

                    <Icon30Icon
                      className={classNames(defaultcss.all, sty.svg__kcsZg)}
                      role={"img"}
                    />
                  </p.Stack>
                </React.Fragment>
              ),
              value: args.children
            })}
          </p.Stack>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "box"],
  img: ["img"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: "img";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCartItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCartItem__VariantsArgs;
    args?: PlasmicCartItem__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCartItem__Fetches;
  } & Omit<PlasmicCartItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCartItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCartItem__ArgProps,
      internalVariantPropNames: PlasmicCartItem__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCartItem__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCartItem";
  } else {
    func.displayName = `PlasmicCartItem.${nodeName}`;
  }
  return func;
}

export const PlasmicCartItem = Object.assign(
  // Top-level PlasmicCartItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicCartItem
    internalVariantProps: PlasmicCartItem__VariantProps,
    internalArgProps: PlasmicCartItem__ArgProps
  }
);

export default PlasmicCartItem;
/* prettier-ignore-end */