import "./HomePageSignUpWidget.css"

export function HomePageSignUpWidget() : JSX.Element {

    return (
        <div className = "home-page-sign-up-widget">
            <div className = "home-page-sign-up-widget--content">
                <h1> Before We Get Started...</h1>
                <div className = "sign-up-widget--text-content">
                    <p> Consider creating an account! </p>
                    <p> It helps us get to know you better
                        allowing us to make a more personalized experience for you.</p>
                    <p> Plus it is completely free!</p>
                </div>
                <button className = "sign-up-button"> Make An Account </button>
            </div>
        </div>
    )
}