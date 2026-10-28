export default function RepoBox({ name, description, language, stars, forks, issues}) {
    return (
        <>
            <h3 className="name">{name}</h3>
            <p className="description">{description}</p>
            <div className="info">
                <div>
                    <img src="/src/assets/language.png" className="info-img" />
                    <p className="info-p">{language}</p>
                </div>
                <div>
                    <img src="/src/assets/stars.png" className="info-img" />
                    <p className="info-p">{stars}</p>
                </div>
                <div>
                    <img src="/src/assets/forks.png" className="info-img" />
                    <p className="info-p">{forks}</p>
                </div>
                <div>
                    <img src="/src/assets/issues.png" className="info-img" />
                    <p className="info-p">{issues}</p>
                </div>
            </div>
        </>
    )
}