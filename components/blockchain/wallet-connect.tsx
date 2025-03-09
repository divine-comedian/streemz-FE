import { HtmlHTMLAttributes } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export const WalletConnect = ({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={`${className || ""} inline-block`} {...props}>
      <ConnectButton
        showBalance={false}
        chainStatus="icon"
        accountStatus="address"
      />
    </span>
  )
}
