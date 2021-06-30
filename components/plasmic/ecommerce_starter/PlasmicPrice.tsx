// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qLGagQ2DmgNe1FZGCaQoDb
// Component: 0SV_oavTjieGna
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: qLGagQ2DmgNe1FZGCaQoDb/projectcss
import * as sty from "./PlasmicPrice.module.css"; // plasmic-import: 0SV_oavTjieGna/css

export type PlasmicPrice__VariantMembers = {};

export type PlasmicPrice__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrice__VariantsArgs;
export const PlasmicPrice__VariantProps = new Array<VariantPropType>();

export type PlasmicPrice__ArgsType = {
  price?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPrice__ArgsType;
export const PlasmicPrice__ArgProps = new Array<ArgPropType>("price");

export type PlasmicPrice__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultPriceProps {
  price?: React.ReactNode;
  className?: string;
}

function PlasmicPrice__RenderFunc(props: {
  variants: PlasmicPrice__VariantsArgs;
  args: PlasmicPrice__ArgsType;
  overrides: PlasmicPrice__OverridesType;
  dataFetches?: PlasmicPrice__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__q8WJd
              )}
            >
              {"$"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___2Hlg
              )}
            >
              {"88"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__y3Nbx
              )}
            >
              {".99"}
            </div>
          </React.Fragment>
        ),
        value: args.price
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPrice__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrice__VariantsArgs;
    args?: PlasmicPrice__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicPrice__Fetches;
  } & Omit<PlasmicPrice__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPrice__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPrice__ArgProps,
      internalVariantPropNames: PlasmicPrice__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicPrice__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrice";
  } else {
    func.displayName = `PlasmicPrice.${nodeName}`;
  }
  return func;
}

export const PlasmicPrice = Object.assign(
  // Top-level PlasmicPrice renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicPrice
    internalVariantProps: PlasmicPrice__VariantProps,
    internalArgProps: PlasmicPrice__ArgProps
  }
);

export default PlasmicPrice;
/* prettier-ignore-end */
