import { FlOAT_VALIDATION, INTEGER_VALIDATION } from '../const/regexes'

export const floatFormat = (value: string) => value && value.replace(FlOAT_VALIDATION, '')
