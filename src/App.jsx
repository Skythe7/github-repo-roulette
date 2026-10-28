import FilterForm from "./components/FilterForm"
import RepoBox from "./components/RepoBox"

export default function App() {
  return (
    <main>
        <FilterForm />

      <section>
        <RepoBox name="vertiy"
          description="lorem"
          language="kava"
          stars={10}
          forks={10}
          issues={10} />
        <button>Refresh</button>
      </section>
    </main>
  )
}