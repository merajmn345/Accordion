import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return <div className="accordion">

  {
    faqs.map((el, i) =>{
      return(
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      )
    })
  }
   

  </div>;
}


function AccordionItem({title,text,num}){

  const [isOpen, setIsOpen] = useState(false);

  function handleToggal(){
    setIsOpen(currOpen => !currOpen)
  }

  return(
    <div className={`item ${isOpen ? "open" : ""}` } onClick={handleToggal}>
      <p className="number">{num >9 ? num : `0${num+1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" :"+"}</p>

      {isOpen && <p className="content-box">{text}</p>}
    </div>
  )
}
