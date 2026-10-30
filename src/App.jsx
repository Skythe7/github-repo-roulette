import FilterForm from "./components/FilterForm"
import RepoBox from "./components/RepoBox"
import { useState } from "react"

export default function App() {
  const [repo, setRepo] = useState({
    name: "Repo name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    issues: 0,
  })

  return (
    <main>
        <FilterForm setRepo={setRepo}/>

      <section>
        <RepoBox name={repo.name}
          description={repo.description}
          language={repo.language}
          stars={repo.stars}
          forks={repo.forks}
          issues={repo.issues} />
        <button>Go to repo</button>
        <button>Refresh</button>
      </section>
    </main>
  )
}