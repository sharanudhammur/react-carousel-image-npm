import logo from "./logo.svg";
import "./App.css";
import Button from "./stories/Button/Button";
import Input from "./stories/Input/Input";
import Accordion from "./stories/Accordion/Accordion";
import Modal from "./stories/Modal/Modal";
import { useEffect, useState } from "react";
import ImageCarousel from "./stories/ImageCarousel/ImageCarousel";

function App() {
  const sections = [
    {
      title: "Section 1",
      content: <p>This is the content of section 1</p>
    },
    {
      title: "Section 2",
      content: (
        <div>
          <p>Here is some content for section 2</p>
          <p>It can contain anything, even nested components!</p>
        </div>
      )
    },
    {
      title: "Section 3",
      content: <p>Content for section 3 goes here.</p>
    }
  ];

  const [isOpen, setisOpen] = useState(false);

  const images = [
    "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg",
    "https://cdn.pixabay.com/photo/2023/08/02/18/21/yoga-8165759_1280.jpg",
    "https://i.ytimg.com/vi/jaC-owuMfMc/sddefault.jpg"
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Button size="lg" onClick={() => setisOpen(!isOpen)} label="hello" />
        <Button size="lg" onClick={() => setisOpen(!isOpen)} label="hello" />
        <Button size="lg" onClick={() => setisOpen(!isOpen)} label="hello" />
        <Input size="small" />
        <Input size="medium" />
        <Input size="large" />
        <Accordion sections={sections} />
        <Modal
          isOpen={isOpen}
          onClose={() => setisOpen(!isOpen)}
          title="Hello"
          footer={
            <Button label="close" onClick={() => setisOpen(!isOpen)}>
              Confirm
            </Button>
          }
        >
          <div>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries
          </div>
        </Modal>
        <div className="image-carosal-example">
          <ImageCarousel
            images={images}
            showIndicators={true}
            // autoplay={true}
            autoplayInterval={1500}
            infiniteLoop={false}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
