import {createLazyFileRoute} from '@tanstack/react-router'

export const Route = createLazyFileRoute('/docs/')({
  component: DocPage,
})

function DocPage() {
  return (
      <div className="p-2">
        <h1
            className={'text-4xl font-bold'}
        >
          Docs
        </h1>

        <p
            className={'text-lg'}
        >
          This is the docs page.
        </p>
      </div>
  )
}