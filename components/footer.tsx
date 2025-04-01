/**
 * Footer component. It displays the current year and a copyright notice.
 * @returns A JSX element representing the footer.
 */
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( 
        <footer className="border-t">
            <div className="p-5 flex-center">
                {currentYear} &copy; Shoes Store. All rights reserved.
            </div>
        </footer>
     );
}
 
export default Footer;