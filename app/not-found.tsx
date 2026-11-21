
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="not-found-content">
                            <h1>404</h1>
                            <h2>Page Not Found</h2>
                            <p> Sorry, the page you are looking for doesn't exist or has been moved.</p>
                            <Link href="/" className="back-home-btn" title="Back to Home">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}
