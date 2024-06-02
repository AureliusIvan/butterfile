import {createLazyFileRoute} from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
      <div className="p-2 space-y-4
      ">

        <h1
        className={'text-4xl font-bold'}
        >
          About this project
        </h1>

        <p>
          This project is a demonstration of how to create
          converter engine on Django with vite(React) frontend.
        </p>

      </div>
  )
}
