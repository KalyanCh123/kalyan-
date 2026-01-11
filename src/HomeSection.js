function HomeSection({ text }) {
    return (
        <div className="home-container">
            {/* Scrolling Text */}
            <div className="scroll-wrapper">
                <div className="scroll-text">
                    Welcome to Ch . Kalyan's Portfolio
                </div>
            </div>

            <div className="home-content">
                <div className="home-text">
                    <h1>Kalyan Chekuru</h1>

                    {text.split("\n").slice(1).map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>

                <img
                    src="/kalyan.jpeg"
                    alt="Kalyan"
                    className="profile-image"
                />
            </div>
        </div>
    );
}

export default HomeSection;
