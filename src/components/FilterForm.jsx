import { githubLicenses } from "../data/github-license"

export default function FilterForm() {
    return (
        <form>
          <p className="label-form">Language</p>
          <input type="text" name="language" />

          <p className="label-form">Stars</p>
          <div className="number-input">
            <select>
              <option value=">">Greater than</option>
              <option value="<">Less than</option>
              <option value=">=">Greater or equal</option>
              <option value="<=">Less or equal</option>
            </select>
            <input type="number" name="stars" />
          </div>

          <p className="label-form">Forks</p>
          <div className="number-input">
            <select>
              <option value=">">Greater than</option>
              <option value="<">Less than</option>
              <option value=">=">Greater or equal</option>
              <option value="<=">Less or equal</option>
            </select>
            <input type="number" name="forks" />
          </div>

          <p className="label-form">Author</p>
          <input type="text" name="author" />

          <p className="label-form">Topic</p>
          <input type="text" name="topic" />

          <p className="label-form">License</p>
          <select>
            {githubLicenses.map(
              license => <option value={license.key}>{license.name}</option>
            )}
          </select>
          
          <p className="small-info">Leave the input blank if you want to continue without a filter</p>
        </form>
    )
}