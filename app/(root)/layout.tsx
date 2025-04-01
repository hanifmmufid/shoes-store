import Footer from "@/components/footer";
import Header from "@/components/shared/header";

/**
 * The root layout component.
 *
 * This component is the top-level layout component. It renders a Header, a main
 * element with the provided children, and a Footer.
 *
 * @param {{children: React.ReactNode;}} props The props object.
 * @param {React.ReactNode} props.children The children of the component.
 *
 * @returns {React.ReactElement} The root layout component.
 */
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 wrapper">
                {children}
            </main>
            <Footer />
        </div>
    );
  }