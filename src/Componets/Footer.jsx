import React from 'react'
import { Typography } from 'antd'

const Footer = () => {
  return (
    <div className='footer'>
      <Typography.Link href="https://www.google.com" target='_blank'>Privacy Policy</Typography.Link>
      <Typography.Link href="https://www.google.com" target='_blank'>Terms and Conditions</Typography.Link>
      <Typography.Link href="https://www.google.com" target='_blank'>return Policy</Typography.Link>
      <Typography.Link href="https://www.google.com" target='_blank'>Legal notice</Typography.Link>
      <Typography.Link href="tel:+1 916-123-1231" target='_blank'>+1 916-123-1231</Typography.Link>
    </div>
  )
}

export default Footer