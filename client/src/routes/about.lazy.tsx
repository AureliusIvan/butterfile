import {createLazyFileRoute} from '@tanstack/react-router'
import {List, ListItem} from "@/components/list.component.tsx";


export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return (
      <main
          className="p-4 space-y-4"
      >

        <h1
            className={'text-4xl font-bold'}
        >
          About this project
        </h1>

        <p
            className={'text-lg'}
        >
          This project is a demonstration of how to create
          converter engine on Django with vite(React) frontend.
        </p>


        <h2
            className={'text-2xl font-bold'}
        >
          Technologies used:
        </h2>

        <List>
          <ListItem>React Typescript</ListItem>
          <ListItem>Vite</ListItem>
          <ListItem>Tanstack Router (Routes Management)</ListItem>
          <ListItem>Django</ListItem>
          <ListItem>Virtualenv</ListItem>
        </List>

        <p
            className={'text-lg'}
        >
          We connect the frontend to the backend using axios, we consider using inertia,
          but the down side is that harder to test and will be more difficult to maintain.
        </p>

      </main>
  )
}
