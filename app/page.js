import Image from "next/image";
import Link from "next/link";
import "./style.css";
import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <div>
      <>
        <h1 className="pula">Home</h1>
        <h1>Home</h1>
        <p>This is a paragraph</p>

        <Image
          src={"/assets/images/surfby.jpg"}
          alt="Kami"
          width={300}
          height={200}
        />
        <br />

        <Link href={"/about"}>About</Link>
        <br />
        <Link href={"/contactus"}>Contact Us</Link>
        <br />
        <Button variant="danger">Red Button</Button>
      </>
    </div>
  );
};

export default App;
