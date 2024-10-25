import React, { FC } from 'react'
import { NoData } from './style'

interface NoDataFoundProps {
  isShow: boolean
}

const NoDataFound: FC<NoDataFoundProps> = ({ isShow }) => {
  return (
    <>
      {isShow ? <NoData>No data found</NoData> : ''}
    </>
  )
}

export default NoDataFound
