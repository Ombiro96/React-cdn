ReactDOM.render(<h1>Hello, everyone!</h1>, document.querySelector(".one"));
ReactDOM.render(<h1>This is React</h1>, document.querySelector(".two"));
ReactDOM.render(
  <div className="menu">
    <div className="logo">
      <h1>LOGO</h1>
    </div>
    <ul className="menu-items">
      <a href="index.html" target="_blank" rel="noopener noreferrer">
        <li>Home</li>
      </a>
      <a href="index.html" target="_blank" rel="noopener noreferrer">
        <li>Contact us</li>
      </a>
      <a href="index.html" target="_blank" rel="noopener noreferrer">
        <li>Services</li>
      </a>
      <a href="index.html" target="_blank" rel="noopener noreferrer">
        <li>Products</li>
      </a>
    </ul>
  </div>,
  document.querySelector("#header")
);
function Testimonials() {
  return (
    <div className="main-testimonials">
      <div className="testimonials">
        <h1>Dan Kuso</h1>
        <p>"The product is good and we highly recommend it."</p>
      </div>
      <div className="testimonials">
        <h1>Shun Shazami</h1>
        <p>"The product is good and we highly recommend it."</p>
      </div>
      <div className="testimonials">
        <h1>Morrucho</h1>
        <p>"The product is good and we highly recommend it."</p>
      </div>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Testimonials />
  </div>,
  document.querySelector(".three")
);

// jsx is used to create objects that react use to render html
//remember only one parent element can be rendered... wrap everything under one div/container

// const header1=document.createElement("h1");
// header1.className="partners"
// header1.innerHTML="Our partners: "
// document.querySelector(".five").append(header1)
// console.log(header1)

// const element=<h1 className="partners">JSX this is our partners</h1>
// console.log(element)

function Partners() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
ReactDOM.render(<Partners />, document.querySelector(".five"));
