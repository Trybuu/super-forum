import React, { PropsWithChildren } from 'react'
import { cx, css } from '@emotion/css'

interface BaseProps {
  className?: string // Uczyniono opcjonalnym
  [key: string]: unknown
}

export const Button = React.forwardRef<
  HTMLSpanElement,
  PropsWithChildren<{ active: boolean; reversed: boolean } & BaseProps>
>(({ className = '', active, reversed, ...props }, ref) => (
  <span
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        cursor: pointer;
        color: ${reversed
          ? active
            ? 'white'
            : '#aaa'
          : active
          ? 'black'
          : '#aaa'};
      `,
    )}
  />
))

export const EditorValue = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ value: any } & BaseProps>
>(({ className = '', value, ...props }, ref) => {
  type NodeType = { text: string }
  const textLines =
    (value.document?.nodes as NodeType[])
      ?.map((node) => node.text)
      .join('\n') || ''

  return (
    <div
      ref={ref}
      {...props}
      className={cx(
        className,
        css`
          margin: 30px -20px 0;
        `,
      )}
    >
      <div
        className={css`
          font-size: 14px;
          padding: 5px 20px;
          color: #404040;
          border-top: 2px solid #eeeeee;
          background: #f8f8f8;
        `}
      >
        Slate's value as text
      </div>
      <div
        className={css`
          color: #404040;
          font: 12px monospace;
          white-space: pre-wrap;
          padding: 10px 20px;
        `}
      >
        {textLines}
      </div>
    </div>
  )
})

export const Instruction = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<BaseProps>
>(({ className = '', ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        white-space: pre-wrap;
        margin: 0 -20px 10px;
        padding: 10px 20px;
        font-size: 14px;
        background: #f8f8e8;
      `,
    )}
  />
))

export const Menu = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<BaseProps>
>(({ className = '', ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `,
    )}
  />
))

export const Toolbar = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<BaseProps>
>(({ className = '', ...props }, ref) => (
  <Menu
    {...props}
    ref={ref}
    className={cx(
      className,
      css`
        position: relative;
        padding: 1px 18px 17px;
        margin: 0 -20px;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
      `,
    )}
  />
))
