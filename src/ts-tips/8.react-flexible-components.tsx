import React from 'react'

interface TableProps<TItem> {
  items: TItem[]
  renderItem: (item: TItem) => React.ReactNode
}

export function Table<TItem>(props: TableProps<TItem>) {
  return null
}

const Component = () => {
  return (
    <Table
      items={[{ id: '1', name: 'Max' }]}
      renderItem={(item) => (
        <div>
          {item.id} {item.name}
        </div>
      )}
    ></Table>
  )
}
