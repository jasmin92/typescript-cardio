import React from 'react'

type IconSize = LooseAutocomplete<'xs' | 'sm'>

type LooseAutocomplete<T extends string> = T | Omit<string, T>

interface IconProps {
  size: IconSize
}

const Icon = (props: IconProps) => {
  return <></>
}

const Component = () => {
  return (
    <>
      <Icon size="xs"></Icon>
      <Icon size="other"></Icon>
    </>
  )
}
