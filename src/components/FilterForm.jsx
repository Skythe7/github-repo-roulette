import { githubLicenses } from "../data/github-license"
import { useState } from "react"

export default function FilterForm({ setRepo }) {
    const [inputs, setInputs] = useState({
        language: "C",
        stars: 0,
        starsCompare: ">",
        forks: 0,
        forksCompare: ">",
        user: "torvalds",
        topic: "",
        license: ""
    })

    async function fetchAPI() {
      const query = []

      if (inputs.language.trim()) query.push(`language:${inputs.language.trim()}`)
      if (inputs.stars !== "") query.push(`stars:${inputs.starsCompare}${inputs.stars}`)
      if (inputs.forks !== "") query.push(`forks:${inputs.forksCompare}${inputs.forks}`)
      if (inputs.user.trim()) query.push(`user:${inputs.user.trim()}`)
      if (inputs.topic.trim()) {
        query.push(...inputs.topic.trim().split(/\s+/).map(topic => `topic:${topic}`))
      }
      if (inputs.license) query.push(`license:${inputs.license}`)

      const params = new URLSearchParams({
        q: query.length ? query.join(" ") : "stars:>=0"
      })
      const response = await fetch(`https://api.github.com/search/repositories?${params}`)

      if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.status}`)
      }

      const data = await response.json()
      console.log(data)
      if (!data.items?.length) {
        return {
          name: "no repo found",
          description: "",
          language: "",
          stars: 0,
          forks: 0,
          issues: 0,
          url: ""
        }
      }

      const repo = data.items[Math.floor(Math.random() * data.items.length)]
      return {
        name: repo.full_name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        issues: repo.open_issues_count,
        url: repo.html_url
      }
    }

    function handleChange(event) {
      const { name, value } = event.target
        setInputs(prevValues => ({
            ...prevValues,
        [name]: value
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()

      try {
        const repoData = await fetchAPI()
        setRepo(repoData)
      } catch (error) {
        console.error(error)
      }
    }

    return (
        <form onSubmit={handleSubmit}>
          <p className="label-form">Language</p>
          <input type="text" name="language" value={inputs.language} onChange={handleChange}/>

          <p className="label-form">Stars</p>
          <div className="number-input">
            <select name="starsCompare" value={inputs.starsCompare} onChange={handleChange}>
              <option value=">">Greater than</option>
              <option value="<">Less than</option>
              <option value=">=">Greater or equal</option>
              <option value="<=">Less or equal</option>
            </select>
            <input type="number" name="stars" value={inputs.stars} onChange={handleChange}/>
          </div>

          <p className="label-form">Forks</p>
          <div className="number-input">
            <select name="forksCompare" value={inputs.forksCompare} onChange={handleChange}>
              <option value=">">Greater than</option>
              <option value="<">Less than</option>
              <option value=">=">Greater or equal</option>
              <option value="<=">Less or equal</option>
            </select>
            <input type="number" name="forks" value={inputs.forks} onChange={handleChange}/>
          </div>

          <p className="label-form">Author</p>
          <input type="text" name="user" value={inputs.user} onChange={handleChange}/>

          <p className="label-form">Topic</p>
          <input type="text" name="topic" value={inputs.topic} onChange={handleChange}/>

          <p className="label-form">License</p>
          <select name="license" value={inputs.license} onChange={handleChange}>
            <option value="">Any license</option>
            {githubLicenses.map(
              license => <option key={license.key} value={license.key}>{license.name}</option>
            )}
          </select>
          
          <p className="small-info">Leave the input blank if you want to continue without a filter</p>

          <input className="submit-btn" type="submit" value="Find Repo" />
        </form>
    )
}