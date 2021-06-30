// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qLGagQ2DmgNe1FZGCaQoDb
// Component: 3QskM3CcE4jqN6
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
import NavBar from "../../NavBar"; // plasmic-import: yXM9CiZIYNsx-O/component
import CartItem from "../../CartItem"; // plasmic-import: HvQWRyXQu1-zN4/component
import Button from "../../Button"; // plasmic-import: ibhXG1eT3AC1_w/component
import Separator from "../../Separator"; // plasmic-import: VjAhTiuoEtasmb/component
import Footer from "../../Footer"; // plasmic-import: NmbnAqSDZSY-2F/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: XGY7GHA_yxuwnI/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css"; // plasmic-import: qLGagQ2DmgNe1FZGCaQoDb/projectcss
import * as sty from "./PlasmicCart.module.css"; // plasmic-import: 3QskM3CcE4jqN6/css

import Icon31Icon from "./icons/PlasmicIcon__Icon31"; // plasmic-import: TJmUYj0oDn6UV2/icon
import Icon32Icon from "./icons/PlasmicIcon__Icon32"; // plasmic-import: O1BB-bLI7QjKZ0/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: OCsEn4tAW1V0oo/icon
import Icon30Icon from "./icons/PlasmicIcon__Icon30"; // plasmic-import: ZPQgVeO8c24IZT/icon
import Icon22Icon from "./icons/PlasmicIcon__Icon22"; // plasmic-import: vyJDz4S_jOJLG7/icon
import Icon21Icon from "./icons/PlasmicIcon__Icon21"; // plasmic-import: mxjvaOqQSldmVn/icon
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: CmtivnEQ5n--QT/icon

export type PlasmicCart__VariantMembers = {
  filled: "filled";
};

export type PlasmicCart__VariantsArgs = {
  filled?: SingleBooleanChoiceArg<"filled">;
};

type VariantPropType = keyof PlasmicCart__VariantsArgs;
export const PlasmicCart__VariantProps = new Array<VariantPropType>("filled");

export type PlasmicCart__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot4?: React.ReactNode;
  slot5?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCart__ArgsType;
export const PlasmicCart__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4",
  "slot5"
);

export type PlasmicCart__OverridesType = {
  root?: p.Flex<"div">;
  navBar?: p.Flex<typeof NavBar>;
  section?: p.Flex<"section">;
  container2?: p.Flex<"div">;
  cartItem?: p.Flex<typeof CartItem>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  separator?: p.Flex<typeof Separator>;
  container?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
  textbox?: p.Flex<"input">;
};

export interface DefaultCartProps {
  dataFetches: PlasmicCart__Fetches;
}

function PlasmicCart__RenderFunc(props: {
  variants: PlasmicCart__VariantsArgs;
  args: PlasmicCart__ArgsType;
  overrides: PlasmicCart__OverridesType;
  dataFetches?: PlasmicCart__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <title key="title">{"Shopping Cart"}</title>
        <meta key="og:title" property="og:title" content={"Shopping Cart"} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={
            "Congue pulvinar scelerisque vestibulum senectus ullamcorper ac sem justo odio adipiscing volutpat nam a amet quam facilisi parturient parturient et id parturient per."
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root,
            { [sty.root__filled]: hasVariant(variants, "filled", "filled") }
          )}
        >
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar, {
              [sty.navBar__filled]: hasVariant(variants, "filled", "filled")
            })}
            filled={
              hasVariant(variants, "filled", "filled")
                ? ("filled" as const)
                : undefined
            }
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(defaultcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"container2"}
              data-plasmic-override={overrides.container2}
              hasGap={true}
              className={classNames(defaultcss.all, sty.container2, {
                [sty.container2__filled]: hasVariant(
                  variants,
                  "filled",
                  "filled"
                )
              })}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__xN0G, {
                  [sty.box__filled__xN0GlgVnu]: hasVariant(
                    variants,
                    "filled",
                    "filled"
                  )
                })}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__ulRjX,
                    {
                      [sty.box__filled__ulRjXlgVnu]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      )
                    }
                  )}
                >
                  {hasVariant(variants, "filled", "filled")
                    ? "Your bag (1)"
                    : "Looks like your bag is empty"}
                </div>

                {(hasVariant(variants, "filled", "filled") ? true : false) ? (
                  <CartItem
                    data-plasmic-name={"cartItem"}
                    data-plasmic-override={overrides.cartItem}
                    className={classNames("__wab_instance", sty.cartItem, {
                      [sty.cartItem__filled]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      )
                    })}
                  >
                    <p.PlasmicLink
                      data-plasmic-name={"link"}
                      data-plasmic-override={overrides.link}
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.link
                      )}
                      component={Link}
                      platform={"nextjs"}
                    >
                      {"Eternity NITRO Men's Running Shoes"}
                    </p.PlasmicLink>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__tik1T
                      )}
                    >
                      {"#00000"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__nJuYb
                      )}
                    >
                      {"Size: 11"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box___5Cmfx
                      )}
                    >
                      {"Quantity: 1"}
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.box__sBB)}
                    >
                      <Icon31Icon
                        className={classNames(defaultcss.all, sty.svg__vl3P8)}
                        role={"img"}
                      />

                      <Icon32Icon
                        className={classNames(defaultcss.all, sty.svg__vOuX)}
                        role={"img"}
                      />
                    </p.Stack>
                  </CartItem>
                ) : null}

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___3FtZk,
                    {
                      [sty.box__filled___3FtZKlgVnu]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      )
                    }
                  )}
                >
                  {
                    "If you have an account, please sign in to see items you previously added."
                  }
                </div>

                <Button
                  colors={"black" as const}
                  icons={"none" as const}
                  rounded={"rounded" as const}
                  size={"large" as const}
                  slot={"Login"}
                />

                <Button
                  colors={"white" as const}
                  icons={"none" as const}
                  rounded={"rounded" as const}
                  slot={"Continue shopping"}
                />

                {(hasVariant(variants, "filled", "filled") ? false : false) ? (
                  <div
                    className={classNames(defaultcss.all, sty.box__ajtrn, {
                      [sty.box__filled__ajtrnlgVnu]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      )
                    })}
                  />
                ) : null}
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__xVZfQ, {
                  [sty.box__filled__xVZfQlgVnu]: hasVariant(
                    variants,
                    "filled",
                    "filled"
                  )
                })}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__slf4Y, {
                    [sty.box__filled__slf4YlgVnu]: hasVariant(
                      variants,
                      "filled",
                      "filled"
                    )
                  })}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__w07DF,
                      {
                        [sty.box__filled__w07DFlgVnu]: hasVariant(
                          variants,
                          "filled",
                          "filled"
                        )
                      }
                    )}
                  >
                    {"Order Summary"}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box__qLl61, {
                      [sty.box__filled__qLl61LgVnu]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      )
                    })}
                  >
                    <div className={classNames(defaultcss.all, sty.box__x0Yr)}>
                      <div
                        className={classNames(defaultcss.all, sty.box__jkbFh, {
                          [sty.box__filled__jkbFhlgVnu]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                        })}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "Subtotal (1)"
                            : "Subtotal (0)",
                          value: args.slot5,
                          className: classNames(sty.slotSlot5, {
                            [sty.slotSlot5__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          })
                        })}
                      </div>

                      <div
                        className={classNames(defaultcss.all, sty.box__rlJp4, {
                          [sty.box__filled__rlJp4LgVnu]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                        })}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "$88.99"
                            : "$0.00",
                          value: args.children,
                          className: classNames(sty.slotChildren, {
                            [sty.slotChildren__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          })
                        })}
                      </div>
                    </div>

                    <div className={classNames(defaultcss.all, sty.box__z1TE8)}>
                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__tH5Q,
                            {
                              [sty.box__filled__tH5QlgVnu]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              )
                            }
                          )}
                        >
                          {"Estimated Shipping (free over $49)"}
                        </div>
                      ) : null}

                      <div
                        className={classNames(defaultcss.all, sty.box__gs7Rp, {
                          [sty.box__filled__gs7RplgVnu]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                        })}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "FREE"
                            : "-",
                          value: args.slot,
                          className: classNames(sty.slotSlot, {
                            [sty.slotSlot__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          })
                        })}
                      </div>
                    </div>

                    <div className={classNames(defaultcss.all, sty.box__jcc7I)}>
                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__xsRcD,
                            {
                              [sty.box__filled__xsRcDlgVnu]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              )
                            }
                          )}
                        >
                          {"Estimated Tax"}
                        </div>
                      ) : null}

                      <div
                        className={classNames(defaultcss.all, sty.box__f6FM0, {
                          [sty.box__filled__f6FM0LgVnu]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                        })}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: "-",
                          value: args.slot2,
                          className: classNames(sty.slotSlot2, {
                            [sty.slotSlot2__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          })
                        })}
                      </div>
                    </div>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__k7Lq,
                        {
                          [sty.button__filled__k7LqLgVnu]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                        }
                      )}
                      icons={"none" as const}
                      link={"link" as const}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__cLQh5
                          )}
                        >
                          {"Have a promo code?"}
                        </div>
                      }
                    />

                    <Separator
                      data-plasmic-name={"separator"}
                      data-plasmic-override={overrides.separator}
                      className={classNames("__wab_instance", sty.separator)}
                      dark={"dark" as const}
                    />

                    <div
                      className={classNames(defaultcss.all, sty.box__jFgTc, {
                        [sty.box__filled__jFgTclgVnu]: hasVariant(
                          variants,
                          "filled",
                          "filled"
                        )
                      })}
                    >
                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__yf3Q,
                            {
                              [sty.box__filled__yf3QlgVnu]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              )
                            }
                          )}
                        >
                          {"Estimated Total"}
                        </div>
                      ) : null}

                      <div
                        className={classNames(defaultcss.all, sty.box__tCRe, {
                          [sty.box__filled__tCReLgVnu]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                        })}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "$88.99"
                            : "$0.00",
                          value: args.slot4,
                          className: classNames(sty.slotSlot4, {
                            [sty.slotSlot4__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            )
                          })
                        })}
                      </div>
                    </div>

                    {(hasVariant(variants, "filled", "filled") ? true : false)
                      ? p.renderPlasmicSlot({
                          defaultContents: true ? (
                            <Button
                              className={classNames(
                                "__wab_instance",
                                sty.button__pxCo1
                              )}
                              colors={"blue" as const}
                              icons={"none" as const}
                              rounded={"rounded" as const}
                              size={"large" as const}
                              slot={
                                <div
                                  className={classNames(
                                    defaultcss.all,
                                    defaultcss.__wab_text,
                                    sty.box__mU4Yo
                                  )}
                                >
                                  {"Checkout"}
                                </div>
                              }
                            />
                          ) : null,
                          value: args.slot3
                        })
                      : null}

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.box__sVs3N, {
                        [sty.box__filled__sVs3NlgVnu]: hasVariant(
                          variants,
                          "filled",
                          "filled"
                        )
                      })}
                    >
                      <Icon30Icon
                        className={classNames(defaultcss.all, sty.svg__jGchX)}
                        role={"img"}
                      />

                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__x9Fu,
                            {
                              [sty.box__filled__x9FUlgVnu]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              )
                            }
                          )}
                        >
                          {"Secure"}
                        </div>
                      ) : null}
                    </p.Stack>
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__dfjVv, {
                    [sty.box__filled__dfjVVlgVnu]: hasVariant(
                      variants,
                      "filled",
                      "filled"
                    )
                  })}
                >
                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__sLTx5)}
                    height={150 as const}
                    role={"img"}
                    src={"/plasmic/ecommerce_starter/images/image.svg"}
                    width={210 as const}
                  />

                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__xDzI)}
                    height={150 as const}
                    role={"img"}
                    src={"/plasmic/ecommerce_starter/images/image2.svg"}
                    width={210 as const}
                  />

                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__ihFvb)}
                    height={150 as const}
                    role={"img"}
                    src={"/plasmic/ecommerce_starter/images/image3.svg"}
                    width={210 as const}
                  />

                  <img
                    alt={""}
                    className={classNames(defaultcss.img, sty.img__uqV0E)}
                    height={150 as const}
                    role={"img"}
                    src={"/plasmic/ecommerce_starter/images/image4.svg"}
                    width={213 as const}
                  />
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"container"}
              data-plasmic-override={overrides.container}
              hasGap={true}
              className={classNames(defaultcss.all, sty.container, {
                [sty.container__filled]: hasVariant(
                  variants,
                  "filled",
                  "filled"
                )
              })}
            >
              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__otTYz)}
                role={"img"}
                src={
                  "https://www.patagonia.com/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw4b201dc8/images/for-the-planet.png" as const
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__b4A5)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__pZfSe
                  )}
                >
                  {"1% of your purchase will go to a grassroot organization."}
                </div>

                <Button
                  className={classNames("__wab_instance", sty.button__w7Gnk)}
                  icons={"none" as const}
                  link={"link" as const}
                  slot={"Learn more"}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
            container432={
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__a7IyB)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__geuZi
                    )}
                  >
                    {"Subscribe"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__zEIz
                    )}
                  >
                    {
                      "Sign up for exclusive offers, original stories, activism, events and more."
                    }
                  </div>

                  <input
                    data-plasmic-name={"textbox"}
                    data-plasmic-override={overrides.textbox}
                    className={classNames(defaultcss.input, sty.textbox)}
                    placeholder={"Email address…" as const}
                    size={1 as const}
                    type={"text" as const}
                    value={"" as const}
                  />

                  <Button
                    className={classNames("__wab_instance", sty.button__xWg4P)}
                    colors={"black" as const}
                    icons={"none" as const}
                    slot={"Sign me up"}
                  />
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__rFvvl)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__rf1Bn
                    )}
                  >
                    {"Help"}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.box___8Jvze)}
                  >
                    <Button slot={"Order status"}>
                      <Icon22Icon
                        className={classNames(defaultcss.all, sty.svg__wpeq3)}
                        role={"img"}
                      />
                    </Button>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__xBzBo
                      )}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box__x2Lbz
                          )}
                        >
                          {"Returns and exchanges"}
                        </div>
                      }
                    >
                      <Icon21Icon
                        className={classNames(defaultcss.all, sty.svg__ogaht)}
                        role={"img"}
                      />
                    </Button>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__fpnYg
                      )}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.box___2Xj0G
                          )}
                        >
                          {"Help center"}
                        </div>
                      }
                    >
                      <Icon20Icon
                        className={classNames(defaultcss.all, sty.svg__bTxU)}
                        role={"img"}
                      />
                    </Button>
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box___7GFaz)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__q02Sf
                    )}
                  >
                    {"More info"}
                  </div>

                  <div className={classNames(defaultcss.all, sty.box__u5X)}>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.box__iSy0H)}
                    >
                      <Button icons={"none" as const} slot={"Gift cards"} />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___2Ob16
                        )}
                        icons={"none" as const}
                        slot={"Find a store"}
                      />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__yA7E9
                        )}
                        icons={"none" as const}
                        slot={"Careers"}
                      />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__bjpYq
                        )}
                        icons={"none" as const}
                        slot={"Sitemap"}
                      />
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.box__msG0B)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__sdqzf
                        )}
                        icons={"none" as const}
                        slot={"Group sales"}
                      />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__wqyPu
                        )}
                        icons={"none" as const}
                        slot={"Privacy policy"}
                      />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__gi5Z2
                        )}
                        icons={"none" as const}
                        slot={"Contact us"}
                      />
                    </p.Stack>
                  </div>
                </p.Stack>
              </React.Fragment>
            }
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBar",
    "section",
    "container2",
    "cartItem",
    "link",
    "separator",
    "container",
    "footer",
    "textbox"
  ],
  navBar: ["navBar"],
  section: [
    "section",
    "container2",
    "cartItem",
    "link",
    "separator",
    "container"
  ],
  container2: ["container2", "cartItem", "link", "separator"],
  cartItem: ["cartItem", "link"],
  link: ["link"],
  separator: ["separator"],
  container: ["container"],
  footer: ["footer", "textbox"],
  textbox: ["textbox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBar: typeof NavBar;
  section: "section";
  container2: "div";
  cartItem: typeof CartItem;
  link: "a";
  separator: typeof Separator;
  container: "div";
  footer: typeof Footer;
  textbox: "input";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCart__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCart__VariantsArgs;
    args?: PlasmicCart__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCart__Fetches;
  } & Omit<PlasmicCart__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCart__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCart__ArgProps,
      internalVariantPropNames: PlasmicCart__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCart__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCart";
  } else {
    func.displayName = `PlasmicCart.${nodeName}`;
  }
  return func;
}

export const PlasmicCart = Object.assign(
  // Top-level PlasmicCart renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    section: makeNodeComponent("section"),
    container2: makeNodeComponent("container2"),
    cartItem: makeNodeComponent("cartItem"),
    link: makeNodeComponent("link"),
    separator: makeNodeComponent("separator"),
    container: makeNodeComponent("container"),
    footer: makeNodeComponent("footer"),
    textbox: makeNodeComponent("textbox"),

    // Metadata about props expected for PlasmicCart
    internalVariantProps: PlasmicCart__VariantProps,
    internalArgProps: PlasmicCart__ArgProps
  }
);

export default PlasmicCart;
/* prettier-ignore-end */