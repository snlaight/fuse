import * as React from 'react'
import type { SVGProps } from 'react'
const SvgHttpLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={16}
    fill="none"
    viewBox="0 0 30 16"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="#008EC7"
      d="M26.705 0H4.443L.625 8l3.818 8h22.262l3.818-8zm-1.276 14.669H5.283L2.099 8l3.184-6.669h20.146L28.612 8z"
    />
    <path
      fill="#005B9B"
      d="m28.612 8-3.183 6.67H5.283L2.1 8l3.183-6.669h20.146z"
    />
    <path
      fill="#fff"
      d="M10.87 5.751v4.763H9.766V8.56h-2.16v1.953H6.502V5.75h1.102V7.63h2.16V5.75zM12.985 6.65H11.46V5.75h4.15v.899h-1.52v3.864h-1.106zM17.257 6.65h-1.524V5.75h4.15v.899h-1.524v3.864h-1.102zM23.635 5.963c.293.125.543.333.72.598.172.275.259.594.25.918.008.323-.08.642-.25.916a1.605 1.605 0 0 1-.72.598 2.684 2.684 0 0 1-1.1.207h-.96v1.314h-1.1V5.75h2.06c.378-.008.753.064 1.1.212m-.405 2.125a.746.746 0 0 0 .258-.609c0-.267-.086-.472-.258-.615-.172-.142-.424-.214-.755-.214h-.899v1.653h.899c.33 0 .582-.072.755-.215"
    />
  </svg>
)
export default SvgHttpLogo