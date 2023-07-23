import { useMemo } from 'react'
import { TOptions } from '../types'

export const useOptions = (data: TOptions[]) => useMemo(() => {
  if (!data) {
    return []
  }
  return data?.map(({ id, name }) => ({ value: id, label: name }))
}, [data])
