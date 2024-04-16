import "./globals.css";
import Navbar from "./component/navbar/page";


export const metadata = {
  title: "XODOCONAMOR",
  description: "Descubre una piel radiante con nuestra amplia gama de productos de cuidado facial y cremas especializadas. Encuentra soluciones efectivas para todas tus necesidades de belleza en XODOCONAMOR. ¡Compra ahora y disfruta de una piel saludable y luminosa!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
