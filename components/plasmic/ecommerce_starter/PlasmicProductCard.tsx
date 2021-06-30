// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qLGagQ2DmgNe1FZGCaQoDb
// Component: 1HK41xgc8bfpgp
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
import Price from "../../Price"; // plasmic-import: 0SV_oavTjieGna/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: qLGagQ2DmgNe1FZGCaQoDb/projectcss
import * as sty from "./PlasmicProductCard.module.css"; // plasmic-import: 1HK41xgc8bfpgp/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: OCsEn4tAW1V0oo/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: 1k27A41LUqHcV-/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: IOJS8lyifJ8iGY/icon
import Icon6Icon from "./icons/PlasmicIcon__Icon6"; // plasmic-import: T6MIjmDk-jFYaJ/icon

export type PlasmicProductCard__VariantMembers = {
  small: "small";
};

export type PlasmicProductCard__VariantsArgs = {
  small?: SingleBooleanChoiceArg<"small">;
};

type VariantPropType = keyof PlasmicProductCard__VariantsArgs;
export const PlasmicProductCard__VariantProps = new Array<VariantPropType>(
  "small"
);

export type PlasmicProductCard__ArgsType = {
  image?: React.ReactNode;
  slot?: React.ReactNode;
  children?: React.ReactNode;
  price?: React.ReactNode;
  link?: string | PageHref;
};

type ArgPropType = keyof PlasmicProductCard__ArgsType;
export const PlasmicProductCard__ArgProps = new Array<ArgPropType>(
  "image",
  "slot",
  "children",
  "price",
  "link"
);

export type PlasmicProductCard__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  button?: p.Flex<typeof Button>;
  price?: p.Flex<typeof Price>;
};

export interface DefaultProductCardProps {
  image?: React.ReactNode;
  slot?: React.ReactNode;
  children?: React.ReactNode;
  price?: React.ReactNode;
  link?: string | PageHref;
  small?: SingleBooleanChoiceArg<"small">;
  className?: string;
}

function PlasmicProductCard__RenderFunc(props: {
  variants: PlasmicProductCard__VariantsArgs;
  args: PlasmicProductCard__ArgsType;
  overrides: PlasmicProductCard__OverridesType;
  dataFetches?: PlasmicProductCard__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__small]: hasVariant(variants, "small", "small")
      })}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(defaultcss.all, sty.link, {
          [sty.link__small]: hasVariant(variants, "small", "small")
        })}
        component={Link}
        href={args.link !== undefined ? args.link : "/item"}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__dvNHz)}
              role={"img"}
              src={
                "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/1070aebbb55841e1aae5ac9f00b39879_9366/adidas_Ultraboost_DNA_x_LEGO(r)_Plates_Shoes_White_FY7690_01_standard.jpg" as const
              }
            />
          ),

          value: args.image
        })}

        {(
          hasVariant(variants, "small", "small") && triggers.hover_root
            ? true
            : false
        ) ? (
          <div
            className={classNames(defaultcss.all, sty.box___1Z2T9, {
              [sty.box__small___1Z2T9L9WZm]: hasVariant(
                variants,
                "small",
                "small"
              )
            })}
          />
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box___379, {
            [sty.box__small___379L9WZm]: hasVariant(variants, "small", "small")
          })}
        >
          <div className={classNames(defaultcss.all, sty.box__vsQ2)}>
            {p.renderPlasmicSlot({
              defaultContents: (
                <Button
                  colors={"lightGray" as const}
                  icons={"none" as const}
                  size={"small" as const}
                  slot={"New"}
                />
              ),

              value: args.slot
            })}

            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              children3={
                <Icon8Icon
                  className={classNames(defaultcss.all, sty.svg__meoV)}
                  role={"img"}
                />
              }
              children32={
                <Icon8Icon
                  className={classNames(defaultcss.all, sty.svg__zQD9)}
                  role={"img"}
                />
              }
              children322={
                <Icon7Icon
                  className={classNames(defaultcss.all, sty.svg__eq93H)}
                  role={"img"}
                />
              }
              children3222={
                <Icon6Icon
                  className={classNames(defaultcss.all, sty.svg___8MIzv)}
                  role={"img"}
                />
              }
              icons={"five" as const}
              size={"small" as const}
              slot={"New"}
            >
              <Icon8Icon
                className={classNames(defaultcss.all, sty.svg__cnW8)}
                role={"img"}
              />
            </Button>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__d3LkQ)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__ti99
                    )}
                  >
                    {"Product name"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__oXdDf
                    )}
                  >
                    {"If you can dream it, you can build it."}
                  </div>
                </React.Fragment>
              ),
              value: args.children
            })}
          </p.Stack>

          <Price
            data-plasmic-name={"price"}
            data-plasmic-override={overrides.price}
            className={classNames("__wab_instance", sty.price)}
            price={p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__ixY9S
                    )}
                  >
                    {"$"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__fz6Sy
                    )}
                  >
                    {"88"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__hxXk7
                    )}
                  >
                    {".99"}
                  </div>
                </React.Fragment>
              ),
              value: args.price
            })}
          />
        </p.Stack>
      </p.PlasmicLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link", "button", "price"],
  link: ["link", "button", "price"],
  button: ["button"],
  price: ["price"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
  button: typeof Button;
  price: typeof Price;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCard__VariantsArgs;
    args?: PlasmicProductCard__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicProductCard__Fetches;
  } & Omit<PlasmicProductCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProductCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicProductCard__ArgProps,
      internalVariantPropNames: PlasmicProductCard__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    button: makeNodeComponent("button"),
    price: makeNodeComponent("price"),

    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
