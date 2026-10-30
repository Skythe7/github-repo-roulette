import { githubLicenses } from "../data/github-license"
import { useState } from "react"

export default function FilterForm({ setRepo }) {
    const [inputs, setInputs] = useState({
        language: "JavaScript",
        stars: 0,
        starsCompare: ">",
        forks: 0,
        forksCompare: ">",
        user: "Linus Torvalds",
        topic: "beginner project",
        license: "AFL-3.0"
    })

    function handleChange(event) {
        setInputs(prevValues => ({
            ...prevValues,
            language: event.target.language,
            stars: event.target.stars,
            starsCompare: event.target.starsCompare,
            forks: event.target.forks,
            user: event.target.user,
            topic: event.target.topic,
            license: event.target.license
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()

        // TODO: use github api
    }

    return (
        <form>
          <p className="label-form">Language</p>
          <input type="text" name="language" value={inputs.language} onChange={handleChange}/>

          <p className="label-form">Stars</p>
          <div className="number-input">
            <select value={inputs.starsCompare} onChange={handleChange}>
              <option value=">">Greater than</option>
              <option value="<">Less than</option>
              <option value=">=">Greater or equal</option>
              <option value="<=">Less or equal</option>
            </select>
            <input type="number" name="stars" value={inputs.stars} onChange={handleChange}/>
          </div>

          <p className="label-form">Forks</p>
          <div className="number-input">
            <select value={inputs.forksCompare} onChange={handleChange}>
              <option value=">">Greater than</option>
              <option value="<">Less than</option>
              <option value=">=">Greater or equal</option>
              <option value="<=">Less or equal</option>
            </select>
            <input type="number" name="forks" value={inputs.forks} onChange={handleChange}/>
          </div>

          <p className="label-form">Author</p>
          <input type="text" name="author" value={inputs.user} onChange={handleChange}/>

          <p className="label-form">Topic</p>
          <input type="text" name="topic" value={inputs.topic} onChange={handleChange}/>

          <p className="label-form">License</p>
          <select value={inputs.license} onChange={handleChange}>
            {githubLicenses.map(
              license => <option key={license.key} value={license.key}>{license.name}</option>
            )}
          </select>
          
          <p className="small-info">Leave the input blank if you want to continue without a filter</p>
        </form>
    )
}