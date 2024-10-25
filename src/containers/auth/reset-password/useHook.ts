import { Apis } from 'libs/apis'
import React from 'react'
import { ResetDTO } from 'utils/helpers/models/reset.dto'

export default function useForget() {
    const forget =async (body:ResetDTO) => {
        await Apis.forget(body)
        .then((res)=>{console.log(res) })
        .catch((error)=>{console.log(error)})
    }
  return {forget}
}
